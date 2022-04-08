import React from 'react'
import logo from './React-icon.svg.png'

function Navbar(){
    return(
        <nav>
            <img src={logo} alt='logo'/>
            <h3>ReactFacts</h3>
            <h4>React Course-Project 1</h4>
        </nav>
    )
}

export default Navbar;