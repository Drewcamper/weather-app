import React, {useState} from 'react'
import './App.css';

function App() {

  const apiBase = 'api.openweathermap.org/data/2.5'
  const apiKey ='0a5434c9bad2d1ac924e0af814167f52'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState('') 

  const getWeather = (event) => {
    if (event.key === 'Enter'){
      fetch(`${apiBase}weather?q=${city}&units=metric&APPID=${apiKey}`).then(
        response => response.json()
          ).then (
            data => {
              setWeatherData(data)
              setCity('')
                }
            )
    }
  }
  


  return (
      <div className = 'container'>
          <input
            className='input'
            placeholder='Enter City'
            onChange={e =>setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
          />



          {typeof weatherData.main == 'undefined' ? 
              <div>
                  <p>Welcome to the weather app! Enter in a city to get the weather of.</p>
                  <p className='city'>Something is wrong here..?</p>
              </div>
           :  
              <div className='weather-data'>
                  <p className='city'>It's working!!!</p>
                  <p className='city'>{weatherData.name}</p>
                  <p className='temp'>{Math.round(weatherData.main.temp)}ºC</p>    
                  <p className='weather'>{weatherData.weather[0].main}</p>      

              </div>
        } {/* I don't know why it is not working. 
                      The api shows the 200 or 304 status.
                      It also recognizes when I hit enter (getWeather event.key works fine).
                                BUT!
                      It doesn't change the type of the weatherData.main from undefined to the data so the else part of the ternary operator doesn't get execute.*/}

          {weatherData.cod === '404' ? (
            <p>City not found.</p>
          ):(
            <>
            </>
          )}

      </div>
  );
}

export default App;
