import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import UserDefaultsContext from 'src/common/UserDefaultsContext'

const HeaderContainer = styled.div`
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.fontSize.xl};
  text-align: center;
`


interface HeaderProps {
  name: string,
  city: string,
}

const Header: FC<HeaderProps> = () => {
  // const [data, setData] = useState(null)

  const { city, name } = useContext(UserDefaultsContext)
  return (
  <HeaderContainer>
    Hello {name}
    and your city is { city}
  </HeaderContainer>
)}

export default Header
