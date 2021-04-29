import React, { Component } from 'react'
import { useParams } from 'react-router'
import triangle from '../asset/acceuil/traingle_titre.png'
import Header from '../Components/Header'
import '../scss/Canton.scss'

const Canton = () => {
    var params = useParams()
    var canton = (params as any).canton;
    console.log(canton)
    return (
        <div id="canton">
            <Header></Header>
            <div className="titreCanton">
                <img src={triangle} />
                <h3>pour le canton de {canton == "la-ferte-saint-aubin" ? "la ferte-saint-aubin" : canton}</h3>
            </div>
            <div className="carteCanton">
                <img src={process.env.PUBLIC_URL + '/carte_canton/' + canton + '.jpg'} alt={"carte " + canton} />
            </div>
            <div className="candidats">
                
            </div>
            <div className="contact">
                <div className="contactIcon">
                    <span>
                        NOUS CONTACTER
                    </span>
                    <div className="socialIcon">
                        <a href="mailto:test@loiretavecvous.fr"><i className="fas fa-envelope"></i></a>
                        <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="instagram.com"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="programLink">
                    <span>
                        VOIR ET TÉLÉCHARGER LE PROGRAMME
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Canton;
