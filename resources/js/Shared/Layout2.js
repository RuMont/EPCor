import { Head, usePage } from '@inertiajs/inertia-react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Layout = ({ children, user }) => {
    const { appName } = usePage().props

    return (
        <>
            <Head title={appName} />
            <Navbar user={user} />
            <main className='w-3/4 mx-auto'>
                {children}
            </main>
            <footer className="absolute bottom-0 bg-slate-800 w-full p-4 text-slate-100">
                <p>Desarrollo Top Level S.L</p>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    user: PropTypes.object
}


export default Layout