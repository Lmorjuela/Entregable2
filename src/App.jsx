import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import getApiKey from './utils/getApiKey';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';
import Forms from './components/Forms';


function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [inputValue, setInputValue] = useState()

  //Obtener las coordenadas
  useEffect(() => {
    const success = pos => {

      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj);
    }
    navigator.geolocation.getCurrentPosition(success);
  }, []);


  //Obtener las coordenadas del usuario por medio de geolocalización
  useEffect(() => {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${getApiKey()}`
      axios.get(url)

        .then(res => {
          setWeather(res.data)
          const objTemp = {
            celsius: +(res.data.main.temp - 273.15).toFixed(1),
            farenheit: +((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
          }

          setTemp(objTemp);
        })
        .catch(err => console.log(err));

    }
  }, [coords])

  //Obtener localización del usuario cuando lo escribe por medio del input
  useEffect(() => {
    if (weather && inputValue) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${getApiKey()}`
      axios.get(url)

        .then(res => {
          setWeather(res.data)
          const objTemp = {
            celsius: +(res.data.main.temp - 273.15).toFixed(1),
            farenheit: +((res.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1)
          }

          setTemp(objTemp);
        })
        .catch(err => console.log(err));

    }
  }, [inputValue])

  return (
    <>
      <div className='all'>
          {
            weather
              ?<Forms setInputValue={setInputValue}/>
              : <Loading />
          }

        <div className='app'>
          {
            weather
              ? <WeatherCard
                weather={weather}
                temp={temp}
              />
              : <Loading />
          }
        </div>
      </div>
    </>
  )
}

export default App
