import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
}
export const useTheme = () => useContext(ThemeContext)

export const DataContext = createContext({})
