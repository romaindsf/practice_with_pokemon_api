import { useTheme, useData } from '../../utils/context'
import Header from '../../component/Header'
import SearchBar from '../../component/SearchBar'

export default function Home() {
  const { theme } = useTheme()
  // const { data } = useData()
  return (
    <>
      <Header />
      <SearchBar />
      <h1>Pokemon Roster</h1>
      <h2>le thème est {theme}</h2>
      {/* <p>{data}</p> */}
    </>
  )
}
