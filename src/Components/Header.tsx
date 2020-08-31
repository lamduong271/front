import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const HeaderContainer = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.xl.fontSize};
  text-align: center;
`


interface HeaderProps {
  name: string,
  city: string,
}

const Header: FC<HeaderProps> = ({
  name,
  city,
}) => {
  // const [data, setData] = useState(null)

  useEffect((): void => {
    if (window) {
      getWeather('portland')
    }
  }, [])

  const getWeather = (city): void => {
    axios.get(`http://localhost:8000/api/weather?city=${city}&apiKey=960a3201a350df1d28232bf4d9b60dd60`)
      .then((responseJson) => {
        console.log(responseJson)
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
    });
  }
  return (
  <HeaderContainer>
    Hello {name}
    and your city is { city}
  </HeaderContainer>
)}

export default Header
