import axios from "axios";

export const getEvents = async () => {
    await axios.get('https://secure-coast-20417.herokuapp.com/events').then((res) => {
        console.log(res.data.osu_events);
    }).catch((e) => {
        console.log(e);
    })
}