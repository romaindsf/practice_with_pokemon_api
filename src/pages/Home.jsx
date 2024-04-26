import { useTheme } from '../utils/context'
import Header from '../component/Header'
import SearchBar from '../component/SearchBar'
import { useFetch } from '../utils/fetchData'
import { useEffect } from 'react'
import Thumbnail from '../component/Thumbnail'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PokeLink = styled(Link)`
  display: block;
`

export default function Home() {
  const { theme } = useTheme()
  const { data } = useFetch()

  useEffect(() => {
    console.log(data)
  })

  return (
    <>
      <Header />
      <SearchBar />
      <h1>Pokemon Roster</h1>
      <h2>le thème est {theme}</h2>

      {data &&
        data.results.map(({ name }, index) => (
          <PokeLink to={`/pokemon/${name}`} key={index}>
            {name}
          </PokeLink>
        ))}
    </>
  )
}
