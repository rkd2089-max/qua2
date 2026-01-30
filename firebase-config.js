// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyCK-hHZBxftHwgH-oRiPZ0DOCqEGQX6lCw",
  authDomain: "qna2-92801.firebaseapp.com",
  projectId: "qna2-92801",
  storageBucket: "qna2-92801.firebasestorage.app",
  messagingSenderId: "377651730491",
  appId: "1:377651730491:web:209f8427c9fc6188ac641e",
  measurementId: "G-TPL9P4WJJ4"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
