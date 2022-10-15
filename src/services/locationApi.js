import axios from "axios";

const coordinatesBase = process.env.REACT_APP_REVERSE_BASE
const apiKey = process.env.REACT_APP_API_KEY;


export const fetchLocationData = (latitude, longitude) => {
    return new Promise((resolve, reject) => {
        axios
        .get(`${coordinatesBase}${latitude}&lon=${longitude}&appid=${apiKey}`)
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
