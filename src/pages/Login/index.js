import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import './index.css'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import Axios from "axios";
import jwt_decode from 'jwt-decode'


function Login() {
    const navigate = useNavigate()

    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            username: values.username,
            password: values.password,
        }).then((res) => {
            var token = res.data.token
            const user = jwt_decode(token)
            localStorage.setItem('token', token)
            localStorage.setItem('name', user.name)
            localStorage.setItem('lastName', user.lastName)
            localStorage.setItem('birth', user.birth)
            localStorage.setItem('whatsapp', user.whatsapp)
            window.location.reload(false)
        })
    }

    const validationLogin = yup.object().shape({
        username: yup.string().required("O usuário é obrigatório"),
        password: yup.string().required("A senha é obrigatória")
    })

    return (
        <div className="login">
            <div className="bg-img">
                <img onClick={() => navigate('/')} src="/img/logo.png" alt="logo Quarta Jovem" width='150px' />
            </div>
            <div className="content">
                <div className="heading">
                    <h2>Acessar conta</h2>
                </div>
                <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                    <Form className="signin-form">
                        <Field type="text" name="username"
                            placeholder="Usuário" autoComplete="off"
                        />
                        <ErrorMessage component="span" name="username" className="form-error" />
                        <Field type="password" name="password" placeholder="Senha"
                        />
                        <ErrorMessage component="span" name="password" className="form-error" />
                        <button type="submit">Login</button>
                    </Form>
                </Formik>
                <div className="footer-text">
                    <Link className="link" to="/">Esqueceu sua senha?</Link>
                    <div>
                        <p>Não tem uma conta?</p>
                        <Link className="link" to='/signin'>Crie aqui</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

