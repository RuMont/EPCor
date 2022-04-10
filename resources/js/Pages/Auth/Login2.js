import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';

import Button from "../../Shared/Button";
import Input from "../../Shared/Input";
import Layout from "../../Shared/Layout2";


const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post('auth', values);
    }


    return (
        <Layout>
            <section className="w-1/2 mx-auto">
                <div className="my-12">
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            labelText="Dirección de correo electrónico"
                            name="email"
                            id="email"
                            required
                            value={values.email}
                            onChange={handleChange}
                        />
                        <Input
                            type="password"
                            labelText="Contraseña"
                            name="password"
                            id="password"
                            required
                            value={values.password}
                            onChange={handleChange}
                        />
                        <div className="mt-8 flex justify-center">
                            <Button
                                type="submit"
                            >
                                Iniciar sesión
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Login