import React, { createContext, useState } from "react";

export const WeatherDataContext = createContext()


export const WeatherDataProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState()
    const [city, setCity] = useState('')
    const [errorCodeNumber, setErrorCodeNumber] = useState()
    const [error, setError] = useState()

    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()
    

    return (
      <WeatherDataContext.Provider value={{weatherData, setWeatherData, city, setCity, errorCodeNumber, setErrorCodeNumber, error, setError, longitude, setLongitude, latitude, setLatitude}}>
        {children}
      </WeatherDataContext.Provider>
    )
  }
