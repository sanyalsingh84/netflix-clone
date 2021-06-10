import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//we need seed the database

// we need cofig here
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "netflix-clone-8c554.firebaseapp.com",
  projectId: "netflix-clone-8c554",
  storageBucket: "netflix-clone-8c554.appspot.com",
  messagingSenderId: "725510840774",
  appId: "1:725510840774:web:cee7e311712a73039b52c7",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
