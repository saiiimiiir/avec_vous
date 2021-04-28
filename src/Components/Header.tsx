import React, { Component } from 'react'
import logo from '../asset/acceuil/logo_transparent.png'
import logo_long from '../asset/logo_long.png'
import triangle from '../asset/acceuil/traingles.png'
import '../scss/Header.scss'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="menuMobile">
                    
                </div>
                <div className="titre">
                    <h1 className="titreText">
                        <span>LOIRET</span> éLECTIONS DéPARTEMENTALES<br/>
                        des 20 et 27 JUIN 2021
                    </h1>
                </div>
                <div className="containerTitre">

                    <h2 className="whiteText">majorité</h2> <h2 className="bluetext">départementale</h2>
                </div>
                <div className="imageContainer">
                    <div className="socialIcon">
                        <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="instagram.com"><i className="fab fa-instagram"></i></a>
                    </div>
                    <img id="logoImg" src={logo} alt="Logo avec vous !"/>
                    <img src={logo_long} alt="logo loiret avec vous" className="displayOnMobile logoLong"/>
                    <img src={triangle} id="trinagle"/>
                    
                    <div className="nav">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/role" >
                                        <span className="textMenu">
                                            Les rôles du <br />
                                            conseil départemental
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/actions" >
                                        <span className="textMenu">
                                            Nos principales actions
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="containerFooter">
                    <h2 className="footerText">
                        <span className="bluetext">un bilan</span> positif <br className="displayOnMobile"/><span className="bluetext">et des engagements</span> forts
                    </h2>
                </div>
            </div>
        )
    }
}
