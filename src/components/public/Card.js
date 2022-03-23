import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ mascota }) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                {/*             
                // MODELO VIEJO
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%" height="225"
                    xmlns="http://www.w3.org/2000/svg" role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice" focusable="false"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                */}

                <img width="100%" src={mascota.image} alt="imagen" />

                <div className="card-body">

                    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
                        <strong className='d-inline-block mb-2 text-success'> {mascota.species} </strong>
                        <div className="text-end"><strong>Status: </strong><strong className='d-inline-block mb-2 text-info'> {mascota.status} </strong></div>
                    </header>

                    <h3 className=" align-items-center mb-0 text-dark mb-3"> {mascota.name} </h3>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                            <Link to={`/details/${mascota.id}`} className="">Detalle</Link>
                        </button>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}