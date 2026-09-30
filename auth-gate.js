// Protected pages ke <head> mein lagta hai (add-gate.py yeh apne aap kar deta hai).
// Login na ho, student band ho, ya account kisi aur device par khul jaye to login.html par bhej deta hai.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, doc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { firebaseConfig } from "./auth-config.js";

const app = initializeApp(firebaseConfig, "gate");   // alag naam: quiz pages ke apne Firebase app se takraav nahi
const auth = getAuth(app), db = getFirestore(app);
let unsub = null, shown = false;

function toLogin(m) {
  const next = location.pathname.split("/").pop() + location.search;
  location.replace("./login.html?next=" + encodeURIComponent(next) + (m ? "&m=" + m : ""));
}
function reveal(d) {
  if (shown) return; shown = true;
  const name = d.name;
  window.ATRE_USER = { name: d.name || "", loginId: d.loginId || "" };
  window.dispatchEvent(new CustomEvent("atre-user"));
  document.getElementById("gate-hide")?.remove();
  const b = document.createElement("button");
  b.textContent = "Logout" + (name ? " · " + name : "");
  b.style.cssText = "position:fixed;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:9999;background:#16233f;color:#fff;border:0;border-radius:99px;padding:8px 14px;font:600 .8rem system-ui,sans-serif;opacity:.9;cursor:pointer";
  b.onclick = async () => { localStorage.removeItem("atre_sid"); await signOut(auth); location.replace("./login.html"); };
  document.body.appendChild(b);
}

onAuthStateChanged(auth, async (u) => {
  if (unsub) { unsub(); unsub = null; }
  if (!u) return toLogin();
  try {
    const st = await getDoc(doc(db, "students", u.uid));
    if (!st.exists() || st.data().active !== true) { await signOut(auth); return toLogin("off"); }
    const sid = localStorage.getItem("atre_sid");
    if (!sid) { await signOut(auth); return toLogin(); }
    // Session par nazar: doosre device par login hote hi sid badal jati hai aur yeh device logout ho jata hai
    unsub = onSnapshot(doc(db, "sessions", u.uid), async (s) => {
      if (s.metadata.fromCache && !s.exists()) return;
      if (!s.exists() || s.data().sid !== sid) {
        localStorage.removeItem("atre_sid"); await signOut(auth); return toLogin("kicked");
      }
      reveal(st.data());
    }, (e) => { console.error(e); toLogin(); });
  } catch (e) { console.error(e); toLogin(); }
});
