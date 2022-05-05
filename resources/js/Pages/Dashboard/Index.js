import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../Shared/Layout";

import GoogleChart from "../../Shared/GoogleChart";
import Feed from "../../Shared/Feed";


const Dashboard = () => {
    return (
        <div className="bg-success">
            <h1 className="mb-8 text-3xl font-bold">Tablero</h1>

		{/* Ultimas noticias */}

		<div className="mt-10">
			<h2 className="text-lg font-medium text-gray-900">
				Ultimas noticias
			</h2>
			<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
				<div className="flex flex-col">
					<div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
						<div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 shadow-lg p-3 mb-5 bg-white rounded">
							<table className="min-w-full divide-y divide-gray-200">
								<thead>
									<tr>
										<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Autor
										</th>
										<th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
											Titulo
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
										<td>
											<div className="text-sm leading-5 text-gray-900">
												<a
													href="#"
													className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
												>
													Noticia 1
												</a>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											<div className="flex items-center">
												<div className="flex-shrink-0 h-10 w-10">
													<p className="text-xs leading-5 text-gray-900">
														<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
															Actualidad <span className="ml-1">•</span>
														</span>
													</p>
												</div>
											</div>
										</td>
									</tr>
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
										<td>
											<div className="text-sm leading-5 text-gray-900">
												<a
													href="#"
													className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
												>
													Noticia 2
												</a>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											<div className="flex items-center">
												<div className="flex-shrink-0 h-10 w-10">
													<p className="text-xs leading-5 text-gray-900">
														<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
															Informacion <span className="ml-1">•</span>
														</span>
													</p>
												</div>
											</div>
										</td>
									</tr>
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
										<td>
											<div className="text-sm leading-5 text-gray-900">
												<a
													href="#"
													className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
												>
													Noticia 3
												</a>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											<div className="flex items-center">
												<div className="flex-shrink-0 h-10 w-10">
													<p className="text-xs leading-5 text-gray-900">
														<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
															Informacion <span className="ml-1">•</span>
														</span>
													</p>
												</div>
											</div>
										</td>
									</tr>
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
										<td>
											<div className="text-sm leading-5 text-gray-900">
												<a
													href="#"
													className="font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
												>
													Noticia 2
												</a>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
											<div className="flex items-center">
												<div className="flex-shrink-0 h-10 w-10">
													<p className="text-xs leading-5 text-gray-900">
														<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
															Informacion <span className="ml-1">•</span>
														</span>
													</p>
												</div>
											</div>
										</td>
										</tr>
								</tbody>
							</table>
						</div>
					</div>
					
				</div>
				<div className="shadow-lg p-3 mb-5 bg-white rounded">
			<GoogleChart />
		</div>
				

			</div>
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
					<img className="m-3"src="https://ps.w.org/custom-twitter-feeds/assets/screenshot-1.png?rev=1804720" alt=""/>
					
				</div>

				<Feed />
				
				
				
				{/* Social media */}

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
