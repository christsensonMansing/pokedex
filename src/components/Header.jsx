import React from 'react'
import pokedexLogo from '../../public/pokedex-img.png'

export default function Header() {
  return (
    <>
      <header >
        <div className="website-logo">
          <img className='pokedex-logo' src={pokedexLogo} alt="" />
          <h1>Pokédex</h1>
        </div>
      </header>
    </>
  )
}
