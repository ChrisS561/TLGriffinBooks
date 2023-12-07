// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries
const envApiKey = process.env.REACT_APP_API_KEY;
const envAuth = process.env.REACT_APP_AUTH_DOMAIN;
const envProject = process.env.REACT_APP_PROJECT_ID;
const envStorage = process.env.REACT_APP_STORAGE_BUCKET;
const envMessage = process.env.REACT_APP_MESSAGING_SENDER_ID;
const envApp = process.env.REACT_APP_APP_ID;

const firebaseConfig = {
	apiKey: envApiKey,
	authDomain: envAuth,
	projectId: envProject,
	storageBucket: envStorage,
	messagingSenderId: envMessage,
	appId: envApp,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth,app };
