import React, { Component } from 'react'
import triangle from '../asset/acceuil/traingle_titre.png'
import Header from '../Components/Header'
import '../scss/Canton.scss'

interface CantonProps {
    canton : string;
}

export default class Canton extends Component {
    render() {
        var canton ="Beaugency";

        return (
            <div id="canton">
                <Header></Header>
                <div className="titreCanton">
                    <img src={triangle} />
                    <h3>pour le canton de {canton}</h3>
                </div>
                <div className="carteCanton">
                    <img src={process.env.PUBLIC_URL + '/carte_canton/'+canton+'.jpg'} alt={"carte "+canton}/>
                </div>
                <div className="candidats">

                </div>
                <div className="contact">
                    <div className="contactIcon">
                        <span>
                            NOUS CONTACTER
                        </span>
                        <div className="socialIcon">
                            <a href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="instagram.com"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
