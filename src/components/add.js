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
  const [specialization, setSpecialization] = useState("");
  const [state, setState] = useState("");
  const [clinic_address, setClinic_address] = useState("");

  const urlBase = "https://f738-103-156-19-229.in.ngrok.io/api/v1";

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
      specialization,
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
      console.log("new doctor to be added:", data);
      axios
        .post(`${urlBase}/doctor/addDoctor`,data, config)
        .then((json) => {
          //alert("Success");
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
    setSpecialization("");
    setState("");
    setClinic_address("");
  };

  return (
    <div>
    <div className="bd-example">
     <div className="modal" id="exampleModalLive"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
     <div className="modal-dialog modal-lg modal-dialog-centered"role="document">
       <div className="modal-content" style={{backgroundColor:"rgb(250, 250, 250)"}}>
       <div className="modal-header">
           <h5 className="modal-title" style={{color:"#17a2b8", paddingLeft:'310px', fontWeight:'bold'}} id="exampleModalCenterTitle">ADD DOCTOR</h5>
           <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {
               setAdd((value) => !value);
             }}>
           <span aria-hidden="true">&times;</span>
           </button>
       </div>
       <div className="modal-body">
       <tbody>
       <tr>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">First Name</h5>
           <input className="add-form-input"
             type="text"
             required
             value={fname}
             placeholder="First Name"
             onChange={(e) => setFname(e.target.value)}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Last Name</h5>
           <input className="add-form-input" 
             type="text"
             required
             value={lname}
             placeholder="Second Name"
             onChange={(e) => setLname(e.target.value)}
           />
           </td>
         </tr>
         <tr>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Sex</h5>
         {/* <label htmlFor="sex">&nbsp;Sex:&nbsp;&nbsp;</label> */}
         <select name="sex" id="sex" className="add-form-input"
         required
         value={sex}
         placeholder="Sex"
         onChange={(e) => {setSex(e.target.value); console.log(e.target.value)}}>
             <option selected disabled hidden value=''>Select option</option>
             <option value="M">Male</option>
             <option value="F">Female</option>
             <option value="O">Others</option>
           </select>
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Available Timings</h5>
           <input className="add-form-input"
             type="text"
             required
             value={available_timings}
             placeholder="Available Timings"
             onChange={(e) => setAvailible_timings(e.target.value)}
           />
         </td>
         </tr>
       <tr>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Upload Photo</h5>
           <input className="add-form-input"
             type="file"
             required
             value={""}
             placeholder="Photo URL"
             onChange={(e) => setPhoto_url(e.target.value)}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Qualification</h5>
           <input className="add-form-input"
             type="text"
             required
             value={qualification}
             placeholder="Qualifications"
             onChange={(e) => setQualification(e.target.value)}
           />
         </td>
         </tr>
         <tr>
         <td style={{paddingLeft:'30px'}}>
           {/* <label htmlFor="Specialization">&nbsp;Specialization:&nbsp;&nbsp;</label> */}
           <h5 className="modal-title add-form" id="exampleModalCenterTitle">Specialization</h5>
           <select name="specialization" id="specialization" className="add-form-input"
             required
             value={specialization}
             placeholder="Specialization"
             onChange={(e) => {setSpecialization(e.target.value); console.log(specialization)}}>
             <option selected disabled hidden value=''>Select option</option>
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
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Address</h5>
           <input className="add-form-input"
             type="text"
             required
             value={clinic_address}
             placeholder="Clinic Address"
             onChange={(e) => setClinic_address(e.target.value)}
           />
         </td>
       </tr>
       <tr>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">City</h5>
           <input className="add-form-input"
             type="text"
             required
             value={city}
             placeholder="City"
            onChange={(e) => setCity(e.target.value)}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">State</h5>
           <input className="add-form-input"
             type="text"
             required
             value={state}
             placeholder="State"
             onChange={(e) => setState(e.target.value)}
           />
         </td>
         </tr>
         <tr>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Description</h5>
           <input className="add-form-input"
             type="text"
             required
             value={description}
             placeholder="Description"
             onChange={(e) => setDescription(e.target.value)}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
           <h5 className="modal-title add-form" id="exampleModalCenterTitle">Rating</h5>
         <select name="Rating" id="Rating" className="add-form-input"
             required
             value={rating}
             placeholder="Rating"
             onChange={(e) => {console.log(rating);setRating(e.target.value)}}>
             <option selected disabled hidden value=''>Select option</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
           </select>
         </td>
       </tr>
       <tr>
         <td style={{paddingLeft:'30px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">DOB</h5>
           <input className="add-form-input"
             type="date"
             required
             value={dob}
             placeholder="DOB"
             onChange={(e) => {console.log(dob); setDob(e.target.value)}}
           />
         </td>
         <td style={{paddingLeft:'100px'}}>
         <h5 className="modal-title add-form" id="exampleModalCenterTitle">Online Status</h5>
           <input className="add-form-input"
             type="text"
             required
             value='🔴 Offline'
             placeholder="Offline"
             disabled
           />
         </td>
         </tr>
         <tr>
         {/* <td>
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
         </td> */}
       </tr>
       </tbody>
       </div>
       <div className="modal-footer">
           <button type="button" className="btn btn-outline-secondary"  style={{fontWeight:'bold', borderRadius:'7px'}} data-dismiss="modal" onClick={() => {
               setAdd((value) => !value);
             }}>CLOSE</button>
           <button type="button" className="btn btn-outline-primary" data-dismiss="modal" style={{fontWeight:'bold', borderRadius:'7px'}} onClick={(e) => handleSubmit(e)} >SUBMIT</button>
       </div>
       </div>
   </div>
   </div>
  </div>
</div>


    // <div id="Add_Doc">
    //   <tbody>
    //   <tr>
    //     <td>
    //       <input
    //         type="text"
    //         required
    //         value={fname}
    //         placeholder="First Name"
    //         onChange={(e) => setFname(e.target.value)}
    //       />
    //     </td>
    //     <td>
    //       <input
    //         type="text"
    //         required
    //         value={lname}
    //         placeholder="Second Name"
    //         onChange={(e) => setLname(e.target.value)}
    //       />
    //     </td>
    //     <td>
    //     <label htmlFor="sex">&nbsp;Sex:&nbsp;&nbsp;</label>
    //     <select name="sex" id="sex"
    //     required
    //     value={sex}
    //     placeholder="Sex"
    //     onChange={(e) => {setSex(e.target.value); console.log(e.target.value)}}>
    //         <option selected disabled hidden value=''>Select option</option>
    //         <option value="M">Male</option>
    //         <option value="F">Female</option>
    //         <option value="O">Others</option>
    //       </select>
    //     </td>
    //     <td>
    //       <input
    //         type="text"
    //         required
    //         value={available_timings}
    //         placeholder="Available Timings"
    //         onChange={(e) => setAvailible_timings(e.target.value)}
    //       />
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>
    //       <input
    //         type="text"
    //         required
    //         value={photo_url}
    //         placeholder="Photo URL"
    //         onChange={(e) => setPhoto_url(e.target.value)}
    //       />
    //     </td>
    //     <td>
    //       <input
    //         type="text"
    //         required
    //         value={qualification}
    //         placeholder="Qualifications"
    //         onChange={(e) => setQualification(e.target.value)}
    //       />
    //     </td>
    //     <td>
    //       <label htmlFor="Specialization">&nbsp;Specialization:&nbsp;&nbsp;</label>
    //       <select name="specialization" id="specialization"
    //         required
    //         value={specialization}
    //         placeholder="Specialization"
    //         onChange={(e) => {setSpecialization(e.target.value); console.log(specialization)}}>
    //         <option selected disabled hidden value=''>Select option</option>
    //         <option value="General">General</option>
    //         <option value="Pediatrician">Pediatrician</option>
    //         <option value="Dermatologists">Dermatologists</option>
    //         <option value="Psychiatrists">Psychiatrists</option>
    //         <option value="Urologists">Urologists</option>
    //         <option value="ChildSpecialist">ChildSpecialist</option>
    //         <option value="Cardiologist">Cardiologist</option>
    //         <option value="Neurologist">Neurologist</option>
    //         <option value="Ayurveda">Ayurveda</option>
    //       </select>
    //     </td>
    //     <td>
    //       <input
    //         type="text"
    //         required
    //         value={clinic_address}
    //         placeholder="Clinic Address"
    //         onChange={(e) => setClinic_address(e.target.value)}
    //       />
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>
    //       <input
    //         type="text"
    //         required
    //         value={city}
    //         placeholder="City"
    //         onChange={(e) => setCity(e.target.value)}
    //       />
    //     </td>
    //     <td>
    //       <input
    //         type="text"
    //         required
    //         value={state}
    //         placeholder="State"
    //         onChange={(e) => setState(e.target.value)}
    //       />
    //     </td>
    //     <td>
    //       <input
    //         type="text"
    //         required
    //         value={description}
    //         placeholder="Description"
    //         onChange={(e) => setDescription(e.target.value)}
    //       />
    //     </td>
    //     <td>
    //       <label for="Rating">&nbsp;Rating:&nbsp;&nbsp;</label>
    //     <select name="Rating" id="Rating"
    //         required
    //         value={rating}
    //         placeholder="Rating"
    //         onChange={(e) => {console.log(rating);setRating(e.target.value)}}>
    //         <option selected disabled hidden value=''>Select option</option>
    //         <option value="1">1</option>
    //         <option value="2">2</option>
    //         <option value="3">3</option>
    //         <option value="4">4</option>
    //         <option value="5">5</option>
    //       </select>
    //     </td>
    //   </tr>
    //   <tr>
    //     <td>
    //       <input
    //         type="date"
    //         required
    //         value={dob}
    //         placeholder="DOB"
    //         onChange={(e) => {console.log(dob); setDob(e.target.value)}}
    //       />
    //     </td>
    //     <td>
    //       <button
    //         type="submit"
    //         className="btn btn-sm btn-circle btn-success "
    //         onClick={(e) => handleSubmit(e)}
    //       >
    //         ✔️Submit
    //       </button>
    //       <span> </span>
    //       <button
    //         type="button"
    //         onClick={() => {
    //           setAdd((value) => !value);
    //         }}
    //         class="btn btn-sm btn-circle btn-light"
    //       >
    //         ❌Cancel
    //       </button>
    //     </td>
    //   </tr>
    //   </tbody>
    // </div>
  );
}

export default Add;
