// ═══════════════════════════════════════════════════════════
//  notes-data.js — UP Sahayak Adhyapak Bharti Notes Portal
//
//  📁 FOLDER STRUCTURE (GitHub pe aise rakhein):
//  your-repo/
//  ├── index.html
//  ├── notes.html
//  ├── notes-data.js
//  └── notes-pdf/              ← SAARE PDF YAHAN RAKHEIN
//      ├── UP_Special_GK_Notes.pdf
//      ├── hindi_grammar.pdf
//      ├── maths_formula.pdf
//      └── ...
//
//  HOW TO ADD NEW PDF:
//  1. PDF ko "notes-pdf" folder mein upload karo (GitHub pe)
//  2. Neeche us subject ki "pdfs" array mein ek object add karo:
//     { title:"PDF ka naam", url:"notes-pdf/file.pdf", pages:15, size:"2.1 MB", tag:"New" }
//  3. Save karo — website pe automatically show ho jayega!
// ═══════════════════════════════════════════════════════════

const NOTES_DATA = [

  // ─────────────────────────────────────────
  //  1. सामान्य ज्ञान / समसामयिक (25 Qs)
  // ─────────────────────────────────────────
  {
    id: "gk",
    icon: "📰",
    accent: "#2563eb",
    name: "सामान्य ज्ञान",
    sub: "Samanya Gyan / Current Affairs",
    qs: 25,
    topics: [
      "अंतर्राष्ट्रीय व राष्ट्रीय घटनाएं",
      "पुरस्कार, खेल-कूद",
      "भारतीय संस्कृति एवं कला",
      "स्थान, व्यक्तित्व, रचनाएं"
    ],
    pdfs: [
      {
        title: "UP Special GK — संपूर्ण नोट्स (इतिहास, भूगोल, राजनीति, जनसंख्या)",
        url: "notes-pdf/UP_Special_GK_Notes.pdf",
        pages: 17,
        size: "3.2 MB",
        tag: "New"
      },
      { 
        title: "राष्ट्रीय अंतरराष्ट्रीय घटनायें 2026",
        url: "notes-pdf/GS_Rashtriya_Antarrashtriya_Ghatnayen_upatre.pdf",
        pages: 3, 
        size: "815 KB",
        tag: "New" 
      },
      { 
        title: "पुरुष्कार 2026", 
        url: "notes-pdf/GS_Puraskar_Awards_upatre.pdf",
        pages: 3, 
        size: "730 KB",
        tag: "New" 
      },
      { 
        title: "खेलकूद 2026", 
        url: "notes-pdf/GS_Khel_Kood_Sports_upatre.pdf",
        pages: 3, 
        size: "730 KB",
        tag: "New" 
      },
    ]
  },

  // ─────────────────────────────────────────
  //  2. तार्किक ज्ञान (5 Qs)
  // ─────────────────────────────────────────
  {
    id: "reasoning",
    icon: "🧠",
    accent: "#7c3aed",
    name: "तार्किक ज्ञान",
    sub: "Reasoning / Logical Thinking",
    qs: 5,
    topics: [
      "Analogies & Classification",
      "Coding-Decoding, Number Series",
      "Venn Diagrams, Puzzles",
      "Direction Sense, Letter Series"
    ],
    pdfs: [
      // { title: "Reasoning Short Notes", url: "notes-pdf/reasoning.pdf", pages: 12, size: "1.8 MB", tag: "" }
    ]
  },

  // ─────────────────────────────────────────
  //  3. हिन्दी / संस्कृत / English (30 Qs)
  // ─────────────────────────────────────────
  {
    id: "hindi",
    icon: "🔤",
    accent: "#dc2626",
    name: "हिन्दी / संस्कृत / English",
    sub: "Bhasha — Hindi, Sanskrit, English",
    qs: 30,
    topics: [
      "हिन्दी व्याकरण, अपठित गद्यांश",
      "हिन्दी अपठित पद्यांश",
      "English Grammar & Comprehension",
      "संस्कृत — मूलभूत अवधारणाएं"
    ],
     pdfs: [
      { title: "हिन्दी व्याकरण Notes", url: "notes-pdf/Hindi-Vyakaran-Notes.pdf", pages: 19, size: "225 KB", tag: "" },
      { title: "English Grammar Notes", url: "notes-pdf/english-grammar.pdf", pages: 13, size: "184 KB", tag: "New" }
    ]
  },

  // ─────────────────────────────────────────
  //  4. विज्ञान (8 Qs)
  // ─────────────────────────────────────────
  {
    id: "science",
    icon: "🔬",
    accent: "#0891b2",
    name: "विज्ञान",
    sub: "Science (Class 12 Level)",
    qs: 8,
    topics: [
      "गति, बल, ऊर्जा, प्रकाश, ध्वनि",
      "मानव शरीर, स्वास्थ्य, पोषण",
      "पदार्थ की अवस्थाएं",
      "पर्यावरण एवं प्राकृतिक संसाधन"
    ],
    pdfs: [
      // { title: "विज्ञान Short Notes", url: "notes-pdf/science.pdf", pages: 18, size: "2.0 MB", tag: "" }
    ]
  },

  // ─────────────────────────────────────────
  //  5. गणित (16 Qs)
  // ─────────────────────────────────────────
  {
    id: "maths",
    icon: "➗",
    accent: "#16a34a",
    name: "गणित",
    sub: "Mathematics (Class 12 Level)",
    qs: 16,
    topics: [
      "भिन्न, दशमलव, ब्याज, लाभ-हानि",
      "प्रतिशत, अनुपात, औसत",
      "क्षेत्रफल, आयतन, सांख्यिकी",
      "बीजगणित, सामान्य ज्यामिति"
    ],
    pdfs: [
      // { title: "गणित Formula Sheet", url: "notes-pdf/maths_formula.pdf", pages: 10, size: "1.2 MB", tag: "" }
    ]
  },

  // ─────────────────────────────────────────
  //  6. पर्यावरण एवं सामाजिक अध्ययन (8 Qs)
  // ─────────────────────────────────────────
  {
    id: "evs",
    icon: "🌍",
    accent: "#65a30d",
    name: "पर्यावरण एवं सामाजिक अध्ययन",
    sub: "EVS / Social Studies",
    qs: 8,
    topics: [
      "पृथ्वी की संरचना, नदियां, पर्वत",
      "भारतीय भूगोल, स्वतंत्रता संग्राम",
      "भारतीय संविधान, शासन व्यवस्था",
      "पर्यावरण संरक्षण, आपदा प्रबंधन"
    ],
    pdfs: [
      // { title: "EVS Notes PDF", url: "notes-pdf/evs.pdf", pages: 20, size: "2.3 MB", tag: "" }
    ]
  },

  // ─────────────────────────────────────────
  //  7. शिक्षण कौशल (8 Qs)
  // ─────────────────────────────────────────
  {
    id: "teaching",
    icon: "🏫",
    accent: "#d97706",
    name: "शिक्षण कौशल",
    sub: "Teaching Skills & Pedagogy",
    qs: 8,
    topics: [
      "शिक्षण विधियां एवं कौशल",
      "शिक्षण अधिगम के सिद्धांत",
      "समावेशी शिक्षा, प्राथमिक शिक्षा",
      "शैक्षिक मूल्यांकन एवं प्रबंधन"
    ],
    pdfs: [
      // { title: "शिक्षण कौशल Notes", url: "notes-pdf/teaching_skills.pdf", pages: 15, size: "1.9 MB", tag: "" }
    ]
  },

  // ─────────────────────────────────────────
  //  8. बाल मनोविज्ञान (8 Qs)
  // ─────────────────────────────────────────
  {
    id: "psychology",
    icon: "👶",
    accent: "#db2777",
    name: "बाल मनोविज्ञान",
    sub: "Child Psychology / Bal Manovigyan",
    qs: 8,
    topics: [
      "व्यक्तिगत भिन्नता, बाल विकास",
      "सीखने की आवश्यकता की पहचान",
      "सीखने के सिद्धांत एवं कक्षा प्रयोग",
      "दिव्यांग छात्रों हेतु विशेष व्यवस्था"
    ],
    pdfs: [
      // { title: "बाल मनोविज्ञान Notes", url: "notes-pdf/child_psychology.pdf", pages: 18, size: "2.1 MB", tag: "" }
    ]
  },

  // ─────────────────────────────────────────
  //  9. सूचना तकनीकी (4 Qs)
  // ─────────────────────────────────────────
  {
    id: "ict",
    icon: "💻",
    accent: "#0284c7",
    name: "सूचना तकनीकी",
    sub: "Information Technology / ICT",
    qs: 4,
    topics: [
      "Computer, Internet, Smartphone",
      "OER — Open Educational Resources",
      "शिक्षण में उपयोगी Apps",
      "Digital शिक्षण सामग्री का उपयोग"
    ],
    pdfs: [
      // { title: "ICT Notes PDF", url: "notes-pdf/ict.pdf", pages: 8, size: "1.0 MB", tag: "" }
    ]
  },

  // ─────────────────────────────────────────
  //  10. जीवन कौशल / अभिवृत्ति (8 Qs)
  // ─────────────────────────────────────────
  {
    id: "lifeskills",
    icon: "🌟",
    accent: "#9333ea",
    name: "जीवन कौशल / अभिवृत्ति",
    sub: "Life Skills / Management / Attitude",
    qs: 8,
    topics: [
      "व्यावसायिक आचरण एवं नीति",
      "शिक्षण की भूमिका (Facilitator आदि)",
      "संवैधानिक एवं मानवीय मूल्य",
      "दंड एवं पुरस्कार व्यवस्था"
    ],
    pdfs: [
      // { title: "Life Skills Notes", url: "notes-pdf/life_skills.pdf", pages: 12, size: "1.4 MB", tag: "" }
    ]
  }

];
