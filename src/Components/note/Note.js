import React, { Component } from "react";

export default class Note extends Component {
  render() {
    return (
      <div className="card card-note m-2">
        <div className="card-body">
          <button className="badge badge-danger " onClick={test}>X</button>
        </div>
      </div>
    );
  }
}

var test = () => {
  if(window.confirm('Are you sure to delete it?')){

  }
}
