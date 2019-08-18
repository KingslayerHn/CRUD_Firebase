import React from "react";
import Schule from "./Components/Schule/Schule";
import Note from "./Components/note/Note";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 notes-container d-flex flex-wrap align-content-center">
            <Note />
            <Note />
          </div>
          <div className="col-3 d-flex align-items-center card-notes">
            <Schule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
