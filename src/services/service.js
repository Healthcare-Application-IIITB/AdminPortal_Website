import axios from "axios";
const urlBase = "https://c5c5-103-156-19-229.ngrok-free.app/api";

const admin = JSON.parse(localStorage.getItem('admin'));
var config = null;
if (admin && admin.accessToken) {
config = {
  headers: {
    "ngrok-skip-browser-warning": "true",
    Authorization: "Bearer " + admin.accessToken,
  }         
};
}

const getDoctors = (setDoctors) => {
  console.log("doc req");
  axios
    .get(`${urlBase}/v1/doctor/getAllDoctors`, config)
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
    .post(`${urlBase}/auth/doctor/signup`, data, config)
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
    .post(`${urlBase}/v1/doctor/updateDoctor`, data, config)
    .then(() => {
      getDoctors(setDoctors);
    })
    .catch((error) => {
      alert("Error While Updating");
      console.log(error);
    });
};

const startLogin = (credentials,setUserId) => {
  axios
    .post(`${urlBase}/auth/admin/signin`, credentials, config)
    .then(response => {
      if (response.data.accessToken) {
        console.log(response.data.accessToken)
        localStorage.setItem("admin", JSON.stringify(response.data));
        setUserId(1);
      }
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Invalid Credintials");
    });
};

const deleteDoctor = (id, setDoctors) => {
  axios.get(`${urlBase}/v1/doctor/deleteDoctor/${id}`, config)
  .then((json) => {
    console.log(json.data);
    getDoctors(setDoctors);
  })
  .catch((err) => {
    console.log(admin.accessToken)
    console.log(err);
    alert("Invalid Operation");
  });
};

const uploadPhoto = (id, file) => {
  console.log(id)
  let formData = new FormData();
  formData.append("image",file);
  axios.post(`${urlBase}/v1/admin/uploadImage/${id}`,formData, config)
}



export { getDoctors, addDoctor, startLogin, deleteDoctor, updateDoctor, uploadPhoto};
