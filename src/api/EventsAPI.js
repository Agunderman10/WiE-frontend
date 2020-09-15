import axios from "axios";
import { url } from "./../constants/app";

export const getEvents = async () => {
  return await axios
    .get(url + "events")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
