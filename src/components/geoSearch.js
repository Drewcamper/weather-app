import { useContext } from "react";
import { WeatherDataContext } from "../context/context";

export const GeoLookup = () => {

    const { latitude, setLatitude, longitude, setLongitude, setLatText, setLonText, error } = useContext(WeatherDataContext);
   
    //const status = document.querySelector('#status')
    
    const success = (position) => {
        const positionByWeb = `lat: ${latitude}, lon: ${longitude}`

      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      setLatText('Latitude: ')
      setLonText('Longitude: ')
      console.log(positionByWeb)
    }

      return navigator.geolocation.getCurrentPosition(success, error)
    
}
  

/*const getLocationByCoordinates = useCallback(()=> {
  axios.get(`${coordinatesBase}${latitude}&lon=${longitude}&appid=${apiKey}`).then(
    response => {
          console.log(response.data)
          setCity(response.data[0].name)
          console.log(response.data[0].name)
            }
        ).catch(error =>{           
          console.log(error.response)
          console.log(error.message)           
          })           
},[latitude, longitude])
*/