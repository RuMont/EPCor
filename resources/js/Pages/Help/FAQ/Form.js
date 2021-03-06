import React from 'react'
import emailjs from '@emailjs/browser';
import { usePage } from '@inertiajs/inertia-react';

const sendEmail = (event) => {
	event.preventDefault();

	emailjs.sendForm('service_ui7ni1e', 'template_qvx5cr7', event.target, 'UGM7bNwu4ewhvkahc')
		.then((result) => {
			console.log(result);
		}, (error) => {
			console.log(error.text);
		});
};

const Form = () => {
	const {user} = usePage().props;

	return (
		<form onSubmit={sendEmail}>
			<div
				className="container flex flex-col items-center justify-between px-6 py-6 mx-auto space-y-12 md:py-0 md:flex-row md:space-y-0">
				<div className="max-w-2xl py-2 px-5 w-full mt-4">

					<div className="text-3xl mb-6 text-center ">
						<h1 className="text-4xl font-bold text-center">Contacto</h1>
					</div>

					<div className="grid grid-cols-2 gap-4 max-w-xl m-auto">

						<div className="col-span-2 lg:col-span-1">
							<input defaultValue={user && user.nombre} type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Nombre" />
						</div>

						<div className="col-span-2 lg:col-span-1">
							<input defaultValue={user && user.email} type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Correo electrónico" />
						</div>

						<div className="col-span-2">
							<textarea cols="30" rows="8" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Mensaje"></textarea>
						</div>

						<div className="col-span-2 text-right">
							<button className="py-3 px-6 bg-indigo-700 text-white rounded-full font-bold w-full sm:w-32 hover:bg-indigo-500">
								Enviar
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default Form;