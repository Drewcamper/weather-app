import { useContext } from "react";
import { WeatherDataContext } from "../context/context";
import { SearchBox } from "./searchBox";
import './css/weatherDataPage.css'



const WeatherDataDetails = () => {
  const { weatherData, errorCodeNumber, error } = useContext(WeatherDataContext);

  // return early / early return
  if (errorCodeNumber === 404) {
    return (
      <div className="city">
        {errorCodeNumber}City not found! {error}
      </div>
    );
  }
  if (errorCodeNumber === 400) {
    return (
      <div className="city">
        {errorCodeNumber}Please enter a city! {error}
      </div>
    );
  }
  if (weatherData === undefined) {
    return (
      <div className="city">
        <p>Welcome to the weather app!</p>
        <p>Enter a city to get the weather of.</p>
      </div>
    );
  } else {
    return (
      <div className="weather-data">
        <p className="city">{weatherData.name}</p>
        <div className="tempBox">
            <div className='minMaxTemp'>
                <p className='tempMin'>min {Math.round(weatherData.main.temp_min)}ºC</p>
                <p className='tempMax'>max {Math.round(weatherData.main.temp_max)} ºC</p>
            </div>
            <p className="temp">{Math.round(weatherData.main.temp)}ºC</p>
            <p className="weather">{weatherData.weather[0].main}{/*weatherData.weather[0].icon*/}</p>
        </div>
        <p> 
          Feels like {Math.round(weatherData.main.feels_like)}ºC, and the wind
          speed is {Math.round(weatherData.wind.speed * 3.6)} km/h
        </p>
      </div>
    );
  }
};

export const WeatherDataPage = () => {
  const { city, setCity } = useContext(WeatherDataContext);
  return (
    <>
      <SearchBox city={{ city, setCity }} />
      <WeatherDataDetails />
    </>
  );
};