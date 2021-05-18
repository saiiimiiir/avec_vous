import React, { Component } from 'react'
import '../../scss/Candidat.scss'

export default class SaintJeanDeLeRuelle extends Component {
    render() {
        return (
            <div id="presentationCandidat">

                <div className="titulaire">

                    <div className="fiche">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/saintjeandelaruelle/Kadejat-Dahou.jpg"} />
                        </div>
                        <div className="text">
                            <h3 className="titre">
                                titulaire<br />
                                Kadéjat Dahou
                            </h3>
                            <p>
                                <em className="lineHeight">
                                    Née à Orléans, mère de famille, ingénieur de formation, 
                                    a exercé toute sa carrière professionnelle au service de l’éducation dans le Loiret, 
                                    élue municipale à Saint-Jean-de-la-Ruelle, très investie dans le monde associatif.<br />
                                </em>
                            </p>
                        </div>
                    </div>

                    <div className="fiche">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/saintjeandelaruelle/Guillem-Leroux.jpg"} />
                        </div>
                        <div className="text">
                            <h3 className="titre">
                                titulaire<br />
                                Guillem Leroux
                            </h3>
                            <p>
                                <em className="lineHeight">
                                    Agé de 26 ans, diplômé de Sciences Po Paris et travaillant actuellement dans une startup française de vélos partagés. 
                                    Conseiller municipal d'Ingré et Conseiller métropolitain d'Orléans métropole, 
                                    engagé dans la vie citoyenne de notre territoire depuis 2017.<br />
                                </em>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="contact">
                    <div className="contactIcon">
                        <span>
                            NOUS CONTACTER
                        </span>
                        <div className="socialIcon">
                            <a href="https://www.dahou-leroux.fr/" target="_blank"><i className="fas fa-globe"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}