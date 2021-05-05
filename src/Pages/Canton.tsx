import React, { Component, useRef, useState } from 'react'
import { useParams } from 'react-router'
import triangle from '../asset/acceuil/traingle_titre.png'
import MeungSurLoire from '../Components/candidats/MeungSurLoire'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../scss/Canton.scss'


const Canton = () => {
    var params = useParams()
    var canton : string = (params as any).canton;
    var ficheCandidat;
    const [zoom, setzoom] = useState(false)

    // AFICHAGE DE LA FICHE CANDIDAT EN FONCTION DU CANTON

    if(canton == "chalette-sur-loing"){
        ficheCandidat = null
    }
    if(canton == "courtenay"){
        ficheCandidat = null
    }
    if(canton == "montargis"){
        ficheCandidat = null
    }
    if(canton == "gien"){
        ficheCandidat = null
    }
    if(canton == "malesherbes"){
        ficheCandidat = null
    }
    if(canton == "fleury-les-aubrais"){
        ficheCandidat = null
    }
    if(canton == "orleans-4"){
        ficheCandidat = null
    }
    if(canton == "orleans-3"){
        ficheCandidat = null
    }
    if(canton == "orleans-1"){
        ficheCandidat = null
    }
    if(canton == "orleans-2"){
        ficheCandidat = null
    }
    if(canton == "saint-jean-de-la-ruelle"){
        ficheCandidat = null
    }
    if(canton == "oliet"){
        ficheCandidat = null
    }
    if(canton == "meung-sur-loire"){
        ficheCandidat = <MeungSurLoire />
    }
    if(canton == "beaugency"){
        ficheCandidat = null
    }
    if(canton == "lorris"){
        ficheCandidat = null
    }
    if(canton == "saint-jean-de-braye"){
        ficheCandidat = null
    }
    if(canton == "chateauneuf-sur-loire"){
        ficheCandidat = null
    }
    if(canton == "saint-jean-le-blanc"){
        ficheCandidat = null
    }
    if(canton == "sully-sur-loire"){
        ficheCandidat = null
    }
    if(canton == "la-ferte-saint-aubin"){
        ficheCandidat = null
    }
    if(canton == "pithiviers"){
        ficheCandidat = null
    }
    console.log(canton)
    return (
        <>
            <div id="canton">
                <Header/>
                <div className="titreCanton">
                    <img src={triangle} />
                    <h3>pour le canton de {canton == "la-ferte-saint-aubin" ? "la ferte-saint-aubin" : canton}</h3>
                </div>
                <div className="carteCanton">
                    <img src={process.env.PUBLIC_URL + '/carte_canton/' + canton + '.jpg'} alt={"carte " + canton} />
                    <div className="iconeMap">
                        <i className={zoom == false ? "fas fa-search-plus" : "fas fa-search-minus"} onClick={()=>{
                            if(zoom == false){
                                (document.querySelector('.carteCanton img') as any).style.width = "70%";
                                setzoom(true);
                            } else {
                                (document.querySelector('.carteCanton img') as any).style.width = "40%";
                                setzoom(false);
                            }
                            console.log((document.querySelector('.carteCanton img') as any))
                        }} ></i>
                        <a href={(canton as any).indexOf("orleans") != -1 ? "https://www.google.fr/maps/place/Orléans" : "https://www.google.fr/maps/place/"+canton} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-map-marker-alt"></i>
                        </a>
                    </div>
                </div>
                <div className="candidats">

                </div>

                {ficheCandidat}
    
                <div className="dons">
                    <div className="titreDons">
                        <i className="fas fa-users" ></i>
                        <span className="yellowText">vous aussi, soutenez-nous !</span>
                    </div>
                    <p>
                        le mandataire financier est seul habilité à recueillir des dons en faveur de la campagne 
                        de pauline partin et thierrybracquemond, dans les limites précisées à l'article L52-8
                        du code électoral.<br /><br/>
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
