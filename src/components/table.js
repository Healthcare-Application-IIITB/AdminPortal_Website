import React, { useState, useEffect } from "react";
//import axios from "axios";
import { getDoctors } from "../services/service.js";
import { deleteDoctor } from "../services/service.js";
import Modify from "./modify";

function TableView({ setDoctors, doctors }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editDoc, setEditDoc] = useState("");

  const handleDelete = (id) => {
    deleteDoctor(id, setDoctors);
  };

  useEffect(() => {
    getDoctors(setDoctors);
  }, []);

  return (
    <div>
      {isOpen && (
        <Modify
          doctor={editDoc}
          setDoctors={setDoctors}
          setIsOpen={setIsOpen}
        ></Modify>
      )}
      <p style={{ paddingTop: "80px" }}></p>
      <div
        className="m-4 p-2 rounded regular-shadow"
        id="domains"
        style={{ display: "inline-block", width: "1825px" }}
      >
        <table
          className="table table-striped table-light"
          style={{ borderRadius: "15px", overflowY: "scroll" }}
        >
          <thead>
            <tr style={{ color: "#17a2b8" }}>
              {/* <th scope="col" style={{paddingLeft:"10px"}}>Doctor Id</th> */}
              <th scope="col" style={{ paddingLeft: "10px" }}>
                First Name
              </th>
              <th scope="col">Last Name</th>
              <th scope="col">Specialization</th>
              <th scope="col">Description</th>
              <th scope="col">Rating</th>
              <th scope="col">Available Timings</th>
              <th scope="col">City</th>
              <th scope="col">Clinic Address</th>
              <th scope="col">Data of Birth</th>
              {/* <th scope="col">Photo</th> */}
              <th scope="col">Qualification</th>
              <th scope="col">Sex</th>
              <th scope="col">State</th>
              {/* <th scope="col">Online Status</th> */}
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors &&
              doctors.map((doctor, index) => {
                return (
                  <tr key={doctor.id}>
                    <td>{doctor.fname}</td>
                    <td>{doctor.lname}</td>
                    <td>{doctor.specialization} </td>
                    <td>{doctor.description}</td>
                    <td>{doctor.rating}</td>
                    <td>{doctor.available_timings}</td>
                    <td>{doctor.city}</td>
                    <td>{doctor.clinic_address}</td>
                    <td>{doctor.dob}</td>
                    {/* <td>{doctor.photo_url}</td> */}
                    <td>{doctor.qualification}</td>
                    <td>{doctor.sex}</td>
                    <td>{doctor.state}</td>
                    {/* <td>{doctor.online_status ? "🟢" : "🔴"}</td> */}
                    <td>
                      <button
                        class="btn btn-rounded btn-outline-info"
                        data-toggle="modal"
                        data-target="#exampleModalLive"
                        onClick={() => {
                          //handleEdit(doctor);
                          setEditDoc(doctor);
                          console.log("EDIT111");
                          console.log(editDoc);
                          setIsOpen(true);
                        }}
                      >
                        📝 Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDelete(doctor.id)}
                        class="btn btn-rounded btn-outline-danger "
                      >
                        🗑️ Remove
                      </button>
                    </td>
                    <td></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TableView;
