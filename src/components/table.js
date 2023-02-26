import React, { useState, useEffect } from "react";
import axios from "axios";
import getSpecialisations from "../services/service.js";
import Add from "./add";

function TableView() {
  const urlBase = "https://8eec-119-161-98-68.in.ngrok.io/api/v1";

  const config = {
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
  };

  const [shouldEdit, setEdit] = useState("");
  const [add, setAdd] = useState(false);
  const [specialisations, setSpecialisations] = useState([]);

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
  const [specilization, setSpecilization] = useState("");
  const [state, setState] = useState("");
  const [clinic_address, setClinic_address] = useState("");
  const [id, setId] = useState("");

  const handleEdit = (specialisation) => {
    setEdit(specialisation.id);
    setId(specialisation.id);
    setAvailible_timings(specialisation.available_timimgs);
    setCity(specialisation.city);
    setDescription(specialisation.description);
    setDob(specialisation.dob);
    setFname(specialisation.fname);
    setLname(specialisation.lname);
    setPhoto_url(specialisation.photo_url);
    setQualification(specialisation.qualification);
    setRating(specialisation.rating);
    setSex(specialisation.sex);
    setSpecilization(specialisation.specialization);
    setState(specialisation.state);
    setClinic_address(specialisation.clinic_address);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${urlBase}/doctor/deleteDoctor/${id}`, config)
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
      specilization,
      state,
    };
    if (
      !(
        available_timings &&
        city &&
        clinic_address &&
        description &&
        dob &&
        fname &&
        id &&
        lname &&
        photo_url &&
        qualification &&
        rating &&
        sex &&
        specilization &&
        state
      )
    ) {
      alert("All Fields are Required");
    } else {
      axios
        .post(`${urlBase}/doctor/updateDoctor`, config, data)
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
      <h1>Doctors List</h1>
      <button
        type="button"
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
      </div>
      <div class="Table-form-container table-responsive fixed-table-body">
        <table class="table table-hover">
          <thead>
            <tr class="table-primary">
              <th scope="col ">Doctor ID</th>

              <th scope="col">First Name</th>

              <th scope="col">Second Name</th>

              <th scope="col">Specialisation</th>

              <th scope="col">Description</th>

              <th scope="col">Rating</th>

              <th scope="col">Availible Timings</th>

              <th scope="col">City</th>

              <th scope="col">Clinic Address</th>

              <th scope="col">Data of Birth</th>

              <th scope="col">Photo</th>

              <th scope="col">Qualification</th>

              <th scope="col">Sex</th>

              <th scope="col">State</th>

              <th scope="col">Online Status</th>
            </tr>
          </thead>
          <tbody>
            {specialisations &&
              specialisations.map((specialisation, index) => {
                return specialisation.id === shouldEdit ? (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={specialisation.id}
                        placeholder="Doctor ID"
                        readonly
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={fname}
                        placeholder="First Name"
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={lname}
                        placeholder="Second Name"
                        onChange={(e) => setLname(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={specilization}
                        placeholder="Specialisation"
                        onChange={(e) => setSpecilization(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={description}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={rating}
                        placeholder="Rating"
                        onChange={(e) => setRating(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={available_timings}
                        placeholder="Availible Timings"
                        onChange={(e) => setAvailible_timings(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={city}
                        placeholder="First Name"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={clinic_address}
                        placeholder="Clinic Address"
                        onChange={(e) => setClinic_address(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={dob}
                        placeholder="Date of Birth"
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={photo_url}
                        placeholder="URL"
                        onChange={(e) => setPhoto_url(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={qualification}
                        placeholder="Qualification"
                        onChange={(e) => setQualification(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={sex}
                        placeholder="Sex"
                        onChange={(e) => setSex(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={state}
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        value={specialisation.online_status ? "🟢" : "🔴"}
                        placeholder="Online Status"
                        readOnly
                      />
                    </td>
                    <td>
                      <button
                        class="btn btn-sm btn-circle btn-success "
                        onClick={() => handleUpdate()}
                      >
                        ✔️Submit
                      </button>
                      <span> </span>

                      <button
                        class="btn btn-sm btn-circle btn-light"
                        onClick={() => {
                          setEdit("");
                        }}
                      >
                        ❌Cancel
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr key={index}>
                    <td>{specialisation.id}</td>
                    <td>{specialisation.fname}</td>
                    <td>{specialisation.lname}</td>
                    <td>{specialisation.specialization} </td>
                    <td>{specialisation.description}</td>
                    <td>{specialisation.rating}</td>
                    <td>{specialisation.available_timimgs}</td>
                    <td>{specialisation.city}</td>
                    <td>{specialisation.clinic_address}</td>
                    <td>{specialisation.dob}</td>
                    <td>{specialisation.photo_url}</td>
                    <td>{specialisation.qualification}</td>
                    <td>{specialisation.sex}</td>
                    <td>{specialisation.state}</td>
                    <td>{specialisation.online_status ? "🟢" : "🔴"}</td>
                    <td>
                      <button
                        class="btn btn-sm btn-circle btn-warning"
                        onClick={() => handleEdit(specialisation)}
                      >
                        📝 Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDelete(specialisation.id)}
                        class="btn btn-sm btn-circle btn-danger "
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
