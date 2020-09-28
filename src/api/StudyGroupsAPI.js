import axios from "axios";
import { url } from "./../constants/app";

export const getStudyGroups = async () => {
  return await axios
    .get(url + "study-group-sessions")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
