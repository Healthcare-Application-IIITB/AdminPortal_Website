import React, { useState } from "react";
import { addDoctor} from "../services/service.js";

function Add({ setDoctors, setAdd,doctors }) {
  const [available_timings, setAvailible_timings] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [dob, setDob] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [photo_url, setPhoto_url] = useState("");
  const [qualification, setQualification] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [sex, setSex] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [state, setState] = useState("");
  const [clinic_address, setClinic_address] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  
  
  const handleSubmit = (e) => {
    const data = {
      fname,
      lname,
      sex,
      photo_url,
      qualification,
      specialization,
      clinic_address,
      city,
      state,
      description,
      phoneNo,
      available_timings,
      online_status: false,
      dob,
      username,
      password,
      email
    };

    if (
      !(
        fname &&
        lname &&
        sex &&
        qualification &&
        specialization &&
        clinic_address &&
        city &&
        state &&
        description &&
        phoneNo &&
        available_timings &&
        dob &&
        username &&
        password &&
        email
      )
    ) {
      alert("All Fields are Required");
      setAdd((value) => true);
    } else {
      console.log("new doctor to be added:", data);
      document
        .getElementById("add-form-submit")
        .setAttribute("data-dismiss", "modal");
      addDoctor(setDoctors, data);
      console.log(doctors)
      clear();
    }
  };

  const clear = () => {
    setAvailible_timings("");
    setCity("");
    setDescription("");
    setDob("");
    setFname("");
    setLname("");
    setPhoto_url("");
    setQualification("");
    setPhoneNo("");
    setSex("");
    setSpecialization("");
    setState("");
    setClinic_address("");
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <div className="bd-example">
        <div
          className="modal"
          id="exampleModalLive"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div
              className="modal-content"
              style={{ backgroundColor: "rgb(250, 250, 250)" }}
            >
              <div className="modal-header">
                <h5
                  className="modal-title"
                  style={{
                    color: "#17a2b8",
                    paddingLeft: "310px",
                    fontWeight: "bold",
                  }}
                  id="exampleModalCenterTitle"
                >
                  ADD DOCTOR
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setAdd((value) => !value);
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <tbody>
                  <tr>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        First Name
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value={fname}
                        placeholder="First Name"
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Last Name
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value={lname}
                        placeholder="Second Name"
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Sex
                      </h5>
                      <select
                        name="sex"
                        id="sex"
                        className="add-form-input"
                        required
                        value={sex}
                        placeholder="Sex"
                        onChange={(e) => {
                          setSex(e.target.value);
                          console.log(e.target.value);
                        }}
                      >
                        <option selected disabled hidden value="">
                          Select option
                        </option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Others</option>
                      </select>
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Available Timings
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value={available_timings}
                        placeholder="Available Timings"
                        onChange={(e) => setAvailible_timings(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                  <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Email
                      </h5>
                      <input
                        className="add-form-input"
                        type="email"
                        required
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Qualification
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value={qualification}
                        placeholder="Qualifications"
                        onChange={(e) => setQualification(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Specialization
                      </h5>
                      <select
                        name="specialization"
                        id="specialization"
                        className="add-form-input"
                        required
                        value={specialization}
                        placeholder="Specialization"
                        onChange={(e) => {
                          setSpecialization(e.target.value);
                          console.log(specialization);
                        }}
                      >
                        <option selected disabled hidden value="">
                          Select option
                        </option>
                        <option value="General">General</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Dermatologists">Dermatologists</option>
                        <option value="Psychiatrists">Psychiatrists</option>
                        <option value="Urologists">Urologists</option>
                        <option value="ChildSpecialist">ChildSpecialist</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Ayurveda">Ayurveda</option>
                      </select>
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Address
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value={clinic_address}
                        placeholder="Clinic Address"
                        onChange={(e) => setClinic_address(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        City
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value={city}
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        State
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value={state}
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Description
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value={description}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Phone Number
                      </h5>
                      <input
                        className="add-form-input"
                        type="number"
                        required
                        value={phoneNo}
                        placeholder="Phone Number"
                        onChange={(e) => {
                          setPhoneNo(e.target.value);
                        }}
                      />
                    </td>
                    
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        DOB
                      </h5>
                      <input
                        className="add-form-input"
                        type="date"
                        required
                        value={dob}
                        placeholder="DOB"
                        onChange={(e) => {
                          setDob(e.target.value);
                        }}
                      />
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Online Status
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value="🔴 Offline"
                        placeholder="Offline"
                        disabled
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        User Name
                      </h5>
                      <input
                        className="add-form-input"
                        type="text"
                        required
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        password
                      </h5>
                      <input
                        className="add-form-input"
                        type="password"
                        required
                        value={password}
                        placeholder="State"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    
                  </tr>
                  <tr></tr>
                </tbody>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ fontWeight: "bold", borderRadius: "7px" }}
                  data-dismiss="modal"
                  onClick={() => {
                    setAdd((value) => !value);
                  }}
                >
                  CLOSE
                </button>
                <button
                  type="button"
                  id="add-form-submit"
                  className="btn btn-outline-primary"
                  style={{ fontWeight: "bold", borderRadius: "7px" }}
                  onClick={(e) => handleSubmit(e)}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
