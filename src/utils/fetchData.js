import { useEffect, useState } from 'react'

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState()
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const fecthData = async () => {
      if (isLoading === true) return
      setIsLoading(true)
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const data = await response.json()
        setData(data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    fecthData()
    return
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { isLoading, data, error }
}
