import React, { useState } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Icon from './Icon';

export default function BottomHeader() {
  const { user } = usePage().props;

  // Si no hay foto de perfil, usar avatar por defecto

  user.avatar ? user.avatar : user.avatar = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="flex items-center justify-between w-full p-4 text-sm bg-white border-b md:py-0 md:px-12 d:text-md">
      <div className="mt-1 mr-4">{user.nombre}</div>
      <div className="relative">
        <div
          className="flex items-center cursor-pointer select-none group"
          onClick={() => setMenuOpened(true)}
        >
          <div className="mr-1 text-gray-800 whitespace-nowrap group-hover:text-indigo-600 focus:text-indigo-600 inline-flex">
            
            <img src={user.avatar} className="w-8 h-8 rounded-full" />
            <span className='ml-2 mt-2'>{user.email} </span>
            {/* <span className="hidden ml-1 md:inline">{user.last_name}</span> */}
          </div>
          <Icon
            className="w-5 h-5 text-gray-800 fill-current group-hover:text-indigo-600 focus:text-indigo-600"
            name="cheveron-down"
          />
        </div>
        <div className={menuOpened ? '' : 'hidden'}>
          <div className="absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-nowrap bg-white rounded shadow-xl">
            <InertiaLink
              // href={route('users.edit', user.id)}
              href={'/users/' + user.id + '/edit'}
              className="block px-6 py-2 hover:bg-indigo-600 hover:text-white"
              onClick={() => setMenuOpened(false)}
            >
              Mis datos
            </InertiaLink>
            {user.is_admin ? (
              <InertiaLink
                href='/users'
                className="block px-6 py-2 hover:bg-indigo-600 hover:text-white"
                onClick={() => setMenuOpened(false)}
              >
                Gestionar usuarios
              </InertiaLink>
            ): ''}
            <InertiaLink
              as="button"
              href='/logout'
              className="block w-full px-6 py-2 text-left focus:outline-none hover:bg-indigo-600 hover:text-white"
            >
              Cerrar sesión
            </InertiaLink>
          </div>
          <div
            onClick={() => {
              setMenuOpened(false);
            }}
            className="fixed inset-0 z-10 bg-black opacity-25"
          ></div>
        </div>
      </div>
    </div>
  );
};
