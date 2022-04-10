import Layout from '../Shared/Layout';
import PropTypes from 'prop-types';

const Dashboard = ({user}) => {
    return (
        <Layout user={user}>
            <h1>{user.nombre}</h1>
            <h1>{user.email}</h1>
            <h1>{user.is_admin ? 'Administrador' : 'Miembro'}</h1>
        </Layout>
    )
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
}

export default Dashboard