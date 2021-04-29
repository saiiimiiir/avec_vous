import React, { Component } from 'react'
import logo from '../asset/acceuil/logo_transparent.png'
import logo_long from '../asset/logo_long.png'
import triangle from '../asset/acceuil/traingles.png'
import '../scss/Header.scss'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        console.log(process.env.REACT_APP_HOME_ROUTE);
        var menuOpen = false;
        return (
            <div id="header">
                <div className="ancre" onClick={()=>{
                    window.location.href = "#header"
                }}>
                    <i className="fas fa-chevron-up"></i>
                    <span>haut de page</span>
                </div>
                <div className="titre">
                    <h1 className="titreText">
                        <span>LOIRET</span> éLECTIONS DéPARTEMENTALES<br/>
                        des <span className="strong">20</span> et <span className="strong">27 JUIN 2021</span>
                    </h1>
                </div>
                <div className="containerTitre">

                    {/*-----hamburger menu icon-----*/}
                    <div className="burgerIcon displayOnMobile" onClick={()=>{
                        if(menuOpen == false){
                            (document.querySelector('.menuMobile') as any).style.left = "0";
                            menuOpen = true;
                        } else {
                            (document.querySelector('.menuMobile') as any).style.left = "-100%";
                            menuOpen = false;
                        }
                    }}>
                        <i className="fas fa-bars"></i>
                    </div>
                    {/*-----hamburger menu icon-----*/}

                    {/*-----hamburger menu pannel-----*/}
                    <div className="menuMobile displayOnMobile">
                        <Link to="/role">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> les rôles du conseil départemental</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> nos principales actions</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de beaugency</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de châlettes-sur-loing</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de chateauneuf-sur-loire</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de courtenay</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de la-ferté-saint-aubin</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de fleury-les-aubrais</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de gien</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de lorris</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de malesherbes</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de meung-sur-loire</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de montargis</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de olivet</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de orléans 1</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de orléans2</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de orléans 3</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de orléans 4</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de pithiviers</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de saint-jean-de-braye</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de saint-jean-de-la-ruelle</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> canton de saint-jean-le-blanc</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> canton de sully-sur-loire</span>
                        </Link>
                        <Link to="#">
                            <span className="yellowText"> <i className="fas fa-long-arrow-alt-right"></i> nous contacter</span>
                        </Link>
                        <Link to="#">
                            <span className="bluetext"> <i className="fas fa-long-arrow-alt-right"></i> mentions légales</span>
                        </Link>
                    </div>
                    {/*-----hamburger menu pannel-----*/}
                    <div className="textMajorite"><h2 ><span className="whiteText">majorité</span> <span className="bluetext">départementale</span> </h2></div>
                </div>
                <div className="imageContainer">
                    <div className="socialIcon">
                        <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="instagram.com"><i className="fab fa-instagram"></i></a>
                    </div>
                    <Link to="/home">
                        <img id="logoImg" src={logo} alt="Logo avec vous !" />
                    </Link>
                    <Link to="/home">
                        <img src={logo_long} alt="logo loiret avec vous" className="displayOnMobile logoLong" />
                    </Link>
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
