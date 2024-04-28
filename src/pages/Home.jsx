import { useTheme } from '../utils/context'
import Header from '../component/Header'
import SearchBar from '../component/SearchBar'
import { useFetch } from '../utils/fetchData'
import { useEffect, useState } from 'react'
import Thumbnail from '../component/Thumbnail'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GridListPokemon = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
`

const PokeLink = styled(Link)`
  display: flex;
  justify-content: center;
`
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 40px;
`

export default function Home() {
  const { theme } = useTheme()
  const { data } = useFetch()
  const [page, setPage] = useState(1)
  useEffect(() => {
    console.log(data)
  })
  const nextPage = () => {
    setPage(page + 1)
  }
  const previousPage = () => {
    setPage(page - 1)
  }

  return (
    <>
      <Header />
      <SearchBar />
      <h1>Pokemon Roster</h1>
      <GridListPokemon>
        {data &&
          data.results.map(({ name }, index) => (
            <PokeLink to={`/pokemon/${name}`} key={index}>
              {name}
            </PokeLink>
          ))}
      </GridListPokemon>

      <Pagination>
        {page > 1 && (
          <button type='button' onClick={previousPage}>
            Prev
          </button>
        )}
        <p>{page}</p>
        <button type='button' onClick={nextPage}>
          Next
        </button>
      </Pagination>
    </>
  )
}
