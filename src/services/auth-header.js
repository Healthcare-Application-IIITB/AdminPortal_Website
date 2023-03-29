export default function authHeader() {
    const admin = JSON.parse(localStorage.getItem('admin'));
  
    if (admin && admin.accessToken) {
      //console.log(admin.accessToken)
      return { Authorization: 'Bearer ' + admin.accessToken }; // for Spring Boot back-end
    } else {
      return {};
    }
  }  