import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNGjZSTiSg28kxO1CCphsGWUaO6Ojg8C4",
  authDomain: "cart-5b3f8.firebaseapp.com",
  projectId: "cart-5b3f8",
  storageBucket: "cart-5b3f8.appspot.com",
  messagingSenderId: "352970820441",
  appId: "1:352970820441:web:d70045ee494e7dee2f5a48"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

