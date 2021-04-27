import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import triangle from '../asset/acceuil/traingle_titre.png'
import Map from '../Components/Map'
import '../scss/Home.scss'

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
                <div className="cantons">
                    <div className="titreCantons">
                        <img src={triangle}/>
                        <h3>pour nos 21 cantons</h3>
                    </div>
                    <div className="listeCantons">
                        <div>
                            <span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >1 . beaugency</span>
                            <span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >2 . châlette-sur-loing</span>
                            <span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >3 . châteauneuf-sur-loire</span>
                            <span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >4 . courtenay</span>
                            <span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >5 . la ferté-saint-aubin</span>
                            <span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >6 . fleury-les-aubrais</span>
                            <span className="cantonText" 
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >7 . gien</span>
                        </div>
                        <div>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >8 . lorris</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >9 . malesherbes</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >10 . meung-sur-loire</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >11 . montargis</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >12 . olivet</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >13 . orléans-1</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >14 . orléans-2</span>
                        </div>
                        <div>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >15 . orléans-3</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >16 . orléans-4</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >17 . pithiviers</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >18 . saint-jean-de-braye</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >19 . saint-jean-de-la-ruelle</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >20 . saint-jean-le-blanc</span>
                            <span className="cantonText"
                            onMouseOver={(e : any)=>{
                                this.setState({
                                    idCantonSelected : parseInt(e.target.innerHTML.split(' ')[0])
                                })
                                console.log(this.state.idCantonSelected)
                            }}
                            onMouseLeave={()=>this.setState({idCantonSelected : 0})}
                            >21 . sully-sur-loire</span>
                        </div>
                    </div>
                </div>
                <Map idSelected={this.state.idCantonSelected != 0 ? this.state.idCantonSelected : 0}/>
                <Footer/>
            </div>
        )
    }
}
