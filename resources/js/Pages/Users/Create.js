import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import Layout from '../../Shared/Layout';
import LoadingButton from '../../Shared/LoadingButton';
import TextInput from '../../Shared/TextInput';

const Create = () => {
  const { data, setData } = useForm({
    nombre: '',
    email: '',
    password: '',
    is_admin: '0',
  });

  function handleSubmit(e) {
    e.preventDefault();
    Inertia.post('/users', data);
  }

  return (
    <div>
      <div>
        <h1 className="mb-8 text-3xl font-bold">
          <InertiaLink
            href={'/users'}
            className="text-indigo-600 hover:text-indigo-700"
          >
            Usuarios
          </InertiaLink>
          <span className="font-medium text-indigo-600"> /</span> Crear
        </h1>
      </div>
      <div className="max-w-3xl overflow-hidden bg-white rounded shadow">
        <form name="createForm" onSubmit={handleSubmit}>
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
              value={data.password}
              onChange={e => setData('password', e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
            <LoadingButton
              type="submit"
              className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500"
            >
              Crear usuario
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

Create.layout = page => <Layout title="Create User" >{page}</Layout> ;

export default Create;
