import React, { useState, useEffect } from "react";
import axios from "axios";
import getSpecialisations from "../services/service.js";
import Modify from "./modify";

function TableView({setSpecialisations,specialisations}) {
  const urlBase = "https://f738-103-156-19-229.in.ngrok.io/api/v1";

  const config = {
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [shouldEdit, setEdit] = useState("");
  // const [add, setAdd] = useState(false);
  //const [specialisations, setSpecialisations] = useState([]);
  const [available_timings, setAvailible_timings] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [dob, setDob] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [photo_url, setPhoto_url] = useState("");
  const [qualification, setQualification] = useState("");
  const [rating, setRating] = useState("");
  const [sex, setSex] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [state, setState] = useState("");
  const [clinic_address, setClinic_address] = useState("");
  const [id, setId] = useState("");

  const handleEdit = (specialisation) => {
    setEdit(specialisation.id);
    setId(specialisation.id);
    setAvailible_timings(specialisation.available_timings);
    setCity(specialisation.city);
    setDescription(specialisation.description);
    setDob(specialisation.dob);
    setFname(specialisation.fname);
    setLname(specialisation.lname);
    setPhoto_url(specialisation.photo_url);
    setQualification(specialisation.qualification);
    setRating(specialisation.rating);
    setSex(specialisation.sex);
    setSpecialization(specialisation.specialization);
    setState(specialisation.state);
    setClinic_address(specialisation.clinic_address);
  };

  const handleDelete = (id) => {
    axios
      .post(`${urlBase}/doctor/deleteDoctor/${id}`,config)
      .then((json) => {
        getSpecialisations(setSpecialisations);
      });
  };

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
      photo_url,
      qualification,
      rating,
      sex,
      specialization,
      state,
    };
    if (
      !(
        fname &&
        lname &&
        sex &&
        photo_url &&
        qualification &&
        specialization &&
        clinic_address &&
        city &&
        state &&
        description &&
        rating &&
        available_timings &&
        dob
      )
    ) {
      alert("All Fields are Required");
    } else {

    axios
        .post(`${urlBase}/doctor/updateDoctor`, data, config)
        .then((json) => {
          setEdit(-1);
        })
        .then(() => {
          getSpecialisations(setSpecialisations);
        })
        .catch((error) => {
          alert("Error While Updating");
          console.log(error);
        });
      }
  };

  useEffect(() => {
    getSpecialisations(setSpecialisations);
  }, []);

  return (
    <div>
    <p style={{paddingTop:'80px'}}></p>
      {/* <button
        type="button"
        data-toggle="modal" data-target="#exampleModalLive"
        onClick={() => {
          setAdd((value) => !value);
        }}
        class="btn btn-sm btn-circle btn-light"
      >
        Add doctor➕
      </button>
      <div className="addDoctor">
        {add > 0 ? (
          <Add setSpecialisations={setSpecialisations} setAdd={setAdd} />
        ) : null}
      </div> */}
      <div className='m-4 p-2 rounded regular-shadow' id="domains" style={{display:"inline-block",width:"1825px"}}>
      <table className="table table-striped table-light"  style={{borderRadius:"15px",overflowY:"scroll"}}>
      <thead>
      <tr style={{color:"#17a2b8"}}>
      {/* <th scope="col" style={{paddingLeft:"10px"}}>Doctor Id</th> */}
        <th scope="col"style={{paddingLeft:"10px"}}>First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Specialisation</th>
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
      </tr>
    </thead>
        <tbody>
        { 
          specialisations &&
              specialisations.map((specialisation, index) => {
                return specialisation.id === shouldEdit ? (
                  <Modify specialisation={specialisation} setSpecialisations={setSpecialisations} setIsOpen={setIsOpen}></Modify>
                ) : (
                  <tr key={index}>
                    {/* <td>{specialisation.id}</td> */}
                    <td>{specialisation.fname}</td>
                    <td>{specialisation.lname}</td>
                    <td>{specialisation.specialization} </td>
                    <td>{specialisation.description}</td>
                    <td>{specialisation.rating}</td>
                    <td>{specialisation.available_timings}</td>
                    <td>{specialisation.city}</td>
                    <td>{specialisation.clinic_address}</td>
                    <td>{specialisation.dob}</td>
                    {/* <td>{specialisation.photo_url}</td> */}
                    <td>{specialisation.qualification}</td>
                    <td>{specialisation.sex}</td>
                    <td>{specialisation.state}</td>
                    {/* <td>{specialisation.online_status ? "🟢" : "🔴"}</td> */}
                    <td>
                      <button
                        class="btn btn-rounded btn-outline-info" data-toggle="modal" data-target="#exampleModalLive"
                        onClick={() => {handleEdit(specialisation);setIsOpen(true)}}
                      >
                        📝 Edit
                      </button>
                      
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDelete(specialisation.id)}
                        class="btn btn-rounded btn-outline-danger "
                      >
                        🗑️ Remove
                      </button>
                    </td>
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
