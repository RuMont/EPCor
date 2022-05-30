/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import Logo from "../../Shared/Logo";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";
import { Inertia } from "@inertiajs/inertia";
import Icon from "../../Shared/Icon";
import { GoogleLogin } from "react-google-login";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const props = usePage().props;

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post("auth", values);
    }

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        
        // save user to database
        // redirect to dashboard
        Inertia.post("/storeGoogle", response);
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
            <Head title={props.appName} />
            <div className="w-full max-w-md">
                <Logo
                    className="block w-3/5 max-w-xs mx-auto"
                    style={{
                        width: "40%",
                        height: "auto",
                    }}
                />
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
                >
                    <div className="px-10 py-12">
                        <h1 className="text-3xl font-bold text-center">
                            Bienvenido
                        </h1>
                        <div className="w-24 mx-auto mt-6 border-b-2" />
                        <TextInput
                            className="mt-10"
                            label="Dirección de correo electrónico"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <TextInput
                            className="mt-6"
                            label="Contraseña"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {props.errors && <span className="text-red-600">{Object.values(props.errors)[0]}</span>}
                        <label
                            className="flex items-center mt-6 select-none"
                            htmlFor="remember"
                        >
                            <input
                                name="remember"
                                id="remember"
                                className="mr-1"
                                type="checkbox"
                            />
                            <span className="text-sm">Recuérdame</span>
                        </label>

                        <div className="mt-10">
                            <GoogleLogin
                                clientId="683578408872-18g07ruk8nugoi2bpncpiln9a303faan.apps.googleusercontent.com"
                                buttonText="Iniciar sesión con Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            />

                        </div>


                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
                        <a
                            className="hover:underline text-center mb-4 md:mb-0"
                            tabIndex="-1"
                            href="#reset-password"
                        >
                            ¿Has olvidado la contraseña?
                        </a>
                        <LoadingButton
                            type="submit"
                            className="px-6 py-3 rounded bg-indigo-700 text-white text-sm font-bold whitespace-nowrap hover:bg-orange-500 focus:bg-orange-500"
                        >
                            Ingresar
                        </LoadingButton>
                    </div>
                </form>
                <Link href="./register">
                    <p className="text-center text-white mt-4">¿No tienes una cuenta?</p>
                </Link>
            </div>
        </div>
    );
};

export default Login;
