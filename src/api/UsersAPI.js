import axios from "axios";
import { url } from "./../constants/app";

export const checkLoginCredentials = (username, password) => {
    return axios.post(url + 'signin', {
        email: username,
        password: password,
      })
      .then(function (response) {
          return response.data.success;
      })
      .catch(function (error) {
          return error;
      });
};