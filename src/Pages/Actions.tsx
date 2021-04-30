import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../scss/Actions.scss'

export default function Actions() {

    const [action, setAction] = useState("null")
    
    return (
        <div id="actions">
            <Header/>
            <div className="headerAction">
                <div>
                    <i className="fas fa-long-arrow-alt-right"></i> <span className="yellowText">nos principales actions</span>
                </div>
            </div>
            <div className="rubriques">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <i className="fas fa-caret-right"></i>
                            </td>
                            <td>
                                <span className="text">pour nos jeunes</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-caret-right"></i>
                            </td>
                            <td>
                                <span className="text">pour nos aînés</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-caret-right"></i>
                            </td>
                            <td>
                                <span className="text">pour les plus démunis</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-caret-right"></i>
                            </td>
                            <td>
                                <span className="text">pour l’environnement</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-caret-right"></i>
                            </td>
                            <td>
                                <span className="text">pour votre sécurité</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-caret-right"></i>
                            </td>
                            <td>
                                <span className="text">pour notre patrimoine</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-caret-right"></i>
                            </td>
                            <td>
                                <span className="text">pour toutes nos associations (sportives, culturelles, touristiques,...)</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fas fa-caret-right"></i>
                            </td>
                            <td>
                                <span className="text">pour nos moyens de communication</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="textAction">
                <span className="center">ECOUTE, PROXIMITE, CONFIANCE, SIMPLIFICATION ET EFFICACITE</span>
                <p>
                    <br/>
                    <br/>
                    <ul>
                        <span className="strong">dans le Loiret, c’est fait !</span>
                        <br/>
                        <li><span className="strong">sécurité routière</span> : zéro point noir routier </li>
                        <li><span className="strong">deux ponts restaurés</span>, deux déviations, une passerelle piétons vélos </li>
                        <li>construction de <span className="strong">trois collèges</span> </li>
                        <li><span className="strong">loiret bien vieillir</span> : 8 Ehpad réhabilités ou reconstruits, 9 en cours </li>
                        <li><span className="strong">une maison de l’autonomie</span> pour les personnes fragiles </li>
                        <li>généralisation du <span className="strong">déploiement du haut et très haut débit</span> </li>
                        <li><span className="strong">un soutien aux arts</span>, aux artistes et aux événements culturels </li>
                        <li><span className="strong">l’insertion</span> par l’emploi </li>
                        <li><span className="strong">une nouvelle politique d’aides</span>, plus simple et efficace, pour soutenir les projets des communes et intercommunalités (école, piscine, salle culturelle, …) </li>
                        <li><span className="strong">développement du sport-santé</span> pour toutes les générations par un soutien financier aux associations </li>
                        <li>création pour les communes d’un <span className="strong">portail de prévention et de gestion des risques majeurs</span> </li>
                        <li>lancement d’une <span className="strong">cop interne</span> pour définir une stratégie bas carbone…</li>
                    </ul>
                    <ul>
                        <span className="strong">COVID, engagés pour vous protéger !</span>
                        <br/>
                        <li>opération 1 masque pour chaque Loirétain</li>
                        <li>distribution de deux masques par collégien</li>
                        <li>soutien de la filière horticole et des petites entreprises</li>
                        <li>relance touristique</li>
                        <li>centre de vaccination itinérant</li>
                        <li>prêt d'ordinateur aux collégiens</li>
                    </ul>

                    <br/><br/>
                    <span className="strong">Et pour demain !</span>
                    <br/><br/>
                    
                    <ul>
                        <span className="strong">ACCÉLÉRONS NOTRE DÉMARCHE DE TRANSITION ENVIRONNEMENTALE</span>
                        <br/>
                        <li><span className="strong">réduire nos émissions de gaz à effet de serre</span> de 25% d’ici 2030 </li>
                        <li>développer de nouvelles énergies vertes et des <span className="strong">filières d’emplois « durables »</span> (hydrogène, bois, paille, …) </li>
                        <li>restaurer et préserver <span className="strong">la qualité des cours d’eau</span> </li>
                        <li>favoriser les circuits courts et développer la marque <span className="strong">« mangeons loiret »</span> dans les cantines et restaurants pour une alimentation de qualité et de proximité </li>
                        <li>accentuer notre <span className="strong">projet de vélos routes</span> touristiques et du quotidien, avec la création d’un véritable schéma départemental cyclable </li>
                        <li>valoriser les <span className="strong">parcs départementaux</span> en partenariat avec les acteurs de l’environnement </li>
                        <li>aménager encore plus d’<span className="strong">itinéraires de randonnées</span> </li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <span className="strong">DONNONS À NOS JEUNES UN AVENIR SEREIN</span>
                        <br/>
                        <li>poursuivre la rénovation et la construction de <span className="strong">nouveaux collèges</span> </li>
                        <li>soutenir à hauteur de 20 M€ <span className="strong">la création du campus madeleine</span> au Coeur d’Orléans afin de conforter son statut de ville Universitaire </li>
                        <li>redévelopper la <span className="strong">prévention spécialisée</span> sur les territoires </li>
                        <li>décliner les formations aux <span className="strong">premiers gestes</span> qui sauvent avec les sapeurs-pompiers </li>
                        <li>favoriser <span className="strong">les initiatives environnementales des collégiens</span> avec un budget participatif annuel </li>
                        <li>aider les jeunes à trouver des stages avec <span className="strong">« décroche ton stage »</span> …</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <span className="strong">RESPECTONS NOS AINES</span>
                        <br/>
                        <li>poursuivre les réhabilitations ou reconstructions des <span className="strong">ehpad</span> </li>
                        <li>privilégier le <span className="strong">maintien « à la maison »</span> chaque fois que c’est possible et soutenir les premières lignes comme les services d’aide à domicile </li>
                        <li>développer les petites <span className="strong">unités de vie et pensions de famille</span> </li>
                        <li><span className="strong">renforcer les liens avec nos ainés</span> (aides, attention, solidarité intergénérationnelle…) …</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <span className="strong">SOYONS FIERS D’ETRE SOLIDAIRES</span>
                        <br/>
                        <li><span className="strong">réorganiser l’action sociale</span> en territoire afin de faciliter le parcours de l’usager </li>
                        <li>améliorer l’aide sociale à l’enfance par des <span className="strong">recrutements d’agents spécialisés</span> </li>
                        <li>ouvrir <span className="strong">une seconde maison de l’enfance</span> et intensifier les places d’accueil sous forme de petites unités sur plusieurs communes </li>
                        <li>faire du <span className="strong">handicap une priorité</span> avec un éventail de réponses, de l’inclusion totale à la prise en charge collective </li>
                        <li>renforcer le partenariat avec la gendarmerie et la police nationale afin de faire face à la détresse des femmes victimes de violences </li>
                        <li><span className="strong">soutenir et motiver les bénéficiaires du rsa</span> avec l’aide des entreprises loirétaines </li>
                        <li>continuer à déployer des <span className="strong">ateliers chantiers d’insertion</span> </li>
                        <li>maintenir une politique volontariste dans les <span className="strong">programmes de logements</span> </li>
                        <li>accentuer le déploiement des <span className="strong">espaces services publics</span> en maillant le territoire </li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <span className="strong">DEFENDONS L’ACCES AUX SOINS POUR TOUS</span>
                        <br/>
                        <li>poursuivre les aides à l’installation de <span className="strong">personnels médicaux</span> </li>
                        <li>aider au déploiement de la <span className="strong">télé-médecine</span> </li>
                        <li>soutenir la mise en place d’un <span className="strong">centre médical itinérant</span> …</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <span className="strong">STRUCTURONS NOS MOYENS DE COMMUNICATION</span>
                        <br/>
                        <li>finaliser le déploiement total de la <span className="strong">fibre à l’abonné</span> pour 2023 </li>
                        <li><span className="strong">téléphonie mobile</span> : identifier les zones blanches et agir auprès des opérateurs pour une meilleure couverture </li>
                        <li>soutenir les communes et intercommunalités dans leurs <span className="strong">projets numériques</span> via l’agence loiret numérique …</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <span className="strong">SOUTENONS LES PROJETS SPORTIFS, CULTURELS ET ASSOCIATIFS</span>
                        <br/>
                        <li>donner les moyens au <span className="strong">monde associatif</span> de faire vivre nos territoires </li>
                        <li>accompagner le <span className="strong">mouvement sportif</span>, en valorisant le label « terres de jeux 2024 » </li>
                        <li>poursuivre nos efforts pour une vraie <span className="strong">politique culturelle locale</span> …</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <span className="strong">VALORISONS NOS CANTONS</span>
                        <br/>
                        <li>continuer à soutenir les communes et intercommunalités sur leurs projets d’investissements et au quotidien avec <span className="strong">cap loiret</span> </li>
                        <li>amplifier le soutien aux projets patrimoniaux bâtis ou naturels visant à <span className="strong">sauvegarder l’identité de notre territoire </span></li>
                        <li>accompagner les actions des intercommunalités dans leurs <span className="strong">projets de développement économique</span> </li>
                        <li>rester attentifs aux besoins des <span className="strong">entreprises et des agriculteurs</span> </li>
                        <li><span className="strong">valoriser les programmes touristiques</span> tels que la route de la rose ou loiret au fil de l’eau avec tourisme loiret </li>
                        <li><span className="strong">encourager l’animation touristique</span> locale …</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <span className="strong">AMENAGEONS NOS TERRITOIRES</span>
                        <br/>
                        <li><span className="strong">améliorer le cadre de vie des loirétains</span> grâce à des aménagements et infrastructures performants en participant à la relance de l’économie locale </li>
                        <li><span className="strong">maintenir un réseau routier départemental sécurisé</span>, de qualité et adapté </li>
                        <li><span className="strong">investir dans des revêtements routiers</span> acoustiques en préservant notre environnement </li>
                        <li><span className="strong">créer un nouvel axe structurant nord-sud</span> avec un franchissement de la Loire, à l’est de la Métropole </li>
                        <li><span className="strong">restaurer le canal d’orléans</span> dans ses différentes fonctions (gestion des eaux et développement touristique) …</li>
                    </ul>
                    <br/><br/>
                    <ul>
                        <span className="strong">ENCOURAGEONS NOS SAPEURS POMPIERS</span>
                        <br/>
                        <li><span className="strong">veiller à la qualité</span> de l’exercice de leur activité au service de la population </li>
                        <li><span className="strong">les soutenir dans leurs missions</span>, qu’ils soient professionnels ou volontaires ainsi que les personnels administratifs et techniques …</li>
                    </ul>
                    <br/><br/>
                </p>
            </div>
            <Footer/>
        </div>
    )
}
