
import React, {Component} from "react";
import './App.css';
import Header from './components/header';
import NotesInput from "./components/note_input";
import Previous from "./components/previous";

class App extends Component{

  
  render(){
  return (
    <div className="App">
      <Header/>
    <body>
      <div className="typeo">
        <div className="col">
          <NotesInput/>
          <Previous/>
        </div>
      </div>

      </body>  
    </div>
  );
  }
  
}

export default App;
