import { useTheme } from '../../utils/context'
import Header from '../../component/Header'

export default function TypeChart() {
  const { theme } = useTheme()
  return (
    <>
      <Header />
      <h1>Dual Type Chart</h1>
    </>
  )
}
