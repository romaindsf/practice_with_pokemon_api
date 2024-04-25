import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Pokedex from './pages/Pokedex/Pokedex'
import Games from './pages/Games/Games'
import TypeChart from './pages/TypeChart/TypeChart'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/Games' element={<Games />} />
          <Route path='/dual-type-chart' element={<TypeChart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
