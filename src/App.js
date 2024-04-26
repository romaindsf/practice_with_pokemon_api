import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Games from './pages/Games'
import TypeChart from './pages/TypeChart'
import Pokemon from './pages/pokemon'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/Games' element={<Games />} />
          <Route path='/dual-type-chart' element={<TypeChart />} />
          <Route path='/pokemon/:name' element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
