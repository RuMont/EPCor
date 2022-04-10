import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Layout from '../../Shared/Layout';

const Dashboard = () => {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Tablero</h1>
      <p className="mb-12 leading-normal">
        Hey there! Welcome to Ping CRM, a demo app designed to help illustrate
        how
        <a
          className="mx-1 text-indigo-600 underline hover:text-orange-500"
          href="https://inertiajs.com"
        >
          Inertia.js
        </a>
        works with
        <a
          className="ml-1 text-indigo-600 underline hover:text-orange-500"
          href="https://reactjs.org/"
        >
          React
        </a>
        .
      </p>
      <div>
        <InertiaLink className="mr-1 px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500" href="/500">
          500 error
        </InertiaLink>
        <InertiaLink className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500" href="/404">
          404 error
        </InertiaLink>
      </div>
    </div>
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = page => <Layout title="Buscador">{page}</Layout>;

export default Dashboard;
