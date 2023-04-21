import React, { useState } from "react";
//import axios from "axios";
import { updateDoctor,uploadPhoto } from "../services/service.js";

const Modify = ({ doctor, setDoctors, setIsOpen }) => {
  const [available_timings, setAvailible_timings] = useState(
    doctor.available_timings
  );
  const [city, setCity] = useState(doctor.city);
  const [description, setDescription] = useState(doctor.description);
  const [dob, setDob] = useState(doctor.dob);
  const [fname, setFname] = useState(doctor.fname);
  const [lname, setLname] = useState(doctor.lname);
  const [qualification, setQualification] = useState(doctor.qualification);
  const [phoneNo, setPhoneNo] = useState(doctor.phoneNo);
  const [sex, setSex] = useState(doctor.sex);
  const [specialization, setSpecialization] = useState(doctor.specialization);
  const [state, setState] = useState(doctor.state);
  const [clinic_address, setClinic_address] = useState(doctor.clinic_address);
  const [id] = useState(doctor.id);
  const [userName] = useState(doctor.userName);
  const [email] = useState(doctor.email);
  const [password] = useState(doctor.password);
  const [roles] = useState(doctor.roles);

  let file = null;
  const handleUpload = (e) => {
    file = e.target.files[0];
  }
  console.log("Inside Modify");

  const handleUpdate = () => {
    const data = {
      available_timings,
      city,
      clinic_address,
      description,
      dob,
      fname,
      id,
      lname,
      online_status: false,
      qualification,
      phoneNo,
      sex,
      specialization,
      state,
      userName,
      password,
      email,
      roles
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
        dob
      )
    ) {
      alert("All Fields are Required");
    } else {
      updateDoctor(setDoctors, data);
      uploadPhoto(id,file);
    }
  };

  // useEffect(() => {
  //   getDoctors(setDoctors);
  // }, []);

  return (
    <div>
      <div className="bd-example">
        <div
          className="modal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          data-backdrop="static"
          id="exampleModalLive"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered "
            data-bs-backdrop="static"
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
                    paddingLeft: "300px",
                    fontWeight: "bold",
                  }}
                  id="exampleModalCenterTitle"
                >
                  UPDATE DOCTOR
                </h5>
              </div>
              <div
                className="modal-body"
                style={{ backgroundColor: "rgb(250, 250, 250)" }}
              >
                <tbody>
                  <tr style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title mod-form"
                        id="exampleModalCenterTitle"
                      >
                        First Name
                      </h5>
                      <input
                        className="mod-form-input"
                        type="text"
                        required
                        value={fname}
                        placeholder="First Name"
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </td>
                    <td style={{ paddingLeft: "100px" }}>
                      <h5
                        className="modal-title mod-form"
                        id="exampleModalCenterTitle"
                      >
                        Last Name
                      </h5>
                      <input
                        className="mod-form-input"
                        type="text"
                        required
                        value={lname}
                        placeholder="Second Name"
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title mod-form"
                        id="exampleModalCenterTitle"
                      >
                        Sex
                      </h5>
                      <select
                        name="sex"
                        id="sex"
                        className="mod-form-input"
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
                        className="modal-title mod-form"
                        id="exampleModalCenterTitle"
                      >
                        Available Timings
                      </h5>
                      <input
                        className="mod-form-input"
                        type="text"
                        required
                        value={available_timings}
                        placeholder="Available Timings"
                        onChange={(e) => setAvailible_timings(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                    <td style={{ paddingLeft: "30px" }}>
                      <h5
                        className="modal-title add-form"
                        id="exampleModalCenterTitle"
                      >
                        Upload Photo
                      </h5>
                      <input
                        className="add-form-input"
                        type="file"
                        placeholder="Photo URL"
                        onChange={handleUpload}
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
                  <tr style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                    <td style={{ paddingLeft: "30px" }}>
                      {/* <label htmlFor="Specialization">&nbsp;Specialization:&nbsp;&nbsp;</label> */}
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
                  <tr style={{ backgroundColor: "rgb(250, 250, 250)" }}>
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
                  <tr style={{ backgroundColor: "rgb(250, 250, 250)" }}>
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
                    <td style={{ paddingLeft: "30px" }}>
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
                  <tr style={{ backgroundColor: "rgb(250, 250, 250)" }}>
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
                          console.log(dob);
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
                    console.log("close");
                    setIsOpen(false);
                  }}
                >
                  CLOSE
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-dismiss="modal"
                  style={{ fontWeight: "bold", borderRadius: "7px" }}
                  onClick={(e) => {
                    handleUpdate(e);
                    setIsOpen(false);
                  }}
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
};

export default Modify;
