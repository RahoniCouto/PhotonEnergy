import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiRightArrow, BiCopyright } from 'react-icons/bi'
import Logo1 from '../../assets/images/logo.jpg'
import  Anchor  from '../Anchors/anchor'

const instagram = `https://www.instagram.com/photonenergyenergiasolar/?hl=en`;
const face = `https://www.facebook.com/photonenergyenergiasolar`;
const whats = `https://api.whatsapp.com/send/?phone=5511991968154`;

function footer() {
    return (
        <footer className="footerMain">
		    <div className="container mb-5 pb-4">
                <div className="d-flex justify-content-between">
                    <div className="col-lg-2 col-md-6">
                        <div className="d-flex row justify-content-center">
                            <h2 className="py-3">SOBRE</h2>
                            <p>Empresa dedicada 100% a você, atendendo clientes com rapidez, agilidade</p>
                            <ul className="d-flex">
                                <li><a href={instagram}><AiOutlineInstagram className="colorInsta" /></a></li>
                                <li><a href={face}><FaFacebookSquare color="#3b5998" className="colorface" /></a></li>
                                <li><a href={whats}><FaWhatsapp color="#fff" className="colorwhats"/></a></li>
                            </ul>      
                        </div>                     
                    </div>
                    <div className="col-lg- col-md-6">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h2 className="py-3">INSTITUCIONAL</h2>
                            <ul className="d-flex flex-column">
                                <li><BiRightArrow color="#ffc107" /><Anchor href="/PoliticaDePrivacidade">Politica de privacidade</Anchor></li>
                                <li><BiRightArrow color="#ffc107" /><Anchor href="/Parcerias">Parcerias</Anchor></li>
                                <li><BiRightArrow color="#ffc107" /><Anchor href="/Missao">Missão</Anchor></li>
                                <li><BiRightArrow color="#ffc107" /><Anchor href="/FAC">FAQ</Anchor></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="align-self-center">CONTATO</h2>
                            <img className="logofinal align-self-center" src={Logo1} alt=""/>
                        </div>
                    </div>
                </div>
                <p><BiCopyright color="#fff" />Photon Energy CNPJ: 30472809/0000-00 | copyright 2020 - Todos os direitos reservados</p>
            </div>
		</footer>
    )
}

export default footer;