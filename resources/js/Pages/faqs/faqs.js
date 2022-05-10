import React from 'react';
import Layout from '../../Shared/Layout';

const faqs = () => {
	return (
		<div>
			<h1 className="mb-8 text-3xl font-bold">Preguntas Frecuentes</h1>
			<section className="py-20 2xl:py-40 bg-blue-50">
				<div className="container px-4 mx-auto">
					<div className="max-w-4xl mx-auto">
						<ul>
							<li className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">1</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<h3 className="text-xl font-bold">¿A quién debo dirigirme si tengo alguna duda sobre la información publicada?</h3>
										</div>
										<div className="mt-6 border-l-2 border-gray-50 pl-10">
											<p className="mb-5 text-xl">Los órganos de contratación son los responsables de la corrección y veracidad de la información publicada en su perfil del contratante. </p>
											<p className="mb-5 text-xl">Si sus cuestiones se refieren a otra información publicada deberá dirigirse a los responsables de la Plataforma de Contratación:</p>
											<p className="mb-5 text-xl">- Subdirección General de Coordinación de la Contratación Electrónica </p>
											<p className="mb-5 text-xl">- Dirección General del Patrimonio del Estado</p>
											<p className="mb-5 text-xl">- Ministerio de Hacienda y Administraciones Públicas</p>
										</div>
									</div>
								</button>
							</li>

							<li className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">2</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<h3 className="text-xl font-bold">¿Qué valor legal tiene la información publicada en la Plataforma?</h3>
										</div>
										<div className="mt-6 border-l-2 border-gray-50 pl-10">
											<p className="mb-5 text-xl">La información publicada en la Plataforma tiene plena validez legal de acuerdo con el artículo 334 del Real Decreto Legislativo, 3/2011 Texto Refundido de Contratos del Sector Público</p>
										</div>
									</div>
								</button>
							</li>

							<li className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">3</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<h3 className="text-xl font-bold">¿Quién es el responsable de la Plataforma de Contratación?</h3>
										</div>
										<div className="mt-6 border-l-2 border-gray-50 pl-10">
											<p className="mb-5 text-xl">La Plataforma de Contratación del Sector Público es responsabilidad de la Dirección General del Patrimonio del Estado, del Ministerio de Hacienda y Administraciones Públicas, que tiene delegada su gestión en la Subdirección General de Coordinación de la Contratación Electrónica.</p>
										</div>
									</div>
								</button>
							</li>

							<li className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">4</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<h3 className="text-xl font-bold">¿Qué tipos de usuarios se pueden dar de alta en un órgano de contratación?</h3>
										</div>
										<div className="mt-6 border-l-2 border-gray-50 pl-10">
											<p className="mb-5 text-xl">Los usuarios que se pueden dar de alta en un órgano de contratación son:
												Responsable del Órgano de Contratación – ROC:

												El Responsable del Órgano es el titular del órgano de contratación unipersonal o el presidente del órgano de contratación colegiado. Tiene plenos poderes para realizar cualquier operación en su perfil del contratante.
											</p>
										</div>
									</div>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section id="cta" className="bg-gray-500 padding mt-16 ">
				<div
					className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
					<div className="max-w-2xl py-2 px-5 m-auto w-full mt-4">

						<div className="text-3xl mb-6 text-center ">
							<h1 className="text-4xl font-bold text-center">Contacto</h1>
						</div>

						<div className="grid grid-cols-2 gap-4 max-w-xl m-auto">

							<div className="col-span-2 lg:col-span-1">
								<input type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Nombre" />
							</div>

							<div className="col-span-2 lg:col-span-1">
								<input type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Correo electronico" />
							</div>

							<div className="col-span-2">
								<textarea cols="30" rows="8" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Mensaje"></textarea>
							</div>

							<div className="col-span-2 text-right">
								<button className="py-3 px-6 bg-indigo-700 text-white rounded-full font-bold w-full sm:w-32 hover:bg-indigo-500">
									Enviar
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <script >
		const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
    preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classNameList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

	});
});
	</script> */}
		</div>
	);
};
// const Preguntas = (props) => {
// 	return (
//         <div className="contenedor-pregunta">
//         <p className="pregunta">{props.pregunta} <img src="./imgs/suma.svg" alt="Abrir Respuesta" /></p>
//         <p className="respuesta">{props.respuesta}</p>
//     </div>
// 	);
// };
faqs.layout = (page) => <Layout title="buscador">{page}</Layout>;
export default faqs;