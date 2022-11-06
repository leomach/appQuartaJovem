import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './index.css'
import Axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'

function SignIn() {
    const navigate = useNavigate()


    const handleClickSignIn = (values) => {
        Axios.post("http://localhost:3001/register", {
            username: values.username,
            password: values.password,
            type: values.type
        }).then((response) => {console.log(response)})
    }

    const validationSignIn = yup.object().shape({
        username: yup.string().required("O usuário é obrigatório"),
        password: yup.string().required("A senha é obrigatória"),
        passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais").required("A confirmação é obrigatória"),
        type: yup.string().required("O tipo é obrigatório")
    })

    return (
        <div className="signin">
            <div className="bg-img">
                <img onClick={() => navigate('/')} src="/img/logo.png" alt="logo Quarta Jovem" width='150px' />
            </div>
            <div className="content">
                <div className="heading">
                    <h2>Criar conta</h2>
                </div>
                <Formik initialValues={{ type: '2' }} onSubmit={handleClickSignIn} validationSchema={validationSignIn}>
                    <Form className="signin-form">
                        <Field type="text" name="username"
                            placeholder="Usuário" autoComplete="off"
                            />
                        <ErrorMessage component="span" name="username" className="form-error" />
                        <Field type="password" name="password" placeholder="Senha"
                            />
                        <ErrorMessage component="span" name="password" className="form-error" />
                        <Field type="password" name="passwordConfirm" placeholder="Confirme sua senha"
                            />
                        <ErrorMessage component="span" name="passwordConfirm" className="form-error" />
                        <Field className="tipo" name="type" id="type" />
                        <ErrorMessage component="span" name="type" className="form-error" />
                        <button type="submit">Criar</button>
                    </Form>
                </Formik>
                <div className="footer-text">
                    <div>
                        <p>Já tem uma conta?</p>
                        <Link className="link" to='/login'>Entre agora!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
