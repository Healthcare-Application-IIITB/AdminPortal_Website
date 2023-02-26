import React, { useState } from "react";
import axios from "axios";
import getSpecialisations from "../services/service.js";

function Add({ setSpecialisations, setAdd }) {
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

  const urlBase = "https://8eec-119-161-98-68.in.ngrok.io/api/v1";
  const config = {
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
  };

  const handleSubmit = (e) => {
    const data = {
      fname,
      lname,
      sex,
      photo_url,
      qualification,
      specilization,
      clinic_address,
      city,
      state,
      description,
      rating,
      available_timings,
      online_status: false,
      dob,
    };

    if (
      !(
        fname &&
        lname &&
        sex &&
        photo_url &&
        qualification &&
        specilization &&
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
      console.log("new doctor to be added:", data);
      axios
        .post(`${urlBase}/doctor/addDoctor`, config, data)
        .then((json) => {
          alert("Success");
          clear();
          getSpecialisations(setSpecialisations);
        })
        .catch((error) => {
          alert("Error While Adding");
          clear();
          console.log(error);
        });
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
    setRating("");
    setSex("");
    setSpecilization("");
    setState("");
    setClinic_address("");
  };

  return (
    <div>
      <tr>
        <td>
          <input
            type="text"
            required
            value={fname}
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            required
            value={lname}
            placeholder="Second Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            required
            value={sex}
            placeholder="Sex"
            onChange={(e) => setSex(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            required
            value={available_timings}
            placeholder="Available Timings"
            onChange={(e) => setAvailible_timings(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            required
            value={photo_url}
            placeholder="Photo URL"
            onChange={(e) => setPhoto_url(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            required
            value={qualification}
            placeholder="Qualifications"
            onChange={(e) => setQualification(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            required
            value={specilization}
            placeholder="Specilization"
            onChange={(e) => setSpecilization(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            required
            value={clinic_address}
            placeholder="Clinic Address"
            onChange={(e) => setClinic_address(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            required
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            required
            value={state}
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            required
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            required
            value={rating}
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            required
            value={dob}
            placeholder="DOB"
            onChange={(e) => setDob(e.target.value)}
          />
        </td>
        <td>
          <button
            type="submit"
            className="btn btn-sm btn-circle btn-success "
            onClick={(e) => handleSubmit(e)}
          >
            ✔️Submit
          </button>
          <span> </span>
          <button
            type="button"
            onClick={() => {
              setAdd((value) => !value);
            }}
            class="btn btn-sm btn-circle btn-light"
          >
            ❌Cancel
          </button>
        </td>
      </tr>
    </div>
  );
}

export default Add;
