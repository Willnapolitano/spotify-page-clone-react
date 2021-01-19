import React from 'react'
import Nav from './nav/Nav.jsx'
import Son from './nav/Son'
import Logo from '../../assets/icons/Logo.png'
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <Nav title="Empresa">
                <Son son="Sobre" />
                <Son son="Empregos" />
                <Son son="For the Record" />
            </Nav>
            <Nav title="Comunidades">
                <Son son="Para Artistas" />
                <Son son="Desenvolvedores" />
                <Son son="Publicidade" />
                </Nav>
            <Nav title="Links úteis">
                <Son son="Suporte" />
                <Son son="Player da Web" />
                <Son son="Aplicativo móvel grátis" />
            </Nav>
            <div>
            <nav className="social-icons">
                <ul>
                    <li><i class="fab fa-1x fa-instagram"></i></li>
                    <li><i class="fab fa-1x fa-twitter"></i></li>
                    <li><i class="fab fa-1x fa-facebook"></i></li>
                </ul>
            </nav>
            <div>
                <div className="copy">
                    <ul>
                        <h6>Brasil</h6>
                        <img src="https://country-flags.scdn.co/flags/br.svg" alt="" class="svelte-11cxugd" />
                    </ul>
                    <h6>&copy; 2021 Spotify AB</h6>
                </div>
                <ul>
                    <h6>Legal</h6>
                    <h6>Centro de privacidade</h6>
                    <h6>Política de privacidade</h6>
                    <div className="ao-lado">
                        <li><h6>Cookies</h6></li>
                        <li><h6>Sobre anúncios</h6></li>
                    </div>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer