import { useState } from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../utils/context'

const SearchDiv = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.lightBgTheme : colors.darkBgTheme};
  color: ${({ theme }) => (theme === 'light' ? '#e8e8e8' : 'black')};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin: 20px;
  padding: 5px;

  input {
    width: 70px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
    border-bottom: 2px solid
      ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  }
  svg {
    padding-right: 15px;
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  }
`
export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('')
  const [searchActive, setSearchActive] = useState(false)
  const { theme } = useTheme()

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  const activeSearchBar = (e) => {
    setSearchActive(!searchActive)
  }

  return (
    <SearchDiv theme={theme}>
      <input
        theme={theme}
        type='text'
        value={searchInput}
        onChange={handleChange}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        onClick={() => activeSearchBar()}
      />
    </SearchDiv>
  )
}
