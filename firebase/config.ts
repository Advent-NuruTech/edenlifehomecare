// /lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics'; // Optional: Not needed in SSR or Next.js apps

const firebaseConfig = {
  apiKey: "AIzaSyDxY4Cb5WUElO8Y0O-y9rtq5JFC-8iFMcQ",
  authDomain: "edenlife-homacare.firebaseapp.com",
  projectId: "edenlife-homacare",
  storageBucket: "edenlife-homacare.firebasestorage.app",
  messagingSenderId: "140770248728",
  appId: "1:140770248728:web:d7a66d17554b0d4fae5b6d",
  measurementId: "G-WJKFSXH3G7"
};

// Avoid initializing multiple times
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
// const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, db, storage, auth };
