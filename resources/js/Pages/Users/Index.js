import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Layout from '../../Shared/Layout';
import Icon from '../../Shared/Icon';
import SearchFilter from '../../Shared/SearchFilter';
import Pagination from '../../Shared/Pagination';

const Index = () => {
  const { users } = usePage().props;
  const {
    meta: links 
  } = users;
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Usuarios</h1>
      <div className="flex items-center justify-between mb-6">
        <SearchFilter />
        <InertiaLink
          className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500 focus:outline-none"
          href={'/users/create'}
        >
          <span>Crear</span>
          <span className="hidden md:inline"> usuario</span>
        </InertiaLink>
      </div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="font-bold text-left">
              <th className="px-6 pt-5 pb-4">Nombre</th>
              <th className="px-6 pt-5 pb-4">Email</th>
              <th className="px-6 pt-5 pb-4" colSpan="2">
                Rango
              </th>
            </tr>
          </thead>
          <tbody>
            {users.data.map(({ id, nombre, email, is_admin, borrado }) => {
              return (
                <tr
                  key={id}
                  className="hover:bg-gray-100 focus-within:bg-gray-100"
                >
                  <td className="border-t">
                    <InertiaLink
                      href={`/users/${id}/edit`}
                      className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                    >
                      {nombre}
                      {borrado ? (
                        <Icon
                          name="trash"
                          className="flex-shrink-0 w-3 h-3 ml-2 text-gray-400 fill-current"
                        />
                      ):''}
                    </InertiaLink>
                  </td>
                  <td className="border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={`/users/${id}/edit`}
                      className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                    >
                      {email}
                    </InertiaLink>
                  </td>
                  <td className="border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={`/users/${id}/edit`}
                      className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                    >
                      {is_admin ? 'Administrador' : 'Miembro'}
                    </InertiaLink>
                  </td>
                  <td className="w-px border-t">
                    <InertiaLink
                      tabIndex="-1"
                      href={`/users/${id}/edit`}
                      className="flex items-center px-4 focus:outline-none"
                    >
                      <Icon
                        name="cheveron-right"
                        className="block w-6 h-6 text-gray-400 fill-current"
                      />
                    </InertiaLink>
                  </td>
                </tr>
              );
            })}
            {users.data.length === 0 && (
              <tr>
                <td className="px-6 py-4 border-t" colSpan="4">
                  No se han encontrado usuarios
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination links={links} />
    </div>
  );
};

Index.layout = page => <Layout title="Usuarios" >{page}</Layout>;

export default Index;
