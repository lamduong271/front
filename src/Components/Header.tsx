import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import UserDefaultsContext from 'src/common/UserDefaultsContext'

const HeaderContainer = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.xl};
  text-align: center;
  background-color: ${(props) => props.theme.color.white};
  padding: ${(props) => props.theme.spacing.m};
`

const Header: FC = () => {
  // const [data, setData] = useState(null)

  const { name } = useContext(UserDefaultsContext)
  return (
  <HeaderContainer>
    Hello {name}! Wanna check the weather now?
  </HeaderContainer>
)}

export default Header
