// var axios = require('axios');
import Axios from 'axios';
var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0a9475f0430906b7e536d9c087236692&units=metric';

export const getTemp = function (location) {
    let incodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${incodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
        debugger;
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return res.data.main.temp
        }
    }, function (res) {
        throw new Error(res.data.message);
    });
};