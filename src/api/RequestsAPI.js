import axios from "axios";
import { url } from "./../constants/app";

export const getRequests = () => {

}

export const postRequest = async (name, link, date, time, timeIsAmOrPm, selectedCategory) => {
    return await axios
    .post(url + "study-group-requests", {
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