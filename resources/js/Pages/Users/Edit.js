import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage, useForm } from '@inertiajs/inertia-react';
import Layout from '../../Shared/Layout';
import DeleteButton from '../../Shared/DeleteButton';
import LoadingButton from '../../Shared/LoadingButton';
import TextInput from '../../Shared/TextInput';
import TrashedMessage from '../../Shared/TrashedMessage';
import { capitalizeFirstLetter } from '../../utils';

const Edit = () => {
	const { user, selectedUser } = usePage().props;

	const { data, setData } = useForm({
		nombre: selectedUser.nombre || '',
		email: selectedUser.email || '',
		password: selectedUser.password || '',
	});

	function handleSubmit(e) {
		e.preventDefault();
		Inertia.post('/users/' + selectedUser.id + '/update', data);
	}

	function destroy() {
		if (confirm('¿Estás seguro de querer eliminar este usuario?')) {
			Inertia.post('/users/' + selectedUser.id + '/destroy');
		}
	}

	function restore() {
		if (confirm('¿Quieres restaurar este usuario?')) {
			Inertia.post('/users/' + selectedUser.id + '/restore');
		}
	}

	if (user.external_auth) {
		return (
			<div>
				<div className="flex justify-start max-w-lg mb-8">
					<h1 className="text-3xl font-bold">
						<InertiaLink
							href='/users'
							className="text-indigo-600 hover:text-indigo-700"
						>
							Usuarios
						</InertiaLink>
						<span className="mx-2 font-medium text-indigo-600">/</span>
						{selectedUser.nombre + (selectedUser.borrado ? ' (Eliminado)' : '')}
					</h1>
				</div>

				<p>No se puede editar una cuenta que ingresa con {capitalizeFirstLetter(user.external_auth)}.</p>

				<button
					onClick={() => history.back()}
					className="ml-auto mt-4 px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500"
				>
					Volver
				</button>
			</div>
		)
	}

	return (
		<div>
			<div className="flex justify-start max-w-lg mb-8">
				<h1 className="text-3xl font-bold">
					<InertiaLink
						href='/users'
						className="text-indigo-600 hover:text-indigo-700"
					>
						Usuarios
					</InertiaLink>
					<span className="mx-2 font-medium text-indigo-600">/</span>
					{selectedUser.nombre + (selectedUser.borrado ? ' (Eliminado)' : '')}
				</h1>
			</div>
			{user.borrado ? (
				<TrashedMessage onRestore={restore}>
					Se ha eliminado el usuario
				</TrashedMessage>
			) : ''}
			<div className="max-w-3xl overflow-hidden bg-white rounded shadow">
				<form onSubmit={handleSubmit}>
					<div className="flex flex-wrap p-8 -mb-8 -mr-6">
						<TextInput
							className="w-full pb-8 pr-6 lg:w-2/2"
							label="Nombre"
							name="nombre"
							value={data.nombre}
							onChange={e => setData('nombre', e.target.value)}
						/>
						<TextInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="Dirección de correo electrónico"
							name="email"
							type="email"
							value={data.email}
							onChange={e => setData('email', e.target.value)}
						/>
						<TextInput
							className="w-full pb-8 pr-6 lg:w-1/2"
							label="Contraseña"
							name="password"
							type="password"
							value={''}
							onChange={e => setData('password', e.target.value)}
						/>
					</div>
					<div className="flex items-center px-8 py-4 bg-gray-100 border-t border-gray-200">
						{!selectedUser.borrado ? (
							<DeleteButton onDelete={destroy}>Eliminar usuario</DeleteButton>
						) : (
							<DeleteButton onDelete={restore}>Restaurar usuario</DeleteButton>
						)}
						<LoadingButton
							type="submit"
							className="ml-auto px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500"
						>
							Actualizar
						</LoadingButton>
					</div>
				</form>
			</div>
		</div>
	);
};

Edit.layout = page => <Layout>{page}</Layout>;

export default Edit;
