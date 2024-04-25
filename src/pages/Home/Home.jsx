import { useTheme } from '../../utils/context'
import Header from '../../component/Header'
import SearchBar from '../../component/SearchBar'

export default function Home() {
  const { theme } = useTheme()
  return (
    <>
      <Header />
      <SearchBar />
      <h1>Pokemon Roster</h1>
      <h2>le thème est {theme}</h2>
    </>
  )
}
