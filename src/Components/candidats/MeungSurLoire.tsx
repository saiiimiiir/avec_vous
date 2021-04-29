import React, { Component } from 'react'
import '../../scss/Candidat.scss'

export default class MeungSurLoire extends Component {
    render() {
        return (
            <div className="presentationCandidat">

                <div className="titulaire">

                    <div className="c1">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/meung-sur-loire/p_martin.jpg"} />
                        </div>
                        <div className="text">
                            <span className="titre">
                                titulaire<br/>
                                pauline martin
                            </span>
                        </div>
                    </div>

                    <div className="c2">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/meung-sur-loire/p_martin.jpg"} />
                        </div>
                        <div className="text">

                        </div>
                    </div>

                </div>

                <div className="supleant">

                    <div className="s1">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/meung-sur-loire/p_martin.jpg"} />
                        </div>
                        <div className="text">

                        </div>
                    </div>

                    <div className="s2">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/candidat_canton/meung-sur-loire/p_martin.jpg"} />
                        </div>
                        <div className="text">

                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}
