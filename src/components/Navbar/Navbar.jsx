import React from "react"
import { NavLink } from "react-router-dom"
import "./navbar.css"


function Navbar() {
    return (
        <header>
            <h1>Movie List</h1>
          {/* <img src={logo} alt="logo"/> */}
            <nav>
              <NavLink to="/">Home </NavLink> |
              <NavLink to="add"> Add</NavLink>
            </nav>
        </header>
    )
}

export default Navbar
