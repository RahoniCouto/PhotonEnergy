import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Servicos from './pages/Servicos/servicos';
import Projetos from './pages/Projetos/projetos';
import Sobre from './pages/Sobre/sobre';
import Politica from './pages/Politica/politica';
import Parceria from './pages/Parcerias/parceria';
import Missao from './pages/Missao/missao';
import FAQ from './pages/FAC/FAC'


const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Servicos" component={Servicos} />
      <Route path="/Projetos" component={Projetos} />
      <Route path="/Sobret" component={Sobre} />
      <Route path="/PoliticaDePrivacidade" component={Politica} />
      <Route path="/Parcerias" component={Parceria} />
      <Route path="/Missao" component={Missao} />
      <Route path="/FAC" component={FAQ} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

