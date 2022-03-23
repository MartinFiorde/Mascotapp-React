// rafc + tab (react functional component)

import React, { useState } from 'react'

export const Footer = () => {

    // "useState" es el hock que vamos a usar sobre un "functional component"
    const [clicksPerritos, setClicksPerritos] = useState(0);

    const year = new Date().getFullYear();
    const companyName = "EGG Education";

    // "handle" es una palabra clave de buenas practicas de react, cuando una funcion esta escuchando a la pagina, a la espera
    // de que ocurra el evento especifico. En este caso, espera un "click".
    const handleClick = () => {
        setClicksPerritos(clicksPerritos + 1);
    };

    return (
        <div className="container absolute-bottom">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">
                    &copy; {year} {companyName} Clicks= {clicksPerritos}
                </p>

                <span
                    to="/"
                    className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'
                    // onClick, onChange, onLoad son algunos eventos llamables por React.
                    onClick={handleClick}
                >
                    <img
                        className="App-logo"
                        height="52"
                        src="dog.png"
                        alt="perro-giratorio"
                    />
                </span>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </div>
    )
}

/*

 <div className="container absolute-bottom">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

                <span
                    to="/"
                    className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
                    <img
                        className="App-logo"
                        height="52"
                        src="dog.png"
                        alt="perro-giratorio"
                    />
                </span>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </div>

*/