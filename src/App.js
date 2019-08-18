import React, { Component } from "react";
import Schule from "./Components/Schule/Schule";
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
    this.setState({
      Notes: [...this.state.Notes, newNote]
    });
  }
  removeNote(index) {
    if (window.confirm("Are you sure to delete it?")) {
      this.setState({
        Notes: this.state.Notes.filter((e,i)=>{
          return i !== index
        })
      })
    }
  }

  render() {
    const totalNotes = this.state.Notes.map((actualNote, i) => {
      return (
        <div className="card card-note m-2" key={i}>
          <div className="card-header">{actualNote.title}</div>
          <div className="card-body">
            <button className="badge badge-danger " onClick={this.removeNote.bind(this,i)}>
              X
            </button>
            <p>{actualNote.description}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <nav className="navbar bg-dark">
          <h4 className="text-white">Notes</h4>
          <span className="badge badge-light ml-2 p-2">
            {this.state.Notes.length}
          </span>
        </nav>

        <div className="App">
          <div className="container-fluid">
            <div className="row">
              <div className="col-9 notes-container d-flex flex-wrap align-content-center">
                {totalNotes}
              </div>
              <div className="col-3 d-flex align-items-center card-notes">
                <Schule addNewNote={this.addNotes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
var test = () => {
  
};
