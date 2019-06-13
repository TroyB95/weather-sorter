import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "weather-sorter.firebaseapp.com",
  databaseURL: "https://weather-sorter.firebaseio.com",
  projectId: "weather-sorter",
  storageBucket: "weather-sorter.appspot.com",
  messagingSenderId: "1081831409082",
  appId: "1:1081831409082:web:0d15cae22be23e25",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

let database = firebase.database();

function writeUserData(userId, name) {
  database.ref("users/" + userId).set({
    username: name,
  });
}

export { writeUserData };
