import firebase from 'firebase/app';
import 'firebase/firestore'; 


var firebaseConfig = {
    apiKey: "AIzaSyDWCbZDLUMRvnjvIgjgL_qEiNkGy4JCnVw",
    authDomain: "fireblogs-7c7cb.firebaseapp.com",
    projectId: "fireblogs-7c7cb",
    storageBucket: "fireblogs-7c7cb.appspot.com",
    messagingSenderId: "433572041395",
    appId: "1:433572041395:web:4dc5e2dac62a43d0ead6c6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timeStamp};
  export default firebaseApp.firestore();