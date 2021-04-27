import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import triangle from '../asset/acceuil/traingle_titre.png'
import Map from '../Components/Map'
import '../scss/Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Header/>
                <div className="cantons">
                    <div className="titreCantons">
                        <img src={triangle}/>
                        <h3>pour nos 21 cantons</h3>
                    </div>
                    <div className="listeCantons">
                        <div>
                            <span className="cantonText">1 . beaugency</span>
                            <span className="cantonText">2 . châlette-sur-loing</span>
                            <span className="cantonText">3 . châteauneuf-sur-loire</span>
                            <span className="cantonText">4 . courtenay</span>
                            <span className="cantonText">5 . la ferté-saint-aubin</span>
                            <span className="cantonText">6 . fleury-les-aubrais</span>
                            <span className="cantonText">7 . gien</span>
                        </div>
                        <div>
                            <span className="cantonText">8 . lorris</span>
                            <span className="cantonText">9 . malesherbes</span>
                            <span className="cantonText">10 . meung-sur-loire</span>
                            <span className="cantonText">11 . montargis</span>
                            <span className="cantonText">12 . olivet</span>
                            <span className="cantonText">13 . orléans-1</span>
                            <span className="cantonText">14 . orléans-2</span>
                        </div>
                        <div>
                            <span className="cantonText">15 . orléans-3</span>
                            <span className="cantonText">16 . orléans-4</span>
                            <span className="cantonText">17 . pithiviers</span>
                            <span className="cantonText">18 . saint-jean-de-braye</span>
                            <span className="cantonText">19 . saint-jean-de-la-ruelle</span>
                            <span className="cantonText">20 . saint-jean-le-blanc</span>
                            <span className="cantonText">21 . sully-sur-loire</span>
                        </div>
                    </div>
                </div>
                <Map idSelected={2}/>
                <Footer/>
            </div>
        )
    }
}
