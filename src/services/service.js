import axios from "axios";
const urlBase = "http://localhost:8080/api/v1";

const config = {
  headers:{
    "ngrok-skip-browser-warning": "true"
  }
};

const getSpecialisations = (setSpecialisations) => {
  console.log("doc req");
  axios
    .get(`${urlBase}/doctor/getAllDoctors`,config)
    .then((json) => {
      setSpecialisations(json.data);
      console.log("doctor data is:", json.data);
      console.log(json.data);
      return json.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getSpecialisations;
