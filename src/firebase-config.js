import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAXRGZzAfaV9LNFoYtt8D80-YOyi1Y4qjA",
	authDomain: "portfoliodb-af167.firebaseapp.com",
	projectId: "portfoliodb-af167",
	storageBucket: "portfoliodb-af167.appspot.com",
	messagingSenderId: "1036488033546",
	appId: "1:1036488033546:web:bdcbbc42acad46134c26f3",
	measurementId: "G-RZZGEX42KJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { app, db };
