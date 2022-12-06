import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqriVYRz4a-dXB755RbzK3vFFsXInq3wg",
  authDomain: "netflix-39e66.firebaseapp.com",
  projectId: "netflix-39e66",
  storageBucket: "netflix-39e66.appspot.com",
  messagingSenderId: "390405155018",
  appId: "1:390405155018:web:2d3e2e6e97fedab786ac33",
  measurementId: "G-7SE0C4JWKY"
}

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
