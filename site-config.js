// =====================================================================
// यह फाइल सिर्फ "लिस्टिंग" के लिए है — index.html इसी फाइल को पढ़कर
// MCQ subject links और Mock Test cards अपने आप बना लेता है।
//
// नई Hindi quiz जोड़नी हो → नीचे SUBJECT_QUIZZES.hindi वाले array में एक
// लाइन जोड़ दें। नया subject (जैसे Maths) शुरू करना हो → एक नई key
// (जैसे "maths") जोड़ दें, वो अपने आप dropdown से जुड़ जाएगी बशर्ते
// dropdown में वही value पहले से मौजूद हो।
//
// नया Mock Test जोड़ना हो → MOCK_TESTS array में एक नई entry डाल दें,
// live: true करते ही उसका "अभी शुरू करें" बटन दिखने लगेगा।
//
// ध्यान दें: इस फाइल में सिर्फ लिंक/नाम/स्टेटस है — असली प्रश्न इसमें नहीं
// हैं। हर quiz के प्रश्न उसकी अपनी HTML फाइल में ही (क्विज़ के अंदर) मौजूद हैं।
// =====================================================================

const SUBJECT_QUIZZES = {
  hindi: [
    { url: "./hindi-quiz-1.html", label: "सेट 1" },
    { url: "./hindi-quiz-2.html", label: "सेट 2" },
    { url: "./hindi-quiz-3.html", label: "सेट 3" },
    { url: "./hindi-quiz-4.html", label: "सेट 4" },
    { url: "./hindi-quiz-5.html", label: "सेट 5" }
  ],
  maths: [
    { url: "./maths-quiz-1.html", label: "सेट 1" },
    { url: "./maths-quiz-2.html", label: "सेट 2" },
    { url: "./maths-quiz-3.html", label: "सेट 3" },
    { url: "./maths-quiz-4.html", label: "सेट 4" },
    { url: "./maths-quiz-5.html", label: "सेट 5" }
  ],
  english: [
    { url: "./english-quiz-1.html", label: "सेट 1" },
    { url: "./english-quiz-2.html", label: "सेट 2" },
    { url: "./english-quiz-3.html", label: "सेट 3" },
    { url: "./english-quiz-4.html", label: "सेट 4" },
    { url: "./english-quiz-5.html", label: "सेट 5" }
  ],
  pedagogy: [
    { url: "./cdp-quiz-1.html", label: "सेट 1" },
    { url: "./cdp-quiz-2.html", label: "सेट 2" },
    { url: "./cdp-quiz-3.html", label: "सेट 3" },
    { url: "./cdp-quiz-4.html", label: "सेट 4" },
    { url: "./cdp-quiz-5.html", label: "सेट 5" }
  ],
  evs: [
    { url: "./env-quiz-1.html", label: "सेट 1" },
    { url: "./env-quiz-2.html", label: "सेट 2" },
    { url: "./env-quiz-3.html", label: "सेट 3" },
    { url: "./env-quiz-4.html", label: "सेट 4" },
    { url: "./env-quiz-5.html", label: "सेट 5" }
  ],
  reasoning: [
    { url: "./reasoning-quiz-1.html", label: "सेट 1" },
    { url: "./reasoning-quiz-2.html", label: "सेट 2" },
    { url: "./reasoning-quiz-3.html", label: "सेट 3" }
  ],
  computer: [
    { url: "./computer-quiz-1.html", label: "सेट 1" },
    { url: "./computer-quiz-2.html", label: "सेट 2" },
    { url: "./computer-quiz-3.html", label: "सेट 3" }
  ],
};

const MOCK_TESTS = [
  { number: 1, url: "./mock-test-1.html", live: true },
  { number: 2, url: "./mock-test-2.html", live: true },
  { number: 3, url: "./mock-test-3.html", live: false }
];
