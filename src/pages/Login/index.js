import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import './index.css'

function Login () {
    const navigate =  useNavigate()
    return (
        <div className="login">
            <div className="bg-img">
                <img onClick={() => navigate('/')} src="/img/logo.png" alt="logo Quarta Jovem" width='150px' />
            </div>
            <div className="content">
                <div className="heading">
                {/* <img src="/img/logo.png" alt="logo Quarta Jovem" width='100px' /> */}
                <h2>Acessar conta</h2>
                </div>
                <form action="#">
                    <input type="text" name="username"
                    placeholder="Usuário" autoComplete="off" />
                    <input type="password" name="password" placeholder="Senha" />
                    <button onClick={() => navigate('/')}>Login</button>
                </form>
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
