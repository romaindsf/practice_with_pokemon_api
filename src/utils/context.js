import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => useContext(ThemeContext)

////////////////

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState()
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    setIsLoading(true)
    async function fecthData() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const data = response.json()
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
      if (isLoading === true) return
      fecthData()
      return { isLoading, data, error }
    }
  })

  return (
    <DataProvider value={{ isLoading, data, error }}>{children}</DataProvider>
  )
}

export const useData = () => useContext(DataContext)
