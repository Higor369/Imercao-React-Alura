import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/home/App';
import Video from './pages/cadastro/Video'
import Categorias from './pages/cadastro/Categoria'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path='/cadastros/video' exact component={Video} ></Route>
      <Route path='/cadastros/categorias' exact component={Categorias}></Route>
      <Route  component={() => (<div>404</div>)}></Route>
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


//<Route path="/cadastro/video" component={CadastroVideo}></Route>
//<Route path="/" component={App}></Route>

