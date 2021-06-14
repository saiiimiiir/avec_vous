import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../scss/Mentions.scss'

export default class Mentions extends Component {
    render() {
        return (
            <div id="mention">
                <Header/>
                <div className="titreMention">
                    <i className="fas fa-long-arrow-alt-right"></i> <span className="yellowText">MENTIONS légales</span>
                </div>
                <div className="containerMention">
                    <p>
                        <span className="yellowText">1. Editeur</span> <br /><br />
                        Vous êtes actuellement connecté sur le site : loiretavecvous.fr, propriété de la liste de la Majorité départementale du Loiret
                        Responsable de la publication : Madame Pauline Martin <br /><br />
                        ________________________________________ <br /><br />
                        <span className="yellowText">2. Développements, crédits et hébergement</span> <br /><br />
                        Design : © <a href="#">La Fabrique de Marc</a> <br />
                        Développements : © <a href="http://editions-lebakh.fr" target="_blank">Éditions Lebakh, Oriflam Medias - 45160 Olivet</a> <br />
                        Crédits photographiques : © Ludovic Letot (pour les communes de Beaugency, Châteauneuf-sur-Loire, Fleury-les-Aubrais, Gien, La Ferté-saint-Aubin, Olivet, Orléans 1-2-3-4, Saint-jean-le-Blanc et Sully-sur-Loire)
                        Hébergement des solutions : OVH <br />
                        ________________________________________ <br /><br />
                        <span className="yellowText">3. Droits d’Auteurs et copyright du site</span> <br /><br />
                        Ce site édité et développé par la liste de la Majorité départementale du Loiret relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle et commerciale. Tous les droits de reproduction sont réservés par y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. Toute reproduction est formellement interdite sauf autorisation expresse et écrite de Madame Pauline Martin. <br />
                        ________________________________________ <br /><br />
                        <span className="yellowText">4. Contacts</span> <br /><br />
                        Vous souhaitez nous poser une question sur le contenu de ce site : contact@loiretavecvous.fr <br />
                        ________________________________________ <br /><br />
                        <span className="yellowText">5. Charte de protection des données personnelles</span> <br /><br />
                        Conformément au règlement européen 2016/679 du 27 avril 2016 (dit « règlement général sur la protection des données » ou RGPD).
                        La présente charte de protection des données à caractère personnel décrit l’engagement du site loiretavecvous.fr , édité par la liste de la Majorité départementale du Loiret en tant que responsable de traitement eu égard au respect de la vie privée et à la protection des données à caractère personnel de ses utilisateurs. Cette charte a été rédigée pour vous permettre de prendre connaissance des pratiques et des conditions dans lesquelles le site loiretavecvous.fr recueille, utilise et conserve vos données à caractère personnel.
                        La présente Charte s’applique pour les Données collectées : <br />
                        • Via la simple navigation sur le site loiretavecvous.fr. <br />
                        • Via les mails échangés entre le site loiretavecvous.fr et vous ou tout autre outil de messagerie électronique. <br />
                        <br /><br />QUI TRAITE VOS DONNÉES ?<br /><br />
                        Vos Données sont traitées par les collaborateurs ou certains colistiers du site loiretavecvous.fr en charge de la gestion du site afin de pouvoir répondre à toutes vos questions.
                        Par ailleurs, dans le cadre de notre activité, et pour des besoins de traitement, vos Données sont susceptibles d’être communiquées à des sous-traitants, prestataires de services ou autre tierces parties, et en particulier : Google Analytics.
                        Chacun de ses acteurs respectant un engagement de confidentialité concernant l’usage et le traitement des données personnelles.
                        Droit d’information (article 32 de la loi du 6 janvier 1978 modifiée par la loi du 6 août 2004) : le responsable des traitements mis en œuvre est Madame Pauline Martin.
                        Droit d’opposition (article 38 de la loi du 6 janvier 1978 modifiée par la loi du 6 août 2004) : vous avez la possibilité de vous opposer pour des motifs légitimes à figurer dans un fichier. Toute personne peut refuser, sans avoir à se justifier, que les données qui la concernent soient utilisées à des fins de prospection, en particulier commerciale.
                        Droit d’accès (articles 39, 41, 42 de la loi du 6 janvier 1978 modifiée par la loi du 6 août 2004) : toute personne justifiant de son identité a le droit d’interroger le responsable d’un fichier ou d’un traitement pour savoir s’il détient des informations sur elle, et le cas échéant d’en obtenir communication.
                        Droit de rectification (article 40 de la loi du 6 janvier 1978 modifiée par la loi du 6 août 2004) : vous pouvez faire rectifier, compléter, actualiser, verrouiller ou effacer des informations vous concernant. Dans tous les cas, l’exercice de ce droit s’effectue, conformément à la loi Informatique et Libertés, en s’adressant à : contact@loiretavecvous.fr
                        Pour toute information sur la protection des données personnelles, vous pouvez consulter le site de la Commission Informatique et Libertés : www.cnil.fr

                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}
