import React, { Component } from "react";
import Schule from "./Components/Schule/Schule";
import Note from "./Components/note/Note";
import { Notes } from "./Components/Notes/notes.json";

export default class App extends Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 notes-container d-flex flex-wrap align-content-center">
              <Note title="bueno" />
            </div>
            <div className="col-3 d-flex align-items-center card-notes">
              <Schule />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
