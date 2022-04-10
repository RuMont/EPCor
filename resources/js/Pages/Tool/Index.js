import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Layout from '../../Shared/Layout';
import Selector from './Selector';

const Tool = () => {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Buscador</h1>
      <Selector/>
    </div>
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Tool.layout = page => <Layout title="Buscador">{page}</Layout>;

export default Tool;
