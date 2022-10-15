import { useCallback, useContext } from "react";
import { WeatherDataContext } from "../context/context";
import { fetchWeatherData } from "../services/weatherDataApi";
import '../components/css/searchBox.css'
//import { fetchLocationData } from "../services/locationApi";
//import { GeoLookup } from "./geoSearch";


export const SearchBox = () => {
  
  const { city, setCity, setWeatherData, setError, setErrorCodeNumber, latText, lonText, latitude, longitude/*, WeatherDataDetails*/ } = useContext(WeatherDataContext);

  const handleInputKeyPress = useCallback((event) => {
    if (event.key === "Enter") {
      fetchWeatherData(city)
        .then((data) => {          
          setWeatherData(data);
          setCity("");
        })
        .catch((err) => {
          setErrorCodeNumber(err.status);
          setError(err.message);
        });
    }
  }, [city, setCity, setError, setErrorCodeNumber, setWeatherData]);

  return (
    <div className="conatiner">
      <input
        className="input"
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={handleInputKeyPress}
      />
      <div className='latlon'>
        <div className='lat'>{latText}{latitude}</div>
        <div className='lon'>{lonText}{longitude}</div>
      </div>
      <div>
        {/*<button onClick={()=>{WeatherDataDetails()}}>enter</button>
        <button onClick={()=>{GeoLookup()}}>geo lookup</button>
        <button onClick={()=>{fetchLocationData(latitude, longitude)}}>location by coordinates</button>
        <button onClick={()=>{GeoLookup(); fetchLocationData(); WeatherDataDetails()}}>coordinates search</button>*/}
      </div>            
    </div>
  );
};
