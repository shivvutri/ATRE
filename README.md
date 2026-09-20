# UP Assistant Teacher Hindi – 5 Firebase MCQ Quizzes

इस package में 5 अलग-अलग HTML quizzes हैं। प्रत्येक quiz में 20 Hindi MCQs हैं और content structure official PDF के language-topic wording (व्याकरण + अपठित गद्यांश/पद्यांश + comprehension) पर आधारित practice format है।

## Marking simulation
Official PDF says: 120 questions, 3 marks per question, and 1 mark deducted for a wrong answer. इसलिए इन 20-question practice sets में सही = +3, गलत = −1 और unanswered = 0 रखा गया है। Maximum = 60.

## Files
- index.html – main site (news/notification portal) — "Hindi" subject अब सीधे hindi-quiz-hub.html पर ले जाता है
- hindi-quiz-hub.html – 5 quiz sets की themed listing page
- hindi-quiz-1.html … hindi-quiz-5.html – 5 separate quiz pages (अब index.html जैसी navy/maroon/gold theme में)
- quiz-common.js – Firebase Firestore, leaderboard and submission-print logic
- firebase-config.js – your Firebase Web App config goes here
- configure-firebase.sh – firebase-config.js को Firebase CLI से auto-fill करने वाला script (नीचे देखें)
- firestore.rules – starter rules for a public practice leaderboard
- styles.css – index.html के theme से match करती हुई quiz UI (Newsreader + IBM Plex fonts, navy/maroon/gold palette)

## Firebase setup (आसान तरीका — script से)
1. सारी files एक folder में रखें (Node.js installed होना चाहिए)।
2. Terminal में: `chmod +x configure-firebase.sh && ./configure-firebase.sh`
3. Script आपसे Firebase login करवाएगा, project चुनवाएगा, एक Web App ढूंढेगा/बनाएगा, और `firebase-config.js` अपने-आप भर देगा।
4. अंत में पूछेगा कि क्या `firestore.rules` अभी publish करनी है — चाहें तो `y` दबाएँ।
5. ध्यान रहे: Firestore Database Console में पहले से enabled होनी चाहिए (Firebase Console → Firestore Database → Create database)।

## Firebase setup (manual तरीका)
1. Firebase Console में नया project बनाइए।
2. Project settings → Your apps → Web app से Firebase config copy कीजिए।
3. `firebase-config.js` में `YOUR_*` values replace कीजिए।
4. Firestore Database enable कीजिए।
5. `firestore.rules` की rules Firebase console में publish कीजिए।
6. Files को HTTP(S) hosting पर रखिए (GitHub Pages, Firebase Hosting, Netlify आदि)। `file://` से ES modules/Firebase अक्सर सही नहीं चलते।

## Collections
हर set अपनी Firestore collection में submissions रखता है:
- `hindi_quiz_set_1`
- `hindi_quiz_set_2`
- `hindi_quiz_set_3`
- `hindi_quiz_set_4`
- `hindi_quiz_set_5`

## Leaderboard
Submission के बाद उसी set की top-20 leaderboard Firebase Firestore से fetch होती है और score descending order में दिखती है।

## Submission PDF
Submission के बाद “Submission PDF / Print” दबाएँ। A4 print-ready report खुलेगी; browser में “Save as PDF” चुनकर PDF सेव कीजिए। Report में candidate, score, सही/गलत/unanswered और प्रत्येक प्रश्न का selected/correct answer शामिल है।

## Important
यह practice material है, official प्रश्नपत्र नहीं। Firebase public-create rules practice use के लिए हैं; high-stakes exam के लिए authentication/App Check और server-side validation जोड़नी चाहिए, क्योंकि browser-side score को technically बदलना संभव है।
