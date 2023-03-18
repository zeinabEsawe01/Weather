const Weather = require('../../weather/weather')
const axios = require('axios')

const WEATHERURL="https://api.openweathermap.org/data/2.5/weather?units=metric&"
const APPID = "d1fd00c4d67945dd0185d8888aff0ba6"
const iconURL ="http://openweathermap.org/img/wn/"


const getSpecificCity = function(cityName){
    return axios
    .get(
      `${WEATHERURL}q=${cityName}&APPID=${APPID}`
    ).then((result) => {
        let data = result.data
        let cityWeather = new Weather({
            name: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].description,
            conditionPic: `${iconURL}${data.weather[0].icon}.png`
        })
        return cityWeather
    })
    
}

const isCityExists = async function (cityName) {
    return Weather.findOne({ name: cityName }).then((res) => {
      return res != undefined;
    });
  };

  module.exports = {
    getSpecificCity : getSpecificCity,
    isCityExists: isCityExists
  }

