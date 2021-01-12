import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import ButtonList from './components/ButtonList.js'
import MailTitleInput from './components/MailTitleInput.js'
import MailBodyInput from './components/MailBodyInput.js'


function App() {
  const firebase = require('firebase/app');
  require('firebase/');
  var firebaseConfig = {
    apiKey: "AIzaSyDgQSBKEsviDBCT89A0nybQt9Q7YGVX0zk",
    authDomain: "feumailer-iut33.firebaseapp.com",
    projectId: "feumailer-iut33",
    storageBucket: "feumailer-iut33.appspot.com",
    messagingSenderId: "102739337361",
    appId: "1:102739337361:web:ef41a10fca699978c49f30",
    measurementId: "G-4V8WLG61GE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  return (
    <div className="App">
      <GlobalStyle />
      <MailTitleInput titleInput={titleInput} setTitleInput={setTitleInput}></MailTitleInput>
      <MailBodyInput bodyInput={bodyInput} setBodyInput={setBodyInput}></MailBodyInput>
      <ButtonList></ButtonList>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: linear-gradient(110deg, #EAD2AC, #4281A4);
    height: 100vh;
    font-family: sans-serif;
  }

  .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`

export default App;
