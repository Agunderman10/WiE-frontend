import axios from "axios";
import { url } from "./../constants/app";

export const getDiscussions = async () => {
  return await axios
    .get(url + "discussions")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
