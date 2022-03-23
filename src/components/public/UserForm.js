import React, { useState, useEffect } from 'react'
import UserService from '../../services/UserService';
import { useUserForm } from './../../hooks/Custom.hooks';

export const UserForm = () => {

	const { form, setForm, handleChanges } = useUserForm();
	const [areEquals, setAreEquals] = useState(true);
	const [passConfirm, setPassConfirm] = useState();
	// const [state, setState] = useState(initialState);

	const handlePassConfirm = (e) => {
		setPassConfirm(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		UserService.register(form);
		console.log(form);
		console.log(e);
	}

	useEffect(() => {
		const { password } = form;
		setAreEquals(password === passConfirm)
	}, [passConfirm]);


	return (
		<div className="w-25 mx-auto mt-5">
			<h4 className="mb-3">Humano Registrate!</h4>

			<form className="needs-validation" noValidate>
				<div className="row g-3">

					<div className="col-12">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="you@example.com"
							name="email"
							onChange={handleChanges}
						/>
						
						<div className="invalid-feedback">
							Please enter a valid email address.
						</div>
					</div>

					<div className="col-12">
						<label htmlFor="address" className="form-label">
							Clave
						</label>
						<input
							type="password"
							className="form-control"
							id="address"
							placeholder="clave"
							name="password"
							onChange={handleChanges}
							required
						/>
						
						<div className="invalid-feedback">
							Please enter a valid email address.
						</div>
					</div>

					<div className="col-12">
						<label htmlFor="password2" className="form-label">
							Repetir Clave
						</label>
						<input
							type="password"
							className="form-control"
							id="password2"
							placeholder="clave"
							onChange={handlePassConfirm}
						/>

						{!areEquals && (
							<div className="form-text list-group-item-danger">
								Las claves no coinciden.
							</div>
						)}
					</div>

					<hr className="my-4" />

					<button
						disabled={!areEquals}
						className="w-100 btn btn-primary btn-lg"
						type="submit"
						onClick={handleSubmit}
					>
						Registrarme
					</button>
				</div>
			</form>
		</div>
	)
}
