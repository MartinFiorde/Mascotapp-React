
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
	return (
		<header className="p-3 bg-dark text-white">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

					<Link to={"/"} className="nav-link px-2 text-white">
						<span className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
							<img className="App-logo" height="42" src="dog.png" alt="" />
						</span>
					</Link>

					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li><Link to={"/user-form"} className="nav-link px-2 text-white">Formulario</Link></li>
						{/* 
						// BLOQUEADOS TEMPORALMENTE
						<li><a href="/" className="nav-link px-2 text-white">Pricing</a></li>
						<li><a href="/" className="nav-link px-2 text-white">FAQs</a></li>
						<li><a href="/" className="nav-link px-2 text-white">About</a></li> */}
					</ul>

					<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
						<input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
					</form>

					<div className="text-end">
						<button type="button" className="btn btn-outline-light me-2"><Link to={"/user-form"} className="nav-link px-2 text-white">Login</Link></button>
						<button type="button" className="btn btn-warning">Sign-up</button>
					</div>
				</div>
			</div>
		</header>
	)
}