import React, { Component } from 'react'
import '../../scss/Candidat.scss'

export default class Gien extends Component {
    render() {
        return (
            <div id="presentationCandidat">

                <div className="titulaire">

                    <div className="fiche">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/gien/Nadine-Quaix.jpg"} />
                        </div>
                        <div className="text">
                            <h3 className="titre">
                                titulaire<br />
                                NADINE QUAIX
                            </h3>
                            <p>
                                <em>
                                    Mariée, 2 enfants, assistante de direction retraitée<br />
                                </em>
                                <em className="lineHeight">
                                    Vice-Présidente du Conseil départemental sortante, 
                                    Conseillère communautaire de la Communauté des Communes Giennoises,
                                    Conseillère municipale de Gien<br />
                                </em>
                            </p>
                        </div>
                    </div>

                    <div className="fiche">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/gien/Michel-Lechauve-.jpg"} />
                        </div>
                        <div className="text">
                            <h3 className="titre">
                                titulaire<br />
                                MICHEL LECHAUVE
                            </h3>
                            <p>
                                <em>
                                    Marié, 3 enfants,  agriculteur retraité, <br />
                                </em>
                                <em className="lineHeight">
                                    Conseiller départemental sortant, Vice-Président de la Communauté de Communes Berry-Loire-Puisaye<br/>
                                    Conseiller municipal et Maire honoraire de Bonny-Sur-Loire<br />
                                </em>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="supleant">

                    <div className="fiche">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/gien/Veronique-Perron.jpg"} />
                        </div>
                        <div className="text">
                            <h3 className="titre">
                                Remplaçante<br />
                                VÉRONIQUE PERRON
                            </h3>
                            <p>
                                <em>
                                    Infirmière, 2 enfants, <br/>
                                    Conseillère communautaire de la Communauté des Communes Giennoises<br />
                                </em>
                                <em className="lineHeight">
                                    1ère Adjointe au Maire de Boismorand<br/>
                                    Présidente du SIRIS Les Choux/Boismorand<br />
                                </em>
                            </p>
                        </div>
                    </div>

                    <div className="fiche">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/gien/Emmanuel-Rat.jpg"} />
                        </div>
                        <div className="text">
                            <h3 className="titre">
                                Remplaçant<br />
                                EMMANUEL RAT
                            </h3>
                            <p>
                                <em className="lineHeight">
                                    Marié, 3 enfants, artisan commerçant retraité, 
                                    Président de la Communauté de Communes Berry-Loire-Puisaye<br/>
                                    Maire de Chatillon sur Loire<br />
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
                            <a href="mailto:nadinemichel2021@gmail.com"><i className="fas fa-envelope"></i></a>
                            <a href="https://www.facebook.com/Nadine-Michel-2021-Canton-de-Gien-104454918499072/?ref=pages_you_manage" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>

                    <div className="programLink">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.36 13.14">
                            <g id="Calque_2" data-name="Calque 2">
                                <g id="Calque_1-2" data-name="Calque 1">
                                    <g id="link_close" data-name="link close">
                                        <g>
                                            <path className="cls-1" d="M24.94,6.57a1.49,1.49,0,0,1-1.61,1.31H10A1.48,1.48,0,0,1,8.42,6.57h0A1.49,1.49,0,0,1,10,5.26h13.3a1.49,1.49,0,0,1,1.61,1.31Z" />
                                            <g>
                                                <path className="cls-2" d="M33.36,6.57C33.36,3,31.21,0,28.56,0H21.49c-1.75,0-3.36,1.85-4.2,3.76.85,0,1.82-.12,2.83-.14.39-.27.9-1,1.37-1h7.07c1.59,0,2.89,1.77,2.89,4s-1.3,3.95-2.89,3.95H21.49c-.47,0-.83-.74-1.22-1-1,0-2-.1-2.82-.14.84,1.9,2.29,3.76,4,3.76h7.07C31.21,13.14,33.37,10.19,33.36,6.57Z" />
                                                <path className="cls-2" d="M11.88,10.52H4.81c-1.6,0-2.89-1.77-2.89-3.95S3.21,2.62,4.8,2.62h7.08c.48,0,1.28.82,1.67,1.1,1,0,2,.11,2.79.13C15.5,1.93,13.62,0,11.88,0H4.81C2.16,0,0,3,0,6.57s2.16,6.57,4.8,6.57h7.08c1.75,0,3.35-1.87,4.19-3.78-.77,0-1.75.1-2.79.12C12.88,9.77,12.36,10.52,11.88,10.52Z" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div className="column" style={{display : 'flex',flexDirection : 'column'}}>
                            <a href="https://fr.calameo.com/read/00116166400db4fedc153?authid=u78kbOS3fb0V" target="_blank"><span >
                                VOIR ET TÉLÉCHARGER NOTRE PROGRAMME <br />
                            </span></a>
                            <a href="https://fr.calameo.com/read/001161664a68e062d40c1?authid=OEsZjtcZNbeu" target="_blank"><span >
                                VOIR ET TÉLÉCHARGER NOTRE BILAN <br />
                            </span></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
