import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBM9MjT97MtW6Dmn05enhmrrPdiwikXtGU",
    authDomain: "hypeflix-by-vsaag-mca-ii.firebaseapp.com",
    projectId: "hypeflix-by-vsaag-mca-ii",
    storageBucket: "hypeflix-by-vsaag-mca-ii.appspot.com",
    messagingSenderId: "223885856176",
    appId: "1:223885856176:web:d5a7b35513e83cf0839a75",
    measurementId: "G-Y69R00J6Q3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);//initialize firebase
const db = firebaseApp.firestore();//connecting to database
const auth = firebase.auth();//for authentication
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();//used for storing images

export { auth, provider, storage };
export default db;