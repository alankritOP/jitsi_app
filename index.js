//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';
//import reportWebVitals from './reportWebVitals';*/



///*function formatUser(user){
 //  return user.firstName+" "+user.lastName;
//}

//const user={
  //firstName:"alankrit",
  //lastName:"Sinha"
//};

//const element=
//(
  //<h1>
  //  Hello from {formatUser(user)}
//</h1>
//);
//*/
///*ReactDOM.render(
  //<App/>,
  //document.getElementById('root')
//);*/

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
