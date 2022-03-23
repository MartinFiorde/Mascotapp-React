import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RaMService from "../../services/RaM.service";

export const Detail = () => {

	const [mascota, setMascota] = useState({});

	// "id" coincide con ":id" contenido en la linea 21 de "App.js":          <Route path={"/details/:id"} element={<Detail/>} />
	// el hook "useEffect" de linea 15 se alimenta directamente de este valor cuando ejecuta su linea 18 buscando un "id" localmente
	const { id } = useParams();

	const { pathname } = useLocation();

	useEffect(() => {
		console.log(pathname);
		// si quitaramos el segundo argumento de la linea 25, el hook se ejecutaría constantemente buscando actualizar el valor de "id" en linea 17
		RaMService.getCharacterById(id)
		.then((data)=> setMascota(data))
		console.log(mascota)

		// pasandole un array vacio "[]" se define que el hook "useEffect" solo se ejecute al montar un cambio de página
		// si le pasamos "[id]", el hook se ejecuta cada vez que detecte que el valor de "id" cambió
		// si ignoramos escribir completamente el segundo argumento ", []" para el hook, se ejecutará constantemente aplicando cambios, existan o no (gran consumo de memoria)
	}, [])

	
	// const urlDashboard = "/dashboard";
	// const urlMain = "/";

	// const redirectUrl = pathname.includes("dashboard") ? urlDashboard : urlMain;

		return (
		<div className="row m-3">
			<div className="col-md-12">
				<div className="card flex-md-row mb-4 box-shadow h-md-250">
					<div className="card-body d-flex flex-column align-items-start">
						<strong className="d-inline-block mb-2 text-success">
							{mascota.species}
						</strong>
						<h3 className="mb-0 text-dark">{mascota.name}</h3>
						<div className="mb-1 text-muted">
							{new Date(mascota.created).toLocaleDateString()}
						</div>
						<div className="mb-1 text-muted"></div>
						<p className="card-text mb-auto">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This is a wider card with
							supporting text below as a natural lead-in to additional content.
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This is a wider card with
							supporting text below as a natural lead-in to additional content.
						</p>
						<ul className="list-group mt-1">
							<li className="list-group-item">Cras justo odio</li>
							<li className="list-group-item">Dapibus ac facilisis in</li>
							<li className="list-group-item">Morbi leo risus</li>
							<li className="list-group-item">Porta ac consectetur ac</li>
							<li className="list-group-item">Vestibulum at eros</li>
						</ul>

						<Link to={"/"} className="mt-3 btn btn-primary btn-lg">
							Volver
						</Link>
					</div>

					<img
						className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
						height="auto"
						src={mascota.image}
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}