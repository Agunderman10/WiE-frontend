import axios from "axios";
import { url } from "./../constants/app";

export const getEvents = async () => {
  await axios
    .get(url + "events")
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
