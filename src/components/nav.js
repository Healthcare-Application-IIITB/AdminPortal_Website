import React, { useState, useEffect } from "react";
import Add from "./add";

function Nav({setUserId}) {

    const [add, setAdd] = useState(false);
    const [specialisations, setSpecialisations] = useState([]);

return(
<div class="logout">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark" style={{width:"1515px",marginLeft:"50px",borderRadius:"15px",height:"60px"}}>
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a id="navL" style={{paddingLeft:"30px",fontWeight:"bold",fontSize:"18px"}}>Home</a>
        </li>
        <li class="nav-item">
          <a id="navL" data-toggle="modal" data-target="#exampleModalLive" style={{paddingLeft:"100px",fontWeight:"bold",fontSize:"18px"}}
          onClick={() => {
            setAdd((value) => !value);}}
        >Add doctor</a>
        <div className="addDoctor">
            {console.log(add)}
        {add > 0 ? (
          <Add setSpecialisations={setSpecialisations} setAdd={setAdd} />
        ) : null}
      </div>
        </li>
       
      </ul>
    </div>

    <div class="d-flex align-items-center">
    <li class="nav-item">
          <a id="navR" style={{fontWeight:"bold",fontSize:"18px"}} onClick={() => {
            localStorage.setItem("Id", -1);
            setUserId(-1);
          }}> Logout</a>
        </li>
    </div>
  </div>
</nav>
      </div>
)
}

export default Nav;