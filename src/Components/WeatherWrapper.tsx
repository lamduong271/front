import React, { FC } from 'react'
import styled from 'styled-components'
import WeatherItem from './WeatherItem'

interface WeatherWrapperProps {
  weatherData: any
}
const WeatherWrapperContainer = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.xl};
  text-align: center;
  background-color: ${(props) => props.theme.color.white};
  padding: ${(props) => props.theme.spacing.m};
`

const WeatherWrapper: FC = ( {weatherData }: WeatherWrapperProps) => {
  console.log(weatherData)
  return (
  <WeatherWrapperContainer>
    { weatherData.map((data: any) =>
      <WeatherItem
      city={data.name}
      temp={data.main.temp}
      description={data.weather[0].main}/>
    )}
  </WeatherWrapperContainer>
)}

export default WeatherWrapper
