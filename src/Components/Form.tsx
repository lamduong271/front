import React, { FC, useContext} from 'react'
import styled from 'styled-components'
import UserDefaultsContext from 'src/common/UserDefaultsContext'
// import UserDefaultsContext from 'src/common/UserDefaultsContext'

const FormContainer = styled.div`
  border:1px solid ${(props) => props.theme.color.secondary};
  padding: ${(props) => props.theme.spacing.l};
  justify-content: center;
  display: flex;
`
const Input = styled.input`
  font-size: ${(props) => props.theme.fontSize.s};
  padding: ${(props) => props.theme.spacing.s};
  border: 2px solid ${(props) => props.theme.color.secondary};
  flex-grow: 3;
  margin: ${(props) => props.theme.spacing.s};
  border-radius: 3px;
  :focus {
    outline: 0;
    border-color: ${(props) => props.theme.color.hoverSecondary};
  }
  :hover {
    border-color: ${(props) => props.theme.color.hoverSecondary};
  }
}
`


const Button = styled.button`
  background: ${(props) => props.theme.color.secondary};;
  padding: ${(props) => props.theme.spacing.s};
  font-size: ${(props) => props.theme.fontSize.s};
  border: 2px solid ${(props) => props.theme.color.hoverSecondary};
  margin: ${(props) => props.theme.spacing.s};
  border-radius: 3px;
  flex-grow: 1;
  :focus {
    outline: 0;
    background-color: ${(props) => props.theme.color.hoverSecondary};
  }
  :hover {
    background-color: ${(props) => props.theme.color.hoverSecondary};
  }
`

interface HeaderProps {
  name: string,
  city: string,
}

const Form: FC<HeaderProps> = () => {

  const { getWeather, city, setCity}  = useContext(UserDefaultsContext)
  return (
  <FormContainer>
      <Input
      value={city}
      onChange={(e): void => setCity(e.target.value)}
      placeholder="Select a city"/>
      <Button onClick={(): void => getWeather(city)}>Submit</Button>
  </FormContainer>
)}

export default Form
