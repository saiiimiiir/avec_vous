import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import triangle from '../asset/acceuil/traingle_titre.png'
import Map from '../Components/Map'
import '../scss/Home.scss'
import baniere from '../asset/acceuil/Loiretavecvous.jpg'

interface HomeState{
    idCantonSelected : number,
}
export default class Home extends Component<{},HomeState> {
    constructor(props : {}){
        super(props)
        this.state={
            idCantonSelected : 0
        }
    }
    render() {
        return (
            <div id="home">
                <Header/>
                <div className="baniere">
                    <img src={baniere} alt="photo loiret avec vous" />
                </div>
                <div className="cantons">
                    <div className="titreCantons">
                        <img src={triangle}/>
                        <h3>pour nos <span className="strong">21</span> cantons</h3>
                    </div>
                    <div className="listeCantons">
                        <div>
                            <a href="/pour-le-canton/Beaugency"><span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >1 . Beaugency</span></a>
                            <a href="/pour-le-canton/chalette-sur-loing"><span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >2 . Châlette-sur-loing</span></a>
                            <a href="/pour-le-canton/chateauneuf-sur-loire"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >3 . Châteauneuf-sur-loire</span></a>
                            <a href="/pour-le-canton/courtenay"><span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >4 . Courtenay</span></a>
                            <a href="/pour-le-canton/la-ferte-saint-aubin"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >5 . La ferté-saint-aubin</span></a>
                            <a href="/pour-le-canton/fleury-les-aubrais"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >6 . Fleury-les-aubrais</span></a>
                            <a href="/pour-le-canton/gien"><span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >7 . Gien</span></a>
                        </div>
                        <div>
                            <a href="/pour-le-canton/lorris"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >8 . Lorris</span></a>
                            <a href="/pour-le-canton/malesherbes"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >9 . Malesherbes</span></a>
                            <a href="/pour-le-canton/meung-sur-loire"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >10 . Meung-sur-loire</span></a>
                            <a href="/pour-le-canton/montargis"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >11 . Montargis</span></a>
                            <a href="/pour-le-canton/olivet"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >12 . Olivet</span></a>
                            <a href="/pour-le-canton/orleans-1"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >13 . Orléans-1</span></a>
                            <a href="/pour-le-canton/orleans-2"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >14 . Orléans-2</span></a>
                        </div>
                        <div>
                            <a href="/pour-le-canton/orleans-3"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >15 . Orléans-3</span></a>
                            <a href="/pour-le-canton/orleans-4"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >16 . Orléans-4</span></a>
                            <a href="/pour-le-canton/pithiviers"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >17 . Pithiviers</span></a>
                            <a ><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >18 . Saint-jean-de-braye</span></a>
                            <a href="/pour-le-canton/saint-jean-de-la-ruelle"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >19 . Saint-jean-de-la-ruelle</span></a>
                            <a href="/pour-le-canton/saint-jean-le-blanc"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >20 . Saint-jean-le-blanc</span></a>
                            <a href="/pour-le-canton/sully-sur-loire"><span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >21 . Sully-sur-loire</span></a>
                        </div>
                    </div>
                </div>
                <div className="infoMap ">
                    <span className="whiteText">
                        cliquez sur <span className="bluetext">votre canton</span> pour tout savoir de vos prétendants officiels et de leur programme.
                    </span>
                </div>
                <Map idSelected={this.state.idCantonSelected != 0 ? this.state.idCantonSelected : 0}/>
                <Footer/>
            </div>
        )
    }
}
