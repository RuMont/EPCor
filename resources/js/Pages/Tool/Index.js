import React, { useEffect, useState } from 'react';
import Layout from '../../Shared/Layout';
import Selector from './Selector';
import ListDisplay from './ListDisplay';
import { usePage } from '@inertiajs/inertia-react';

const Tool = () => {
	const loadDocs = usePage().props.loadDocs
	
	return (
		<div>
			<h1 className="mb-8 text-3xl font-bold">Buscador</h1>
			<Selector />
			<ListDisplay ads={loadDocs?.data}/>
		</div>
	);
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Tool.layout = page => <Layout title="Buscador">{page}</Layout>;

export default Tool;
