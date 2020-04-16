import axios from "axios";
export default {
  constructor(a) {
    alert(a);
  },
  async myinject() {
    let a = axios
      .get("http://localhost:3000/")
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        return error;
      });
    return a;
  }
};
