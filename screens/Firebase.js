// ==============================================================
// THis is  "IOT_DHT11" API

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase' 

// const firebaseConfig = {
//   apiKey: "AIzaSyB2nKtohksyRb6SYEl85lIAi0f6iNi8eRg",
//   authDomain: "iot-t-h-4e490.firebaseapp.com",
//   databaseURL: "https://iot-t-h-4e490-default-rtdb.firebaseio.com",
//   projectId: "iot-t-h-4e490",
//   storageBucket: "iot-t-h-4e490.appspot.com",
//   messagingSenderId: "238958511632",
//   appId: "1:238958511632:web:0f44750732dd81a6d8ec95",
//   measurementId: "G-WGXVYC8DJL"
// };











// ===============================================================
// This is "Test" API 
  
// import firebase from 'firebase' 

const firebaseConfig = {
    apiKey: "AIzaSyDadsbV0aUDL6ampLv1ZHQiy_gs0k9dEyg",
    authDomain: "test-576d2.firebaseapp.com",
    databaseURL: "https://test-576d2-default-rtdb.firebaseio.com",
    projectId: "test-576d2",
    storageBucket: "test-576d2.appspot.com",
    messagingSenderId: "698386512226",
    appId: "1:698386512226:web:8c62a9ace593221933143b",
    measurementId: "G-9NNNJZVYMX"
  };

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}
