import firebase from "firebase/app";
import "firebase/firestore";

// Config
const config = {
	apiKey: "AIzaSyD0SYXSbFMwBIM2S4BYbU7ooV4sLWtNgLI",
	authDomain: "noor-cf.firebaseapp.com",
	databaseURL: "https://noor-cf.firebaseio.com",
	projectId: "noor-cf",
	storageBucket: "noor-cf.appspot.com",
	messagingSenderId: "522532514018",
	appId: "1:522532514018:web:d60f03e222b8e1fa20d6bb",
	measurementId: "G-L1DD9QX56P",
};

const firebaseInit = firebase.initializeApp(config);

export { firebaseInit };
