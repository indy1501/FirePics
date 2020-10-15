import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCGBxlM6MUl11CeSrMeXRHbgDBzjvqZk24",
  authDomain: "firepics101.firebaseapp.com",
  databaseURL: "https://firepics101.firebaseio.com",
  projectId: "firepics101",
  storageBucket: "firepics101.appspot.com",
  messagingSenderId: "825247936187",
  appId: "1:825247936187:web:cf6f0399f971a3784c439e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
