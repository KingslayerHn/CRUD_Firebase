import React, { Component } from "react";

export default class Schule extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Notes</h5>
          <div className="form-group">
            <textarea
              id="notes-text"
              className="form-control rounded-0"
              rows="10"
            />
          </div>
          <button className="btn btn-primary m-1 font-weight-bold">Add</button>
          <button className="btn btn-success font-weight-bold" onClick={erase}>
            Clean
          </button>
        </div>
      </div>
    );
  }
}

var erase = () => {
  document.getElementById("notes-text").value = " ";
};

