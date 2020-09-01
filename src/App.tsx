import React, { FC, useState } from 'react';
import './App.css';
import axios from 'axios'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import getTheme from './themes/theme'
import Header from './Components/Header';
import UserDefaultsContext from './common/UserDefaultsContext';
import Form from './Components/Form';
import WeatherWrapper from './Components/WeatherWrapper';

interface AppProps {
  theme: DefaultTheme,
}

const App: FC<AppProps> = () =>{
  const theme = getTheme
  const [city, setCity] = useState(null)
  const [weatherData, setweatherData] = useState([])
  // useEffect((): void => {
  //   getWeather('portland')
  // }, [])

  const getWeather = (city: string): void => {
    axios.get(`http://localhost:8000/api/weather?city=${city}&units=metric&apiKey=${process.env.AUTH_KEY}`)
      .then((responseJson) => {
        setweatherData([...weatherData, responseJson.data.response]);
      })
      .catch((error) => {
        alert(JSON.stringify(error.message))
    });
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme as DefaultTheme}>
        <UserDefaultsContext.Provider value={{
          getWeather,
          city,
          setCity,
          name: 'Nikoo'
          }}>
          <Header/>
          <Form/>
        {weatherData && <WeatherWrapper padding='12px' weatherData={weatherData}/>}
        </UserDefaultsContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
