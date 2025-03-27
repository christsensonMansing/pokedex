import { useState } from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import PokemonCard from './components/PokemonCard'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(20)

  return (
    <>
      <Header />
      <SideNav selectedPokemon={selectedPokemon}/>
      <PokemonCard selectedPokemon={selectedPokemon}/>
    </>
  )
}

export default App
