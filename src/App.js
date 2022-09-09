import React, { useState} from 'react';
import './App.css';


const apiBase = process.env.REACT_APP_API_BASE;
const apiKey = process.env.REACT_APP_API_KEY;


function App() {

  const [weatherData, setWeatherData] = useState()
  const [city, setCity] = useState('')

  const getWeather = (event) => {
    
    if (event.key === 'Enter'){
      setTimeout(() => {
      fetch(`${apiBase}weather?q=${city}&units=metric&APPID=${apiKey}`).then(
        response => response.json()
          ).then (
            data => {
              console.log(data);
              setWeatherData(data)
              setCity('')
                }
            ).catch(err =>{
              console.log(err.message);})
    }, )}
    console.log(weatherData);
  }
  
  const renderContent = () => {   
    // return early / early return;
    if (weatherData?.cod === '404') {
      return <div className='city'>City not found!</div>
    }   
    
    if (weatherData === undefined) {
      return  <div className='city'>
                  <p>Welcome to the weather app!</p>
                  <p>Enter a city to get the weather of.</p>                 
              </div>                
    }
    if (weatherData?.cod === '400') {
      
        return <div className='city'>Please enter a city!</div>     
    }
  }


  return (
      <div className='conatiner'>
          <input
            className='input'
            placeholder='Enter City'
            onChange={e =>setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
          />


              
          {renderContent() ? renderContent(): 
      <div>
        <div className='weather-data'>
          <p className='city'>{city}</p>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main?.temp)}ºC</p>    
          <p className='weather'>{weatherData.weather?.[0].main}</p>                    
        </div>
        </div>
    }
      </div>
      )



      
}

export default App;