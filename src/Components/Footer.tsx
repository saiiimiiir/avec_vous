import React, { Component } from 'react'
import '../scss/Footer.scss'
import logoLong from '../asset/logo_long.png'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="logoFooter">
                    <img src={logoLong} alt="" />
                    <span className="bluetext">© 2021 majorité départementale loiret avec vous</span>
                </div>
                <div className="contact">
                    <i className="fas fa-envelope"></i> <span className="bluetext">Nous contacter</span>
                </div>
                <div className="mention">
                    <span className="bluetext">mentions légales</span>
                </div>
            </div>
        )
    }
}
