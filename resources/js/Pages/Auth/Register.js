import { Head, usePage } from '@inertiajs/inertia-react';
import React from 'react';
import LoadingButton from '../../Shared/LoadingButton';
import Logo from '../../Shared/Logo';
import TextInput from '../../Shared/TextInput';

const Register = () => {
	const { appName } = usePage().props

	return (
		<div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
			<Head title={appName} />
			<div className="w-full max-w-md">
				<Logo
					className="block w-3/5 max-w-xs mx-auto"
					style={{
						width: "40%",
						height: "auto"
					}}
				/>
				<form
					className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
				>
					<div className="px-10 py-12">
						<h1 className="text-3xl font-bold text-center">Registro</h1>
						<div className="w-24 mx-auto mt-6 border-b-2" />
						<TextInput
							className="mt-10"
							label="Dirección de correo electrónico"
							name="email"
							type="email"
						/>
						<TextInput
							className="mt-6"
							label="Nombre"
							name="nombre"
							type="nombre"
						/>
						<TextInput
							className="mt-6"
							label="Contraseña"
							name="password"
							type="password"
						/>
						<div className="mt-8 flex justify-center">
							<LoadingButton
								type="submit"
								className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500"
							>
								Registrarse
							</LoadingButton>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};


export default Register