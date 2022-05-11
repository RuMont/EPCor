import { Head, usePage } from '@inertiajs/inertia-react';
import React, { useState } from 'react';
import Layout from '../../Shared/Layout';
import Form from './Form';

const faqs = () => {
	const { appName } = usePage().props
	const [info, setInfo] = useState(false);

	const setAndGo = () => {
		setInfo(true);
		setTimeout(() => location.href = '#cta', 0);
	}

	return (
		<div>
			<Head title={appName} />
			<h1 className="mb-8 text-3xl font-bold">Preguntas Frecuentes</h1>
			<p>Aquí se encuentran una serie de preguntas ya respondidas</p>
			<section className="py-4 2xl:py-8 bg-blue-50">
				<div className="container mx-auto">
					<div>
						<ul>
							<li className="mb-4 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">1</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<details>
												<summary className="text-lg font-bold">¿Qué es la contratación administrativa o la contratación del sector público?</summary>
												<div className="mt-6 border-l-2 border-gray-50 pl-10">
													<p className="mb-5 text-xl">Son los contratos del sector público cualquiera que sea su naturaleza jurídica que se celebren las entidades del sector público,
														entre ellas las entidades que integran la Administración local.</p>

													<p className="mb-5 text-xl">La contratación del sector público debe garantizar los principios básicos de libertad de acceso a las licitaciones, publicidad y
														transparencia de los procedimientos y no discriminación e igualdad de trato entre los licitadores, garantizando además el objetivo
														de estabilidad presupuestaria y control de gasto, el principio de integridad y una eficiente utilización de los fondos públicos (artículo 1 LCSP).</p>
												</div>
											</details>
										</div>

									</div>
								</button>
							</li>

							<li className="mb-4 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">2</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<details>
												<summary className="text-lg font-bold">¿Qué es el perfil del contratante?</summary>
												<div className="mt-6 border-l-2 border-gray-50 pl-10">
													<p className="mb-5 text-xl">El perfil del contratante es el espacio en el que se agrupa toda la información y documentos relativos a la activad contractual de los órganos de contratación
														con objeto de asegurar su transparencia y acceso público. Su difusión es exclusivamente a través de Internet. La forma de acceso al perfil de contratante deberá
														hacerse constar en los pliegos y documentos equivalentes, así como en los anuncios de licitación en todos los casos. (Artículo 63 de la LCAP).</p>

													<p className="mb-5 text-xl">El contenido de lo que debe publicarse en el perfil de contratante de los órganos de contratación en relación a cada contrato se recoge en el artículo 63.3 de la LCSP.</p>
												</div>
											</details>
										</div>

									</div>
								</button>
							</li>

							<li className="mb-4 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">3</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<details>
												<summary className="text-lg font-bold">¿Qué clase de contratos existen?</summary>
												<div className="mt-6 border-l-2 border-gray-50 pl-10">
													<p className="mb-5 text-xl font-bold">Contratos administrativos</p>
													<ul>
														<li>
															<p className="mb-5 text-xl">Los contratos de obra, concesión de obra pública, concesión de servicios, suministro, y servicios.</p>
														</li>
														<li>
															<p className="mb-5 text-xl">Los contratos administrativos especiales son aquellos que están vinculados al giro  o tráfico específico de la administración contratante.</p>
														</li>
													</ul>
													<p className="mb-5 text-xl font-bold">Contratos privados</p>
													<ul>
														<li>
															<p className="mb-5 text-xl">Los contratos que celebren las Administraciones Públicas distintos de los contratos anteriores (artículo 26.1 LCSP)</p>
														</li>
														<li>
															<p className="mb-5 text-xl">Los contratos de servicios financieros, los de creación e interpretación artística y literaria y los de espectáculos que específicamente
																determina la Ley y los contratos  cuyo objeto sea la suscripción a revistas, publicaciones periódicas y bases de datos. (Artículo 25.1 a) de la LCSP).</p>
														</li>
													</ul>
												</div>
											</details>
										</div>

									</div>
								</button>
							</li>

							<li className="mb-4 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">4</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<details>
												<summary className="text-lg font-bold">¿A quién debo dirigirme si tengo alguna duda sobre la información publicada?</summary>
												<div className="mt-6 border-l-2 border-gray-50 pl-10">
													<p className="mb-5 text-xl">Los órganos de contratación son los responsables de la corrección y veracidad de la información publicada en su perfil del contratante. </p>
													<p className="mb-5 text-xl">Si sus cuestiones se refieren a otra información publicada deberá dirigirse a los responsables de la Plataforma de Contratación:</p>
													<p className="mb-5 text-xl">- Subdirección General de Coordinación de la Contratación Electrónica </p>
													<p className="mb-5 text-xl">- Dirección General del Patrimonio del Estado</p>
													<p className="mb-5 text-xl">- Ministerio de Hacienda y Administraciones Públicas</p>
												</div>
											</details>
										</div>

									</div>
								</button>
							</li>

							<li className="mb-4 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">5</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<details>
												<summary className="text-lg font-bold">¿Qué valor legal tiene la información publicada en la Plataforma?</summary>
												<div className="mt-6 border-l-2 border-gray-50 pl-10">
													<p className="mb-5 text-xl">La información publicada en la Plataforma tiene plena validez legal de acuerdo con el artículo 334 del Real Decreto Legislativo, 3/2011 Texto Refundido de Contratos del Sector Público </p>
												</div>
											</details>
										</div>

									</div>
								</button>
							</li>

							<li className="mb-4 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">6</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<details>
												<summary className="text-lg font-bold">¿Quién es el responsable de la Plataforma de Contratación?</summary>
												<div className="mt-6 border-l-2 border-gray-50 pl-10">
													<p className="mb-5 text-xl">La Plataforma de Contratación del Sector Público es responsabilidad de la Dirección General del Patrimonio del Estado, del Ministerio de Hacienda y Administraciones Públicas, que tiene delegada su gestión en la Subdirección General de Coordinación de la Contratación Electrónica. </p>
												</div>
											</details>
										</div>

									</div>
								</button>
							</li>

							<li className="mb-4 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">7</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<details>
												<summary className="text-lg font-bold">¿Qué tipos de usuarios se pueden dar de alta en un órgano de contratación?</summary>
												<div className="mt-6 border-l-2 border-gray-50 pl-10">
													<p className="mb-5 text-xl">Los usuarios que se pueden dar de alta en un órgano de contratación son:</p>
													<p className="mb-5 text-xl font-bold">Responsable del Órgano de Contratación – ROC:</p>
													<p className="mb-5 text-xl">El Responsable del Órgano es el titular del órgano de contratación unipersonal o el presidente del órgano de contratación colegiado.
														Tiene plenos poderes para realizar cualquier operación en su perfil del contratante.</p>

													<p className="mb-5 text-xl font-bold">Administrador del Órgano de Contratación - AOC:</p>
													<p className="mb-5 text-xl">El Administrador del Órgano puede gestionar los aspectos de la Plataforma relacionados con el Órgano y su ámbito de actuación.
														Tiene plenos poderes para realizar cualquier operación en su perfil del contratante, pudiendo gestionar los usuarios, publicar información y hacer uso de todos
														los servicios que la plataforma ofrece a los órgano de contratación.</p>

													<p className="mb-5 text-xl font-bold">Personal del Órgano de Contratación Publicador – POC-PUB:</p>
													<p className="mb-5 text-xl">Puede publicar información y documentación sobre las licitaciones que tengan asignadas.</p>

													<p className="mb-5 text-xl font-bold">Personal del Órgano de Contratación  Editor – POC-ED:</p>
													<p className="mb-5 text-xl">Puede editar la información de las licitaciones que les asigenen los publicadores, pero no pueden publicar.</p>

												</div>
											</details>
										</div>

									</div>
								</button>
							</li>

							<li className="mb-4 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">8</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<details>
												<summary className="text-lg font-bold">¿Qué clase de procedimientos de adjudicación existen?</summary>
												<div className="mt-6 border-l-2 border-gray-50 pl-10">
													<p className="mb-5 text-xl">Los contratos que celebren las Administraciones Públicas se  adjudicarán, por regla general, utilizando o bien el procedimiento abierto o bien el procedimiento restringido.</p>
													<p className="mb-5 text-xl">Además de estos dos procedimientos, podrán utilizarse en los supuestos taxativos que la Ley señala, el procedimiento negociado o licitación con negociación, el procedimiento de
														dialogo competitivo y el procedimiento de asociación para la innovación. (Artículo 131 de la LCSP)</p>
												</div>
											</details>
										</div>

									</div>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</section>


			{!info ? <button onClick={setAndGo} type='button' className='rounded bg-indigo-900 p-2 text-white hover:bg-orange-500 hover:text-indigo-900'>
				¿No encuentras lo que buscas? Contáctanos
			</button> :
				<section id="cta" className="mt-4">
					<Form />
				</section>
			}

		</div>
	);
};

faqs.layout = (page) => <Layout title="buscador">{page}</Layout>;
export default faqs;