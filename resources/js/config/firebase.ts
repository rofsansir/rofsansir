import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// Firebase configuration
// Replace these values with your new Firebase project credentials
const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY || '',
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.VITE_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.VITE_FIREBASE_APP_ID || '',
    measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || '',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const storage = getStorage(app);

// Auth providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export default app;
