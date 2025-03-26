import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZj7sEZqhdHXwIAtplrZ3Pubv-PcJ-8U0",
  authDomain: "thetechshop77.firebaseapp.com",
  projectId: "thetechshop77",
  storageBucket: "thetechshop77.firebasestorage.app",
  messagingSenderId: "158714054468",
  appId: "1:158714054468:web:2e2262918defd423203911"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)