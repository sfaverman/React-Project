import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
   apiKey: "AIzaSyA5ud3a5UnSNT_9xDxYEzm9sHWPjbTn4mU",
    authDomain: "react-crud-project-21bd2.firebaseapp.com",
    databaseURL: "https://react-crud-project-21bd2.firebaseio.com",
    projectId: "react-crud-project-21bd2",
    storageBucket: "react-crud-project-21bd2.appspot.com",
    messagingSenderId: "651483932560",
    appId: "1:651483932560:web:a83fe2820494e00f17b515"
};
firebase.initializeApp(config);
export default firebase;
