import React, { Component } from "react";

export default class Schule extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    };
    this.changeState = this.changeState.bind(this);
    this.newNote = this.newNote.bind(this);
  }

  changeState(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }
  newNote(e) {
    e.preventDefault();
    this.props.addNewNote(this.state);
  }
  removeNote(index) {}

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.newNote}>
          <h5 className="card-title text-center">Notes</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              id="title-input"
              placeholder="Add title"
              name="title"
              onChange={this.changeState}
            />
            <textarea
              id="notes-text"
              className="form-control rounded-0"
              rows="10"
              placeholder="Add description"
              name="description"
              onChange={this.changeState}
            />
            <button
              className="btn btn-primary m-1 font-weight-bold"
              onClick={gettext}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

var gettext = () => {
  var text = document.getElementById("notes-text").value;
};
