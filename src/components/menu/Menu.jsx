import React from 'react'

import logo from '../../assents/imagens/logoHigorFlix.png'
import "./menu.css"

import {Link} from 'react-router-dom'

import ButtonLink from '../buttonLink/ButtonLink'

const menu = (props) => {

    return(
        <nav className="Menu">
            <Link  to="/">
             <img src={logo} className="Logo" alt="logo"></img>
            </Link>

            <ButtonLink className="ButtonLink" to="/cadastro/video">
                Nossos Videos
            </ButtonLink>
        </nav>
    )


}

export default menu;