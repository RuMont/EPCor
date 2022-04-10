import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@inertiajs/inertia-react'

const Navbar = ({ user }) => {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <>
            <nav className='sticky top-0 bg-slate-800 p-4 text-slate-100 flex flex-row justify-between'>
                <div>
                    {/* Entra al dashboard con un redirect si está logeado */}
                    {user ?
                        <Link className='mr-4' href='/'>Dashboard</Link> :
                        <Link className='mr-4' href='/'>Home</Link>
                    }
                    <Link className='mr-4' href='/about'>Sobre nosotros</Link>
                    {/* Link de prueba */}
                    {user?.is_admin ? <Link className='mr-4' href='/admin'>Admin</Link> : ''}
                </div>
                {user ? (
                    <div className='cursor-pointer' onClick={() => setMenuOpened(true)}>
                        {user.email}
                    </div>
                ) : (
                    ''
                )
                }
            </nav>
            {/* Modal para ir a perfil o cerrar sesión */}
            <div className={!menuOpened && `hidden`}>
                <div className='absolute top-0 z-20 right-0 bg-slate-100 my-10 mx-4 p-2 rounded'>
                    <Link
                        className='block w-full py-2 px-4 text-slate-600 rounded hover:text-slate-100 hover:bg-slate-600'
                        href='/profile'
                    >
                        Ver perfil
                    </Link>
                    <Link
                        className='block w-full py-2 px-4 text-slate-600 rounded hover:text-slate-100 hover:bg-slate-600'
                        href='/logout'
                    >
                        Cerrar sesión
                    </Link>
                </div>
                <div
                    onClick={() => {
                        setMenuOpened(false);
                    }}
                    className="fixed inset-0 z-10 bg-black opacity-25"
                ></div>
            </div>
        </>

    )
}

Navbar.propTypes = {
    user: PropTypes.object
}

export default Navbar