import React, { Component } from 'react'
import { useParams } from 'react-router'
import triangle from '../asset/acceuil/traingle_titre.png'
import MeungSurLoire from '../Components/candidats/MeungSurLoire'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../scss/Canton.scss'


const Canton = () => {
    var params = useParams()
    var canton = (params as any).canton;
    console.log(canton)
    return (
        <>
            <div id="canton">
                <Header></Header>
                <div className="titreCanton">
                    <img src={triangle} />
                    <h3>pour le canton de {canton == "la-ferte-saint-aubin" ? "la ferte-saint-aubin" : canton}</h3>
                </div>
                <div className="carteCanton">
                    <img src={process.env.PUBLIC_URL + '/carte_canton/' + canton + '.jpg'} alt={"carte " + canton} />
                </div>
                <div className="candidats">

                </div>
                <MeungSurLoire/>
                
                <div className="dons">
                    <div className="titreDons">
                        <i className="fas fa-users"></i>
                        <span className="yellowText">vous aussi, soutenez-nous !</span>
                    </div>
                    <p>
                        le mandataire financier est seul habilité à recueillir des dons en faveur de la campagne<br />
                        de pauline partin et thierrybracquemond, dans les limites précisées à l'article L52-8<br />
                        du code électoral.<br />
                        vous pouvez nous transmettre vos dons par chèque bancaire libellé à l'ordre de :<br />
                        <span className="bluetext">[....] - 2 rue des rordeliers - 45130 - meung-sur-Loire.</span><br />
                        par avance nous remercions nos généreux donateurs. ces dons étant déductibles de vos impôts,<br />
                        nous vous adresserons en retour un reçu fiscal.<br />
                    </p>
                </div>
            </div>
            <div className="constrain">
                <Footer />
            </div>
        </>
    );
}

export default Canton;
