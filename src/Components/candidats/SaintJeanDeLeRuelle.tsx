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
                                    48 ans, 4 enfants, ingénieur de formation au sein de l’Éducation Nationale, 
                                    Présidente d’association, Conseillère municipale de Saint-Jean-de-la-Ruelle<br />
                                </em>
                            </p>
                        </div>
                    </div>

                    <div className="fiche">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/saintjeandelaruelle/Guillen-Leroux.jpg"} />
                        </div>
                        <div className="text">
                            <h3 className="titre">
                                titulaire<br />
                                Guillem Leroux
                            </h3>
                            <p>
                                <em className="lineHeight">
                                    26 ans, responsable des relations publiques d’une startup française, 
                                    Conseiller municipal d’Ingré et métropolitain d’Orléans Métropole<br />
                                </em>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="supleant">

                    <div className="fiche">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/saintjeandelaruelle/Isabel-Vieira.jpg"} />
                        </div>
                        <div className="text">
                            <h3 className="titre">
                                Remplaçante<br />
                                Isabel vieira
                            </h3>
                            <p>
                                <em className="lineHeight">
                                    56 ans, 4 enfants, adjointe technique de recherche et de formation de l’Éducation nationale, 
                                    engagée dans la vie associative <br />
                                </em>
                            </p>
                        </div>
                    </div>

                    <div className="fiche">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/saintjeandelaruelle/Bernard-Houzeau.jpg"} />
                        </div>
                        <div className="text">
                            <h3 className="titre">
                                Remplaçant<br />
                                Bernard Houzeau
                            </h3>
                            <p>
                                <em className="lineHeight">
                                    70 ans, retraité, ancien responsable des services techniques d’Ingré, ancien Conseiller municipal d’Ingré <br />
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