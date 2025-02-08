import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/login'>Logout</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar