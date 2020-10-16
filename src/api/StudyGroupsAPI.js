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

export const postStudyGroup = async (name, link, date, time, timeIsAmOrPm, selectedCategory) => {
  return await axios
    .post(url + "study-group-sessions", {
      name: name,
      link: link,
      date: date,
      time: time,
      timeIsAmOrPm: timeIsAmOrPm,
      selectedCategory: selectedCategory
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
