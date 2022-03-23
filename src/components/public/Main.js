// rce + tab (react class export component)

import React, { Component } from 'react'
import RaMService from '../../services/RaM.service';
import { Cards } from './Cards';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { mascotas: [] };

        console.log("1-Hola desde el constructor");
    };

    componentDidMount() {

        // LINEAS 19,20,21,47 anuladas, para que el componente "cards" tome directamente la información de la API con el hook "useEffect"
        // RaMService.getAllCharacters()
        //     .then((data) => this.setState({ mascotas: data.results }))
        //     .catch((error) => console.log(error))

        console.log("3-Hola desde el componenDidMount");
    };

    render() {
        console.log("2-Hola desde el render");
        return (
            <div>
                <main>

                    {/* CONTAINER PRINCIPAL */}
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Album example</h1>
                                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                                <p>
                                    <a href="/" className="btn btn-primary my-2">Main call to action</a>
                                    <a href="/" className="btn btn-secondary my-2">Secondary action</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <Cards />
                    {/* <Cards mascotas={this.state.mascotas} /> */}

                </main>
            </div>
        )
    }
}

