import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import './index.css'

function SignIn () {
    const navigate =  useNavigate()

    function handleSignIn () {
        // chamada api
    }

    return (
        <div className="signin">
            <div className="bg-img">
                <img onClick={() => navigate('/')} src="/img/logo.png" alt="logo Quarta Jovem" width='150px' />
            </div>
            <div className="content">
                <div className="heading">
                {/* <img src="/img/logo.png" alt="logo Quarta Jovem" width='200px' /> */}
                <h2>Criar conta</h2>
                </div>
                <form action="#">
                    <input type="text" name="username"
                    placeholder="Usuário" autoComplete="off" />
                    <input type="password" name="password" placeholder="Senha" />
                    <button>Criar</button>
                </form>
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
