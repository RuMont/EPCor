import React from "react";
import Layout from "../../Shared/Layout";

import Feed from "./Feed";

const Dashboard = () => {
    return (
        <div>
            {/* <h1 className="mb-8 text-3xl font-bold">Tablero</h1> */}

            {/* Ultimas noticias */}

            {/* <div className="shadow-lg p-3 mb-5 bg-white rounded col-6">
                <GoogleChart />
            </div> */}

            {/* Al día */}
            <h1 className="mb-8 text-3xl font-bold">
                NOTICIAS DEL DIA
            </h1>

            <Feed />

            {/* add footer */}
        </div>
    );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = (page) => <Layout title="Tablero">{page}</Layout>;

export default Dashboard;
