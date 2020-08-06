import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDhARubnHpp4HeUZYNO4GJrh9goPAH9qzE",
  authDomain: "photo-gallary-design.firebaseapp.com",
  databaseURL: "https://photo-gallary-design.firebaseio.com",
  projectId: "photo-gallary-design",
  storageBucket: "photo-gallary-design.appspot.com",
  messagingSenderId: "868712149333",
  appId: "1:868712149333:web:f28855737be79f20a6bfdc",
  measurementId: "G-Y4D5G7RW45",
};
// Initialize Firebase // : if request.auth != null
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
