import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink path='/'>Home</NavLink></li>
                <li><NavLink path='/about'>About</NavLink></li>
                <li><NavLink path='/login'>Logout</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar