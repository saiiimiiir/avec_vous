import React, { Component } from 'react';
import '../scss/Construction.scss';
import logo from '../asset/logo_header.png'
import votez from '../asset/votez.png'

class Construction extends Component {
    render() {
        return (
            <div id="construction">
                <h1 className="titre">
                    <span className="yellowText">LOIRET</span> éLECTIONS DéPARTEMENTALES<br/>
                    des 20 et 27 JUIN 2021
                </h1>
                <div className="containerTitre">
                    <h2 className="sousTitre">
                        <span className="whiteText">majorité</span> <span className="bluetext">départementale</span>
                    </h2>
                </div>
                <div className="imageContainer">
                    <img id="votezImg" src={votez} alt="Votez" />
                    <img id="logoImg" src={logo} alt="Logo avec vous !" />
                </div>
                <div className="containerFooter">
                    <span className="footerText">
                        SITE EN COURS DE Réalisation
                    </span>
                </div>
            </div>
        );
    }
}

export default Construction;
