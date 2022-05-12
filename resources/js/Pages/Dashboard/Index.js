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

		<div className="mt-10 row">
			<h2 className="text-lg font-medium text-gray-900">
				Ultimas noticias
			</h2>

			<Feed />
			
					
		</div>
		<div className="shadow-lg p-3 mb-5 bg-white rounded col-6">
			<GoogleChart />
		</div>
				

			
		
	
		{/* Lo mas hot */}

		<div className="mt-10 ">
			<h2 className="text-lg font-medium text-gray-900 font-weight-bold">
				LO MAS HOT
			</h2>
			<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
				<div className="flex flex-col">
					<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
						<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
							<div className="bg-white overflow-hidden shadow-lg rounded-lg">
								<h3 className="m-2 text-lg font-medium text-gray-900">
									Titulo
								</h3>
								<p className="m-2 text-base text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptatibus, quisquam.
								</p>
								<div className="m-2">
									<InertiaLink
										href="/dashboard/posts/[id]"
										className="text-sm font-medium text-blue-600 hover:text-blue-500"
									>
										Ver más
									</InertiaLink>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mt-4">
							<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
								<div className="bg-white overflow-hidden shadow-lg rounded-lg">
									<h3 className="m-2 text-lg font-medium text-gray-900">
										Titulo 2
									</h3>
									<p className="m-2 text-base text-gray-500">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Voluptatibus, quisquam.
									</p>
									<div className="m-2">
										<InertiaLink
											href="/dashboard/posts/[id]"
											className="text-sm font-medium text-blue-600 hover:text-blue-500"
										>
											Ver más
										</InertiaLink>
									</div>
								</div>
							</div>
						</div>
						<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mt-4">
							<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
								<div className="bg-white overflow-hidden shadow-lg rounded-lg">
									<h3 className="m-2 text-lg font-medium text-gray-900">
										Titulo 3
									</h3>
									<p className="m-2 text-base text-gray-500">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Voluptatibus, quisquam.
									</p>
									<div className="m-2">
										<InertiaLink
											href="/dashboard/posts/[id]"
											className="text-sm font-medium text-blue-600 hover:text-blue-500"
										>
											Ver más
										</InertiaLink>
									</div>
								</div>
							</div>
						</div>
						<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mt-4">
							<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
								<div className="bg-white overflow-hidden shadow-lg rounded-lg">
									<h3 className="m-2 text-lg font-medium text-gray-900">
										Titulo 4
									</h3>
									<p className="m-2 text-base text-gray-500">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Voluptatibus, quisquam.
									</p>
									<div className="m-2">
										<InertiaLink
											href="/dashboard/posts/[id]"
											className="text-sm font-medium text-blue-600 hover:text-blue-500"
										>
											Ver más
										</InertiaLink>
									</div>
								</div>
							</div>
						</div>
						<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mt-4">
							<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
								<div className="bg-white overflow-hidden shadow-lg rounded-lg">
									<h3 className="m-2 text-lg font-medium text-gray-900">
										Titulo 5
									</h3>
									<p className="m-2 text-base text-gray-500">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Voluptatibus, quisquam.
									</p>
									<div className="m-2">
										<InertiaLink
											href="/dashboard/posts/[id]"
											className="text-sm font-medium text-blue-600 hover:text-blue-500"
										>
											Ver más
										</InertiaLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" shadow-lg p-3 mb-5 bg-white rounded">
				<Feed />
					
				</div>
			
				{/* RSS */}

				<div>
				
				</div>
				
		
	</div>
	</div>
	</div>
	
    );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = (page) => <Layout title="Buscador">{page}</Layout>;

export default Dashboard;
