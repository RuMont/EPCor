import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../Shared/Layout";

import GoogleChart from "../../Shared/GoogleChart";
import Feed from "../../Shared/Feed";
import Feed2 from "../../Shared/Feed2";
import MainMenuItem from "../../Shared/MainMenuItem";


const Dashboard = () => {
    return (
        <div className="bg-success">
            <h1 className="mb-8 text-3xl font-bold">Tablero</h1>

		{/* Ultimas noticias */}

		
			
					
		
		<div className="shadow-lg p-3 mb-5 bg-white rounded col-6">
			<GoogleChart />
		</div>
				

			
		
	
		{/* Al día */}
		<div className="mt-10 grid grid-cols-3">
			<div className="mt-10 ">
				<h2 className="text-lg font-medium text-gray-900 font-weight-bold">
					AL DIA
				</h2>
				
					<Feed />
					
			</div>
			
			<div className="mt-10 ">
				<h2 className="text-lg font-medium text-gray-900 font-weight-bold">
					AL DIA
				</h2>
				
					<Feed />
					
			</div>
				
				
			
	</div>
	{/* add footer */}
	
	
	</div>

	
	
	
    );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = (page) => <Layout title="Buscador">{page}</Layout>;

export default Dashboard;
