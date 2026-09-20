import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  limit,
  orderBy,
  query
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

export const LETTERS = ["A", "B", "C", "D"];

const configured = Object.values(firebaseConfig).every(v => typeof v === "string" && v.trim() && !v.includes("YOUR_"));
let db = null;
if (configured) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export function isFirebaseConfigured() {
  return configured;
}

function cleanText(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

export async function saveSubmission({ collectionName, quizId, quizTitle, candidateName, rollNo, score, maxScore, correct, wrong, unanswered, answers }) {
  if (!db) return { saved: false, id: null, message: "Firebase configuration अभी सेट नहीं की गई है।" };
  const payload = {
    quizId: cleanText(quizId, 60),
    quizTitle: cleanText(quizTitle, 120),
    candidateName: cleanText(candidateName, 80),
    rollNo: cleanText(rollNo, 40),
    score: Number(score),
    maxScore: Number(maxScore),
    correct: Number(correct),
    wrong: Number(wrong),
    unanswered: Number(unanswered),
    answers: Array.isArray(answers) ? answers.map(v => Number.isInteger(v) ? v : -1) : [],
    submittedAt: serverTimestamp()
  };
  const ref = await addDoc(collection(db, collectionName), payload);
  return { saved: true, id: ref.id, message: "Submission Firebase में save हो गया।" };
}

export async function fetchLeaderboard(collectionName, take = 20) {
  if (!db) return [];
  const q = query(collection(db, collectionName), orderBy("score", "desc"), limit(Math.min(Math.max(take, 1), 100)));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc, index) => ({ id: doc.id, rank: index + 1, ...doc.data() }));
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function formatDate(value) {
  if (!value) return "अभी";
  try {
    const date = typeof value.toDate === "function" ? value.toDate() : new Date(value);
    return new Intl.DateTimeFormat("hi-IN", { dateStyle: "medium", timeStyle: "short" }).format(date);
  } catch {
    return "अभी";
  }
}

export function makeSubmissionPdf({ quizTitle, candidateName, rollNo, score, maxScore, correct, wrong, unanswered, questions, answers }) {
  const printWindow = window.open("", "_blank", "noopener,noreferrer,width=900,height=700");
  if (!printWindow) {
    alert("Popup blocked है। कृपया popup allow करके फिर PDF button दबाएँ।");
    return;
  }

  const rows = questions.map((q, i) => {
    const selected = answers[i] ?? -1;
    const selectedText = selected >= 0 ? `${LETTERS[selected]}. ${escapeHtml(q.options[selected])}` : "अनुत्तरित";
    const correctText = `${LETTERS[q.answer]}. ${escapeHtml(q.options[q.answer])}`;
    const status = selected < 0 ? "अनुत्तरित" : selected === q.answer ? "सही" : "गलत";
    const mark = selected < 0 ? "0" : selected === q.answer ? "+3" : "−1";
    return `<tr>
      <td>${i + 1}</td>
      <td>${escapeHtml(q.question)}</td>
      <td>${selectedText}</td>
      <td>${correctText}</td>
      <td>${status}</td>
      <td>${mark}</td>
    </tr>`;
  }).join("");

  printWindow.document.write(`<!doctype html><html lang="hi"><head><meta charset="utf-8"><title>${escapeHtml(quizTitle)} - Submission Report</title>
  <style>
    @page{size:A4;margin:12mm}body{font-family:"Noto Sans Devanagari","Nirmala UI",Arial,sans-serif;color:#111;line-height:1.45}h1{font-size:20px;margin:0 0 4px}h2{font-size:15px;margin:14px 0 6px}.muted{color:#555;font-size:11px}.meta{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:12px 0}.box{border:1px solid #ddd;border-radius:8px;padding:8px}.score{font-size:22px;font-weight:800}.summary{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}.summary .box{text-align:center}.summary b{display:block;font-size:15px}table{width:100%;border-collapse:collapse;font-size:8.5px;margin-top:8px}th,td{border:1px solid #bbb;padding:5px;vertical-align:top}th{background:#f2f4f7}footer{margin-top:12px;font-size:9px;color:#666}@media print{button{display:none}}</style></head><body>
  <h1>${escapeHtml(quizTitle)}</h1><div class="muted">UP Assistant Teacher — Hindi Practice Submission Report</div>
  <div class="meta"><div class="box"><b>अभ्यर्थी:</b> ${escapeHtml(candidateName)}</div><div class="box"><b>रोल/रजिस्ट्रेशन:</b> ${escapeHtml(rollNo || "—")}</div></div>
  <div class="summary"><div class="box"><b class="score">${score} / ${maxScore}</b>स्कोर</div><div class="box"><b>${correct}</b>सही</div><div class="box"><b>${wrong}</b>गलत</div><div class="box"><b>${unanswered}</b>अनुत्तरित</div></div>
  <h2>उत्तर-पत्र विश्लेषण</h2><table><thead><tr><th>प्र.</th><th>प्रश्न</th><th>आपका उत्तर</th><th>सही उत्तर</th><th>स्थिति</th><th>अंक</th></tr></thead><tbody>${rows}</tbody></table>
  <footer>मार्किंग: सही उत्तर +3, गलत उत्तर −1, अनुत्तरित 0. यह practice submission है; आधिकारिक परीक्षा/भर्ती निर्देश संबंधित आयोग की सूचना के अनुसार मान्य होंगे।</footer>
  <script>window.onload=()=>setTimeout(()=>window.print(),350);</script></body></html>`);
  printWindow.document.close();
}
