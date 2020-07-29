import React from 'react'
import { Link } from 'react-router-dom'

import PageDefault from  '../../components/pageDefaut/PageDefault'

const Video = (props) => {

    return(
        <PageDefault>
            <h1>Pagina De Cadastros</h1>

            <Link to="/cadastro/categorias">
                Cadastro Categorias
            </Link>
        </PageDefault>
    )



}

export default Video;