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
            whatsapp: values.whatsapp,
            name: values.name,
            lastName: values.lastName,
            birth: values.birth,
            sex: values.sex,
            status: values.status,
            children: values.children,
            schooling: values.schooling,
            deficiency: values.deficiency,
            work: values.work,
            type: values.type
        }).then((response) => { navigate("/login") })
    }

    const validationSignIn = yup.object().shape({
        username: yup.string().required("O usuário é obrigatório"),
        password: yup.string().required("A senha é obrigatória"),
        passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais").required("A confirmação é obrigatória"),
        type: yup.string().required("O tipo é obrigatório"),
        whatsapp: yup.number().required("WhatsApp é obrigatório"),
        name: yup.string().required("Digite o seu primeiro nome"),
        lastName: yup.string().required("Digite o seu sobrenome"),
        birth: yup.string().required("Digite sua data de nascimento"),
        sex: yup.string().required("Selecione um sexo"),
        status: yup.string().required("Selecione um estado civil"),
        children: yup.string().required("Selecione a quantidade de filhos"),
        schooling: yup.string().required("Selecione uma escolaridade"),
        deficiency: yup.string().required("Diga-nos se tem alguma deficiência ou não"),
        work: yup.string().required("Digite uma profissão/desenpregado/estudante"),
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
                        <Field type="text" name="name"
                            placeholder="Digite seu primeiro nome" autoComplete="off"
                        />
                        <ErrorMessage component="span" name="name" className="form-error" />
                        <Field type="text" name="lastName"
                            placeholder="Digite todos os seus sobrenomes" autoComplete="off"
                        />
                        <ErrorMessage component="span" name="lastName" className="form-error" />
                        <Field type="text" name="birth"
                            placeholder="Data de nascimento (DD/MM/AAAA)" autoComplete="off"
                        />
                        <ErrorMessage component="span" name="birth" className="form-error" />
                        <span><br />Sexo:</span>
                        <Field type="text" name="sex" placeholder="Masculino / Feminino" autoComplete="off"/>
                        <ErrorMessage component="span" name="sex" className="form-error" />
                        <span><br />Estado civil:</span>
                        <Field type="text" name="status"/>
                        <ErrorMessage component="span" name="status" className="form-error" autoComplete="off" />
                        <span><br />Possui filhos? Se sim, quantos?</span>
                        <Field type="text" name="children"/>
                        <ErrorMessage component="span" name="children" className="form-error" autoComplete="off" />
                        <span><br />Escolaridade:</span>
                        <Field type="text" name="schooling"/>
                        <ErrorMessage component="span" name="schooling" className="form-error" autoComplete="off" />
                        <span><br />Possui alguma deficiência?</span>
                        <Field type="text" name="deficiency" placeholder="Sim / Não" autoComplete="off" />
                        <ErrorMessage component="span" name="deficiency" className="form-error" />
                        <Field type="Text" name="work"
                            placeholder="Profissão" autoComplete="off"
                        />
                        <ErrorMessage component="span" name="work" className="form-error" />
                        <Field type="Text" name="whatsapp"
                            placeholder="WhatsApp (somente numeros)" autoComplete="off"
                        />
                        <ErrorMessage component="span" name="whatsapp" className="form-error" />
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
