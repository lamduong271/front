import React, { FC, useState } from 'react';
import './App.css';
import axios from 'axios'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import getTheme from './themes/theme'
import Header from './Components/Header';
import UserDefaultsContext from './common/UserDefaultsContext';
import Form from './Components/Form';

interface AppProps {
  theme: DefaultTheme,
}

const App: FC<AppProps> = () =>{
  const theme = getTheme
  const [city, setCity] = useState(null)

  // useEffect((): void => {
  //   getWeather('portland')
  // }, [])

  const getWeather = (city): void => {
    axios.get(`http://localhost:8000/api/weather?city=${city}&apiKey=${process.env.AUTH_KEY}`)
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
    });
  }

  return (
    <ThemeProvider className="App" theme={theme as DefaultTheme}>
      <UserDefaultsContext.Provider value={{
        getWeather: getWeather,
        city,
        setCity,
        }}>
        <Header/>
        <Form/>
      </UserDefaultsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
