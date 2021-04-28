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
                <div className="titre">
                    <h1 className="titreText">
                        <span>LOIRET</span> éLECTIONS DéPARTEMENTALES<br/>
                        des 20 et 27 JUIN 2021
                    </h1>
                </div>
                <div className="containerTitre">
                    <div className="burgerIcon displayOnMobile" onClick={()=>{
                        console.log(document.querySelector('.menuMobile'))
                    }}>
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="menuMobile displayOnMobile">
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> les rôles du conseil départemental</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> nos principales actions</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de beaugency</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de châlettes-sur-loing</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de chateauneuf-sur-loire</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de courtenay</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de la-ferté-saint-aubin</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de fleury-les-aubrais</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de gien</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de lorris</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de malesherbes</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de meung-sur-loire</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de montargis</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de olivet</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de orléans 1</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de orléans2</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de orléans 3</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de orléans 4</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de pithiviers</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de saint-jean-de-braye</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de saint-jean-de-la-ruelle</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de saint-jean-le-blanc</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de sully-sur-loire</span>
                        <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> nous contacter</span>
                        <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> mentions légales</span>
                    </div>
                    <div className="textMajorite"><h2 className="whiteText">majorité</h2><h2 className="bluetext">départementale</h2></div>
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
