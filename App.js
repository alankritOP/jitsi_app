//import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
//import  Hello from './components/Hello';
//import Message from './components/Message';
//import Counter from './components/counter';
//import FunctionClick from './components/functionClick';
//import EventReact from './components/eventReact';
//import JitsiMeetComponent from './components/jitsiop';
//import VideoConference from "./VideoConference";



//class App extends Component{
  //render(){
    //return(
      //<div className="App">
        //<VideoConference/>
        //<EventReact/>
        //<FunctionClick/>
        //<Counter/>
    //<Message/>
//<Hello name="alankrit" nickname="Game">
  //<p>This is the children component</p>
  //</Hello>
//<Hello name="anurag" nickname="pandu">
//<button>Activate</button></Hello>
//<Hello name="alok" nickname="alokwa"/>
  //    </div>
    //);
  //}
//} 
//export default App;*/
import React from "react";
import VideoConference from "./VideoConference";

export default function App() {
  return <VideoConference />;
}
