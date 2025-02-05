import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk-Ba3_yHSVD8-jZR5IvysGL__OJRKN7A",
  authDomain: "my-songs-app.firebaseapp.comMAIN",
  projectId: "my-songs-app-c436e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };