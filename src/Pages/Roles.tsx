import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../scss/Roles.scss'

export default class Roles extends Component {
    render() {
        return (
            <div id="roles">
                <Header/>
                <div id="roles">
                    <div className="titreRole">
                        <i className="fas fa-long-arrow-alt-right"></i> <span className="yellowText">LES ROLES DU CONSEIL DÉPARTEMENTAL</span>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
