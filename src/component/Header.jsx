import { Link } from 'react-router-dom'
import { useTheme } from '../utils/context'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
`

export default function Header() {
  const { toggleTheme } = useTheme()
  return (
    <NavContainer>
      <Link to={'/'}>Home</Link>
      <Link to={'/pokedex'}>Pokedex</Link>
      <Link to={'/Games'}>Games</Link>
      <Link to={'/dual-type-chart'}>Dual type chart</Link>
      <FontAwesomeIcon
        icon={faCircleHalfStroke}
        onClick={() => toggleTheme()}
      />
    </NavContainer>
  )
}
