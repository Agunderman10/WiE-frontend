import axios from "axios";

export const getEvents = () => {
    axios.get('').then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    })
}