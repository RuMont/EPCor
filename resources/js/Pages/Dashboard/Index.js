import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../Shared/Layout";

const Dashboard = () => {
    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Tablero</h1>

		{/* Ultimas noticias */}

		<div className="mt-10">
			<h2 className="text-lg font-medium text-gray-900">
				Ultimas noticias
			</h2>
			<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
				<div className="flex flex-col">
					<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
						<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
							<table className="min-w-full divide-y divide-gray-200">
								<thead>
									<tr>
										<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Titulo
										</th>
										<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Fecha
										</th>
										<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Categoria
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									<tr>
										<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
											<div className="flex items-center">
												<div className="flex-shrink-0 h-10 w-10">
													<img
														className="h-10 w-10 rounded-full"
														src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
														alt=""
													/>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		{/* Lo mas hot */}

		<div className="mt-10">
			<h2 className="text-lg font-medium text-gray-900">
				Lo mas hot
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
