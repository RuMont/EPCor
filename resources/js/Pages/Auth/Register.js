/* eslint-disable react/prop-types */
import { Head, usePage } from '@inertiajs/inertia-react';
import Logo from '../../Shared/Logo';
import { useForm } from "react-hook-form";
import TextInput from '../../Shared/TextInput';
import LoadingButton from '../../Shared/LoadingButton';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';


const Register = () => {

	const { register, handleSubmit, getValues, formState: { errors } } = useForm({
		defaultValues: {
			nombre: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	});

	const [confirmed, setConfirmed] = useState(0)

	const props = usePage().props;

	const validatePassword = () => {
		if (getValues('password') === getValues('confirmPassword')) {
			setConfirmed(2)
			return true;
		}
		setConfirmed(1)
		return false;
	}

	const sendSubmit = (data) => {
		if (validatePassword()) {
			Inertia.post('created', data);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
			<Head title={props.appName} />
			<div className="w-full max-w-md">
				<Logo
					className="block w-3/5 max-w-xs mx-auto"
					style={{
						width: "40%",
						height: "auto"
					}}
				/>
				<form onSubmit={handleSubmit(sendSubmit)}
					className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
				>
					<div className="px-10 py-12">
						<h1 className="text-3xl font-bold text-center">Registro</h1>
						<div className="w-24 mx-auto mt-6 border-b-2" />
						<TextInput
							className="mt-6 mb-2"
							label="Nombre"
							name="nombre"
							type="text"
							{...register("nombre", { required: true, minLength: 3, maxLength: 20 })}
						/>
						{errors.nombre && <span className="text-red-600">El nombre de usuario debe tener entre 3 y 20 caracteres</span>}

						<TextInput
							className="mt-6 mb-2"
							label="Dirección de correo electrónico"
							name="email"
							type="email"
							{...register("email", { required: true })}
						/>
						{errors.email && <span className="text-red-600">El correo electrónico es obligatorio</span>}

						<TextInput
							className="mt-6 mb-2"
							label="Contraseña"
							name="password"
							type="password"
							{...register("password", { required: true })}
						/>

						{errors.password && <span className="text-red-600">La contraseña es obligatoria</span>}

						<TextInput
							className="mt-6 mb-2"
							label="Confirme la contraseña"
							name="confirmPassword"
							type="password"
							{...register("confirmPassword", { required: getValues('password') })}
						/>
						{confirmed === 1 && <span className="text-red-600">Las contraseñas deben coincidir</span>}

						{props.errors && <span className="text-red-600">{Object.values(props.errors)[0]}</span>}

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