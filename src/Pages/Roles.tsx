import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import portrait from '../asset/mgaudet.jpeg'
import '../scss/Roles.scss'

export default class Roles extends Component {
    render() {
        return (
            <div id="roles">
                <Header/>
                <div id="roles">
                    <div className="titreRole">
                        <i className="fas fa-long-arrow-alt-right"></i> <span className="yellowText">les rôles du conseil départemental</span>
                    </div>
                    <div className="textRole">
                        <p className="paragraphRole">
                            <div className="floatImage">
                                <img src={portrait} alt="" />
                                <span className="desc">
                                    <i><strong>marc gaudet</strong>,<br /><span>président du
                                        conseil départemental du loiret</span></i>
                                </span>
                            </div>
                            <span className="strong">« Avec l’ensemble de l’équipe des candidats de la Majorité départementale, nous sommes fiers des six années écoulées et du bilan obtenu. Ce que nous avions dit, nous l’avons fait ! »</span>
                            <br /><br />
                            Les rôles et prérogatives du Conseil départemental sont « au coeur de votre vie quotidienne » :
                            <br />
                            <ul>
                                <li className="listeRole"><span className="strong">L’action sociale</span> en faveur des personnes âgées, des personnes handicapées, de l’enfance, de la famille et des personnes en difficulté :</li>
                                <li className="listeRole"><span className="strong">L’insertion</span> par la gestion du RSA ;</li>
                                <li className="listeRole"><span className="strong">La voirie</span> : entretien et construction des routes départementales ;</li>
                                <li className="listeRole">La lutte contre la <span className="strong">désertification médicale</span> ;</li>
                                <li className="listeRole"><span className="strong">L’éducation</span> : La construction, l’entretien et le fonctionnement des collèges publics, la restauration et l’aide à la cantine, l’équipement informatique ;</li>
                                <li className="listeRole"><span className="strong">Les pompiers</span> : Le financement du service départemental d’incendie et de secours ;</li>
                                <li className="listeRole">La protection de <span className="strong">l’environnement</span> ;</li>
                                <li className="listeRole"><span className="strong">L’aide aux associations</span> culturelles, sportives, et sociales ;</li>
                                <li className="listeRole"><span className="strong">Le tourisme</span> : la Loire à vélo, les châteaux, l’aide aux professionnels ;</li>
                                <li className="listeRole"><span className="strong">Le soutien</span> aux communes ;</li>
                                <li className="listeRole">Le déploiement de <span className="strong">l’internet haut débit</span> ;</li>
                                <li className="listeRole">Le financement de <span className="strong">projets agricoles</span> …</li>
                            </ul>
                            <ul>
                                <br />
                                <span className="strong">Notre département c’est :</span>
                                <br />
                                <li><span className="strong">682 845</span> habitants (2020)</li>
                                <li><span className="strong">21</span> cantons</li>
                                <li><span className="strong">42</span> conseillers départementaux</li>
                                <li><span className="strong">731,8</span> millions d’€ de budget annuel (2021)</li>
                                <li><span className="strong">166,8</span> millions d’€ d’investissement pour 2021</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
