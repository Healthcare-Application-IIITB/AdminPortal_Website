import React, { useState } from "react";
import Add from "./add";

function Nav({ setUserId, setDoctors }) {
  const [add, setAdd] = useState(false);

  const logout=(e) => {
    console.log(e);
    localStorage.removeItem("admin");
    localStorage.setItem("Id", -1);
    setUserId(-1);
}

  return (
    <div class="logout" style={{ paddingRight: "50px", paddingTop: "50px" }}>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{
          width: "1825px",
          marginLeft: "50px",
          borderRadius: "15px",
          height: "60px",
          backgroundColor: "#17a2b8",
        }}
      >
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
                <a
                  id="navL"
                  style={{
                    paddingLeft: "30px",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a
                  id="navL"
                  data-toggle="modal"
                  data-target="#exampleModalLive"
                  style={{
                    paddingLeft: "100px",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                  onClick={() => {
                    setAdd((value) => !value);
                  }}
                >
                  ADD DOCTOR
                </a>
                <div className="addDoctor">
                  {console.log(add)}
                  {add > 0 ? (
                    <Add setDoctors={setDoctors} setAdd={setAdd} />
                  ) : null}
                </div>
              </li>
            </ul>
            <h1
              style={{
                color: "rgb(245, 245, 245)",
                alignContent: "center",
                paddingLeft: "50px",
                paddingRight: "650px",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Administrator Portal
            </h1>
          </div>

          <div class="d-flex align-items-center">
            <li class="nav-item">
              <a
                id="navR"
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  paddingRight: "20px",
                }}
                onClick={(e) => logout(e)}
              >
                {" "}
                LOGOUT
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
