import React, { useState, useEffect, useReducer } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "./App.css";
import ButtonList from "./components/ButtonList.js";
import MailTitleInput from "./components/MailTitleInput.js";
import MailBodyInput from "./components/MailBodyInput.js";
import SendButton from "./components/SendButton.js";
import Etiquette from "./components/Etiquette.js";
import firebase from "firebase";
import DBconfig from "./firebase.js";

const fb_app = firebase.initializeApp(DBconfig);
const studentsGroupsDB = fb_app.database().ref("/");

const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "toggle_recipient":
      var found = false;
      for (let n = 0; n<state.length; n++) {
        if (state[n].id === action.payload.id) {
          found = true;
          break;
        }
      }
      if (!found) {
        return [...state, action.payload];
      } else {
        return state.filter(personne => personne.id !== action.payload.id);
      }

  }
};

const StyledDestinataires = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;

`

function App() {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const [lists, setLists] = useState([]);
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    const dataArray = [];
    /** handleWidgets */
    studentsGroupsDB
      .once("value", (snap) => {
        Object.keys(snap.val()).map((classe) => {
          const objet = {};
          objet[classe] = snap.val()[classe];
          dataArray.push(objet);
        });
      })
      .then(function () {
        setLists(dataArray);
      });
  }, []);

  const [destinataires, dispatch] = useReducer(reducer, []);

  const toggleRecipient = (classe, email) => {
    let listCopy = JSON.parse(JSON.stringify(lists));
    let etatPostClick = listCopy.map((uneClasse) => {
      if (uneClasse[classe] !== undefined) {
        return uneClasse[classe].map((unEleve) => {
          if (unEleve.mail === email) {
            unEleve["selected"] = !unEleve.selected;
            const etatPostClick = unEleve.selected;
            return etatPostClick;
          }
        });
      }
    });
    etatPostClick =
      JSON.stringify(etatPostClick)
        .split("null")
        .join("")
        .match(/[a-z'\-]+/gi)
        .join("") === "true";

    setLists(listCopy);

    if (etatPostClick) {
      setRecipients([...recipients, email]);
    } else {
      setRecipients(recipients.filter((adresse) => adresse !== email));
    }
  };

  const feu = () => {
    let recipientsString = "";
    for (let n = 0; n<destinataires.length; n++) {
      recipientsString += destinataires[n].email + ",";
    }
    window.open(`https://webmel.u-bordeaux.fr/h/search?action=compose&to=${recipientsString.substring(0, recipientsString.length-1)}&subject=${titleInput}&body=${bodyInput}`);
  }


  return (
    <div className="App">
      <GlobalStyle />

      <StyledDestinataires>{destinataires.map((receiver) => (
      <Etiquette id={receiver.id} mail={receiver.email} dispatch={dispatch}/>
      ))}</StyledDestinataires>
      <MailTitleInput
        titleInput={titleInput}
        setTitleInput={setTitleInput}
      ></MailTitleInput>
      <MailBodyInput
        bodyInput={bodyInput}
        setBodyInput={setBodyInput}
      ></MailBodyInput>
      <SendButton feu={feu}/>
      <ButtonList
        dispatch={dispatch}
        lists={lists}
        toggleRecipient={toggleRecipient}
      ></ButtonList>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1vw;
  }
  body {
    margin: 0;
    background: background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
    font-family: sans-serif;
    font-size: 1em;
    
  }

  .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export default App;
