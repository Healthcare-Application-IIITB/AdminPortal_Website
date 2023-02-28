import React from "react";
import "./App.css";
import { Fragment, useState } from "react";

import Nav from "./components/nav";

import Login from "./components/login";

import TableView from "./components/table";

function App() {
  const [userID, setUserId] = useState(localStorage.getItem("Id"));
  const [specialisations, setSpecialisations] = useState([]);

  return userID <= 0 ? (
    <Login user={setUserId} />
  ) : (
    <Fragment>
      {/* <div class="logout">
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("Id", -1);
            setUserId(-1);
          }}
          class="btn btn-sm btn-circle btn-danger "
        >
          Logout
        </button>
      </div> */}
      <Nav setUserId={setUserId} setSpecialisations={setSpecialisations} />

      <TableView setSpecialisations={setSpecialisations} specialisations={specialisations}/>
    </Fragment>
  );
}

export default App;
