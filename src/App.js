import React, { Component } from "react";
import Schule from "./Components/Schule/Schule";
import Note from "./Components/note/Note";
import { Notes } from "./Components/Notes/notes.json";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Notes
    };
    this.addNotes = this.addNotes.bind(this);
  }
  addNotes(newNote) {
    this.setState = {
      Notes: [...this.state.Notes, newNote]
    };
  }
  render() {
    const totalNotes = this.state.Notes.map(actualNote => {
      return (
        <div className="card card-note m-2">
          <div className="card-header">{actualNote.title}</div>
          <div className="card-body">
            <button className="badge badge-danger " onClick={test}>
              X
            </button>
            <p>{actualNote.description}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 notes-container d-flex flex-wrap align-content-center">
              {totalNotes}
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
var test = () => {
  if (window.confirm("Are you sure to delete it?")) {
  }
};
