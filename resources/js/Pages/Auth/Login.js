import React, { useState } from "react";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import Logo from "../../Shared/Logo";
import TextInput from "../../Shared/TextInput";
import LoadingButton from "../../Shared/LoadingButton";
import { Inertia } from "@inertiajs/inertia";

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
    };

    const handleLogin = (googleData) => {
        console.log(googleData);
    };

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

                        {/* button on click goes to login-google*/}

                        <div className="mt-6 d-flex">
                        <div className="row">
                                <div class="col-md-3 border border-dark mx-4 d-flex text-center">
                                    <a
                                        className="btn btn-outline-dark"
                                        href="/login-google"
                                        role="button"
                                    ><p className="d-flex">
                                        <img
                                            width="20px"
                                            alt="Google sign-in"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                                        />
                                        Login with Google</p>
                                    </a>
                                </div>
                            </div>

                            {/* <form action="/login-google" method="get">
                                <button
                                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline d-flex justify-center items-center"
                                    type="submit"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-google"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                                    </svg>
                                    Iniciar sesión con Google
                                </button>
                            </form> */}
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
