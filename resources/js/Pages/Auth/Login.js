import React, { useState } from "react";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import Logo from "../../Shared/Logo";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";
import { Inertia } from "@inertiajs/inertia";
import GoogleLogin from "react-google-login";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const { appName, client_id } = usePage().props;

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

	const handleFailure = (response) => {
		console.log(response);
	}

	const handleLogin = (googleData) => {
		console.log(googleData);
        
	}

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
            <Head title={appName} />
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

                        {/* sign in with google */}

                        <div className="flex items-center justify-center mt-6">
						
						
                            <GoogleLogin
								clientId={client_id}
								buttonText="Iniciar sesión con Google"
								onSuccess={handleLogin}
								onFailure={handleFailure}
								cookiePolicy={'single_host_origin'}
							/>

                            

                        </div>
                    </div>
                    <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
                        <a
                            className="hover:underline"
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
            </div>
        </div>
    );
};

export default Login;
