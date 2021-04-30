import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../scss/Actions.scss'

export default function Actions() {
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
            <Footer/>
        </div>
    )
}
