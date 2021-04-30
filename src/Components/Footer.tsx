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
                    <a href="mailto:test@loiretavecvous.fr">
                        <i className="fas fa-envelope"></i> <span className="bluetext">Nous contacter</span>
                    </a>
                </div>
                <div className="mention">
                    <Link to="/mention">
                        <span className="bluetext">mentions légales</span>
                    </Link>
                </div>
                <div className="socialIcon">
                    <a target="_blank" href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a target="_blank" href="twitter.com"><i className="fab fa-twitter"></i></a>
                    <a target="_blank" href="instagram.com"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        )
    }
}
