import { useTheme } from '../../utils/context'
import Header from '../../component/Header'

export default function Games() {
  const { theme } = useTheme()
  return (
    <>
      <Header />
      <h1>Games</h1>
    </>
  )
}
