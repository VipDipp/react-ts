import * as rp from "request-promise";
import api from "../consts/consts"

async function apiRequest(city: string) {
    const ip = await rp.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.api}`)
        .then(res => {return(res)})
        .catch(err => {console.log(err)});
        console.log(JSON.parse(ip));
    return JSON.parse(ip).main.temp;
}

export default apiRequest;