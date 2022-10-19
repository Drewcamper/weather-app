import axios from "axios";

const apiBase = "https://api.openweathermap.org/data/2.5/";
const apiKey = "0a5434c9bad2d1ac924e0af814167f52";

export const fetchWeatherData = (city) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiBase}weather?q=${city}&units=metric&APPID=${apiKey}`)
      .then((res) => {
        console.log(res.data)
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err.message);
        console.log(err.response.status);

        reject({ status: err.resopnse.status, message: err.message });
      });
  });
};
