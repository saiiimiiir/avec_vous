import React, { Component } from 'react'
import '../scss/Footer.scss'
import logoLong from '../asset/logo_long.png'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="logoFooter">
                    <img src={logoLong} alt="" />
                    <span className="bluetext">© 2021 <span className="lightWeight">majorité départementale<br />loiret avec vous</span></span>
                </div>
                <div className="contact">
                    <a href="mailto:contact@loiretavecvous.fr">
                        <i className="fas fa-envelope"></i> <span className="bluetext">Nous contacter</span>
                    </a>
                </div>
                <div className="mention">
                    <Link to="/mentions">
                        <span className="bluetext">mentions légales</span>
                    </Link>
                </div>
                
            </div>
        )
    }
}
