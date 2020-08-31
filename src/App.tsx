import React from 'react';
import './App.css';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import getTheme from './themes/theme'
import Header from './Components/Header';


function App() {
  const theme = getTheme
  return (
    <ThemeProvider className="App" theme={theme as DefaultTheme}>
      <Header city="Hanoi" name="Lam"/>
    </ThemeProvider>
  );
}

export default App;
