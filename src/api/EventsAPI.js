import axios from "axios";
import { url } from "./../constants/app";

export const getEvents = () => {
  return axios
    .get(url + "events")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
