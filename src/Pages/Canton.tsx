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
            </div>
        )
    }
}
