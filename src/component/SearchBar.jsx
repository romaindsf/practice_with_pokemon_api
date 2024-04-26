import { useState } from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../utils/context'

const SearchDiv = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.lightBgTheme : colors.darkBgTheme};
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin: 20px;
  padding: 5px;
  form {
    border-bottom: 2px solid
      ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
    border-radius: 10px;
    padding: 5px 15px;
  }
  input {
    width: 80px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 16px;
    color: inherit;
  }
  svg {
    color: inherit;
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
      <form>
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
      </form>
    </SearchDiv>
  )
}
