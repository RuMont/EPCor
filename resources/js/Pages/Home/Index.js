import React from 'react'
import Logo from '../../Shared/Logo';
import imagen1 from '../../../imgs/1.svg';
import imagen2 from '../../../imgs/2.svg';
import imagenyo from '../../../imgs/yo.png';
import instagram from '../../../imgs/icon-instagram.svg';
import twitter from '../../../imgs/icon-twitter.svg';
import youtube from '../../../imgs/icon-youtube.svg';
import facebook from '../../../imgs/icon-facebook.svg';
import josema from '../../../imgs/josema.png';
import ruben from '../../../imgs/ruben.png';
import Form from './Form';
import { Link } from '@inertiajs/inertia-react';

const Index = () => {

    return (
        <div>
            <nav className=" bg-white container mx-auto p-6 px-5">
                <div className="flex items-center">
                    <div className="pt-2">
                        <Logo style={{
                            width: "20%",
                            height: "auto"
                        }} />
                        <h1 className="text-black">Tridymite S.L</h1>
                    </div>
                    <Link href="./login"
                        style={{ marginRight: "1%", marginLeft: "60%" }}

                        className="hidden md:block p-3 px-6 pt-2 text-white bg-indigo-700 rounded-full baseline font-bold hover:bg-orange-400">
                        Login
                    </Link>
                    <Link href="./register"
                        className="hidden md:block p-3 px-6 pt-2 text-white bg-indigo-700 rounded-full baseline font-bold hover:bg-orange-400">
                        Register
                    </Link>

                </div>
            </nav>

            <section id="hero">
                <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-36 space-y-0">
                    <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                            EPCor
                        </h1>
                        <p className="max-w-sm text-center text-black md:text-left">
                            Aplicación para realizar búsquedas exahustivas de la provincia de Córdoba con un sólo clic.<br />
                            Este proyecto está destinado a facilitar la búsqueda de empleo público,
                            e informar al ciudadano sobre los procedimientos que se llevan a cabo en la contratación del estado.
                        </p>

                    </div>
                    <div className="md:w-1/2">
                        <img src={imagen1} alt="" />
                    </div>
                </div>
            </section>

            <section id="features">
                <div className="container flex flex-col px-4 mx-auto mt-36 space-y-12 md:space-y-0 md:flex-row">
                    <div className="flex flex-col space-y-12 md:w-1/2">
                        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                            ¿Qué encontrarás en nuestra plataforma?
                        </h2>
                        <div className="md:w-1/2">
                            <img src={imagen2} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-8 md:w-1/2">

                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                            <div className="rounded-l-full bg-white md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 bg-indigo-700 rounded-full md:py-1 bg-brightRed text-white">
                                        01
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Buscador de empleo.
                                </h3>
                                <p className="text-black">
                                    Un buscador de ofertas de empleo público
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 bg-indigo-700 rounded-full md:py-1 bg-brightRed text-white">
                                        02
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Fácil de usar
                                </h3>
                                <p className="text-black">
                                    Está pensado para ser utilizado de forma sencilla, por lo que únicamente tiene un selector de opciones,
                                    que son entidades que emiten las ofertas de empleo.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <div className="px-4 py-2 bg-indigo-700 rounded-full md:py-1 text-white">
                                        03
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="hidden mb-4 text-lg font-bold md:block">
                                    Noticias.
                                </h3>
                                <p className="text-black">
                                    Actualización de las últimas noticias sobre nuevos empleos que se deja ver sección Tablero.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials">
                <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                    <h2 className="text-4xl font-bold text-center">
                        Sobre nosotros
                    </h2>
                    <div className="flex flex-col mt-12 md:flex-row md:space-x-6">

                        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-white md:w-1/3 shadow-lg">
                            <img src={imagenyo} style={{
                                width: '70%',
                                height: 'auto'
                            }} />
                            <h5 className="text-lg font-bold">Antonio Villalba</h5>
                            <p className="text-sm text-black">
                                “Tiene experiencia de manera autodidacta con todo lo relacionado con el diseño, además,
                                de haber cursado un grado medio de “Explotación de sistemas informáticos”.”
                            </p>
                        </div>

                        <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-white md:w-1/3 shadow-lg">
                            <img src={ruben} style={{
                                width: '33%',
                                height: 'auto'
                            }} />
                            <h5 className="text-lg font-bold">Ruben Montoro</h5>
                            <p className="text-sm text-black">
                                ”Además de los conocimientos informáticos, tiene conocimientos sobre creación de empresas
                                ya que cursó el Grado de Turismo donde se adquiere conocimiento sobre el mundo empresarial,
                                gestión de personal y de equipos.”
                                .”
                            </p>
                        </div>

                        <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-white md:w-1/3 shadow-lg">
                            <img src={imagenyo} style={{
                                width: '70%',
                                height: 'auto'
                            }} />
                            <h5 className="text-lg font-bold">Juanan Antonio</h5>
                            <p className="text-sm text-black">
                                “Tiene conocimiento sobre todo lo relacionado con el hardware
                                por tanto, al principio de la empresa podrá encargarse de la gestión de las
                                máquinas que se encarga de montar todo el sistema que tenemos en mente,
                                ahorrándonos el coste de personal extra..”
                            </p>
                        </div>
                        <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-white md:w-1/3 shadow-lg">
                            <img src={josema} style={{
                                width: '35%',
                                height: 'auto'
                            }} />
                            <h5 className="text-lg font-bold">Jose Manuel</h5>
                            <p className="text-sm text-black">
                                “Tiene conocimientos sobre telecomunicaciones, hardware y ha tratado con
                                software de distintos sistemas operativos, ya que cursó el grado superior
                                en “Sistemas de Telecomunicaciones e informáticos”, además de autoaprendizaje
                                por interés propio en manipulación de smartphones.“
                                ”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="bg-gray-500 padding mt-16 ">
                <Form/>
            </section>

            <footer className="bg-indigo-700">
                <div
                    className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                    <div
                        className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                        <div className="mx-auto my-6 text-center text-white md:hidden">
                            Copyright &copy; 2022, All Rights Reserved
                        </div>
                        <div className="flex justify-center space-x-4 ">

                            <a href="#">
                                <img src={facebook} alt="Facebook" className="h-8" />
                            </a>

                            <a href="#">
                                <img src={twitter} alt="Twitter" className="h-8" />
                            </a>

                            <a href="#">
                                <img src={instagram} alt="Instagram" className="h-8" />
                            </a>

                            <a href="#">
                                <img src={youtube} alt="Youtube" className="h-8" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-around space-x-32">
                        <div className="flex flex-col space-y-3 text-white">
                            <a href="#" className="hover:text-orange-500">Link_1</a>
                            <a href="#" className="hover:text-orange-500">Link_2</a>
                            <a href="#" className="hover:text-orange-500">Link_3</a>
                            <a href="#" className="hover:text-orange-500">Link_4</a>
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            <a href="#" className="hover:text-orange-500">Link_5</a>
                            <a href="#" className="hover:text-orange-500">Link_6</a>
                            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>

            </footer>

        </div>
    )
}

export default Index;
