import React from "react";
import "./App.css";
import { Fragment, useState } from "react";

import Nav from "./components/nav";

import Login from "./components/login";

import TableView from "./components/table";

function App() {
  const [userID, setUserId] = useState(localStorage.getItem("Id"));
  const [doctors, setDoctors] = useState([]);

  return userID <= 0 ? (
    <Login setUserId={setUserId} />
  ) : (
    <Fragment>
      <Nav setUserId={setUserId} setDoctors={setDoctors} doctors={doctors}/>
      <TableView setDoctors={setDoctors} doctors={doctors} />
    </Fragment>
  );
}

export default App;
