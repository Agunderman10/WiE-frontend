import axios from "axios";
import { url } from "./../constants/app";

export const checkLoginCredentials = (username, password) => {
    axios.post(url + 'signin', {
        email: username,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
};