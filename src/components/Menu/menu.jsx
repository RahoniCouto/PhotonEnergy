import React from 'react';
import Logo from '../../assets/images/Logo1.png';
import Anchor from '../Anchors/anchor';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery';
import 'popper.js';
import './menu.css';

function Menu() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-color">
            <img className="Logo" src={Logo} alt=""/>
            <a className="navbar-brand" href="/">Photon Energy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Anchor className="nav-item nav-link" href="/">Home</Anchor>
                    <Anchor className="nav-item nav-link" href="/Servicos">Serviços</Anchor>
                    <Anchor className="nav-item nav-link" href="/Projetos">Projetos</Anchor>
                    <Anchor className="nav-item nav-link" href="/Sobre">Sobre</Anchor>
                </div>
            </div>
            <div>
                <button className="btn btn-warning">
                    Orçamento
                </button>
            </div>
        </nav>
    )
}

export default Menu;