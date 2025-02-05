import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk-Ba3_yHSVD8-jZR5IvysGL__OJRKN7A",
  authDomain: "my-songs-app.firebaseapp.comMAIN",
  projectId: "my-songs-app-c436e",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };