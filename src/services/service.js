import axios from "axios";
const urlBase = "http://localhost:8080/api/v1";

const config = {
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
};

const getDoctors = (setDoctors) => {
  console.log("doc req");
  axios
    .get(`${urlBase}/doctor/getAllDoctors`, config)
    .then((json) => {
      setDoctors(json.data);
      console.log("doctor data is:", json.data);
      return json.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const addDoctor = (setDoctors, data) => {
  axios
    .post(`${urlBase}/doctor/addDoctor`, data, config)
    .then((json) => {
      getDoctors(setDoctors);
    })
    .catch((error) => {
      alert("Error While Adding");
      console.log(error);
    });
};

const updateDoctor = (setDoctors, data) => {
  axios
    .post(`${urlBase}/doctor/updateDoctor`, data, config)
    .then(() => {
      getDoctors(setDoctors);
    })
    .catch((error) => {
      alert("Error While Updating");
      console.log(error);
    });
};

const startLogin = (credentials, setUserId) => {
  axios
    .post(`${urlBase}/admin/login`, credentials, config)
    .then(() => {
      console.log("Sucess");
      localStorage.setItem("Id", 1);
      setUserId(1);
    })
    .catch((err) => {
      console.log(err);
      alert("Inavlid Credintials");
    });
};

const deleteDoctor = (id, setDoctors) => {
  axios.post(`${urlBase}/doctor/deleteDoctor/${id}`, config).then((json) => {
    getDoctors(setDoctors);
  });
};

export { getDoctors, addDoctor, startLogin, deleteDoctor, updateDoctor };
