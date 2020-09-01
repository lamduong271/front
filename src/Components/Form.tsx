import React, { FC, useContext} from 'react'
import styled from 'styled-components'
import UserDefaultsContext from 'src/common/UserDefaultsContext'
// import UserDefaultsContext from 'src/common/UserDefaultsContext'

const FormContainer = styled.div`
  padding: ${(props) => props.theme.spacing.l};
  justify-content: center;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
`
const Input = styled.input`
  font-size: ${(props) => props.theme.fontSize.s};
  padding: ${(props) => props.theme.spacing.s};
  border: 2px solid ${(props) => props.theme.color.primary};
  flex-grow: 3;
  margin: ${(props) => props.theme.spacing.s};
  border-radius: 3px;
  :focus {
    outline: 0;
    border-color: ${(props) => props.theme.color.hoverPrimary};
  }
  :hover {
    border-color: ${(props) => props.theme.color.hoverPrimary};
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

const Form: FC = () => {
  const { getWeather, city, setCity}  = useContext(UserDefaultsContext)

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    getWeather(city)
    setCity('')
  }
  return (
  <FormContainer>
      <Input
      value={city}
      onChange={(e): void => setCity(e.target.value)}
      placeholder="Select a city"/>
      <Button onClick={(e): void => handleSubmit(e)}>Submit</Button>
  </FormContainer>
)}

export default Form
