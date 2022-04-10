import Layout from '../Shared/Layout';
import PropTypes from 'prop-types';

const About = ({user}) => {
    return (
        <Layout user={user}>
            <h1>Hello Inertia</h1>
            <p>This is my first app with Inertiajs</p>
        </Layout>
    )
}

About.propTypes = {
    user: PropTypes.object
}

export default About