// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const envApiKey = process.env.REACT_APP_API_KEY;
const envAuth = process.env.REACT_APP_AUTH_DOMAIN;
const envProject = process.env.REACT_APP_PROJECT_ID
const envStorage = process.env.REACT_APP_STORAGE_BUCKET
const envMessage = process.env.REACT_APP_MESSAGING_SENDER_ID
const envApp = process.env.REACT_APP_APP_ID;

// Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: 'AIzaSyCnZBxhVYi6upNcbWBfmO5oeVvB7J7jvuI',
// 	authDomain: 'tisha-bookwebsite.firebaseapp.com',
// 	projectId: 'tisha-bookwebsite',
// 	storageBucket: 'tisha-bookwebsite.appspot.com',
// 	messagingSenderId: '482096546544',
// 	appId: '1:482096546544:web:1b17064de43a108886b835',
// };




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
export const db = getFirestore(app);
