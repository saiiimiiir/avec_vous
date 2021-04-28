import React, { Component } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import portrait from '../asset/role/marc-gaudet-president-du-conseil-departemental_3997950.png'
import '../scss/Roles.scss'

export default class Roles extends Component {
    render() {
        return (
            <div id="roles">
                <Header/>
                <div id="roles">
                    <div className="titreRole">
                        <i className="fas fa-long-arrow-alt-right"></i> <span className="yellowText">les rôles du conseil départemental</span>
                    </div>
                    <div className="textRole">
                        <p className="paragraphRole">
                            <div className="floatImage">
                                <img src={portrait} alt="" />
                                <span className="desc">
                                    <i><strong>marc gaudet</strong>, président du<br />
                                        conseil départemental du loiret</i>
                                </span>
                            </div>
                            bienvenue sur <br /><br />
                            dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
                            <br /><br /><br />
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                            <br /><br /><br />
                            1. voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                            <br /><br /><br />
                            2. voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                            <br /><br /><br />
                            3. voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                            <br /><br /><br />
                            4. voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
