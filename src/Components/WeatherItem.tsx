import React, { FC } from 'react'
import styled from 'styled-components'

interface WeatherItemProps {
  city: string,
  temp: number,
  description: string,
}
const WeatherItemContainer = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.l};
  text-align: center;
  background-color: ${(props) => props.theme.color.white};
  padding: ${(props) => props.theme.spacing.s};
  background: antiquewhite;
  margin: ${(props) => props.theme.spacing.s};
  box-shadow: 1px 2px 7px -1px ${(props) => props.theme.color.secondary};
`
const City = styled.div`
`
const Temp = styled.div`
`
const WeatherItem: FC = ({
  city,
  temp,
  description,
}: WeatherItemProps) => {
  return (
  <WeatherItemContainer>
    <City>{city}</City>
    <Temp>{temp}</Temp>
    <Temp>{description}</Temp>
  </WeatherItemContainer>
)}

export default WeatherItem
