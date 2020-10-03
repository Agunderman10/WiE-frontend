import axios from "axios";
import { url } from "./../constants/app";

export const checkLoginCredentials = () => {
    axios.post(url + 'signin', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
};