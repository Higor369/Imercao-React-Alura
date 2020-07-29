import React from 'react'

import logo from '../../assents/imagens/logoHigorFlix.png'
import "./menu.css"

import ButtonLink from '../buttonLink/ButtonLink'

const menu = (props) => {

    return(
        <nav className="Menu">
            <a  src="/">
             <img src={logo} className="Logo" alt="logo"></img>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Nossos Videos
            </ButtonLink>
        </nav>
    )


}

export default menu;