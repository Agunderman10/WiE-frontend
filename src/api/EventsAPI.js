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

export const postEvent = async (name, link, date, time, timeIsAmOrPm, selectedCategory) => {
  return await axios
    .post(url + "events", {
      name: name,
      link: link,
      date: date,
      time: time,
      timeIsAmOrPm: timeIsAmOrPm,
      selectedCategory: selectedCategory
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
};
