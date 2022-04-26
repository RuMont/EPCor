import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Layout from '../../Shared/Layout';

const Dashboard = () => {
	return (
		<div>
			<h1 className="mb-8 text-3xl font-bold">Tablero</h1>

		</div>
	);
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = page => <Layout title="Buscador">{page}</Layout>;

export default Dashboard;
