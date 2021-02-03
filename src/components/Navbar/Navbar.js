import { useState, useEffect } from 'react'
import './Navbar.css'

import React from 'react'

export default function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const openMenu = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {

    const changeWindowWidth = () => {
      setWindowWidth(window.innerWidth)
      setToggleMenu(false)
    }

    window.addEventListener('resize', changeWindowWidth)

  }, [])

  return (
    <div className="navbar">
      <nav>
        {(windowWidth > 500 || toggleMenu) && (
          <ul className="list">
            <li className="items">Accueil</li>
            <li className="items">Blog</li>
            <li className="items">Contact</li>
          </ul>
        )}
      </nav>
      <div onClick={openMenu} className="btn">MENU</div>
    </div >
  )
}
