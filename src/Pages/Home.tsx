import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import triangle from '../asset/acceuil/traingle_titre.png'
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
                            <span className="bluetext">1 . beaugency</span>
                            <span className="bluetext">2 . châlette-sur-loing</span>
                            <span className="bluetext">3 . châteauneuf-sur-loire</span>
                            <span className="bluetext">4 . courtenay</span>
                            <span className="bluetext">5 . la ferté-saint-aubin</span>
                            <span className="bluetext">6 . fleury-les-aubrais</span>
                            <span className="bluetext">7 . gien</span>
                        </div>
                        <div>
                            <span className="bluetext">8 . lorris</span>
                            <span className="bluetext">9 . malesherbes</span>
                            <span className="bluetext">10 . meung-sur-loire</span>
                            <span className="bluetext">11 . montargis</span>
                            <span className="bluetext">12 . olivet</span>
                            <span className="bluetext">13 . orléans-1</span>
                            <span className="bluetext">14 . orléans-2</span>
                        </div>
                        <div>
                            <span className="bluetext">15 . orléans-3</span>
                            <span className="bluetext">16 . orléans-4</span>
                            <span className="bluetext">17 . pithiviers</span>
                            <span className="bluetext">18 . saint-jean-de-braye</span>
                            <span className="bluetext">19 . saint-jean-de-la-ruelle</span>
                            <span className="bluetext">20 . saint-jean-le-blanc</span>
                            <span className="bluetext">21 . sully-sur-loire</span>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
