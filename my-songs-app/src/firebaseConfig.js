import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, 
  projectId: "my-songs-app-c436e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };