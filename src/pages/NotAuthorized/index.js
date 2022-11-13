import React from "react";
import { useNavigate } from 'react-router-dom'
import './index.css'

function NotAuthorized () {
    const navigate = useNavigate()
    function handleClickUser (e) {
        e.preventDefault()
        navigate("/user")
    }
    function handleClickLogin (e) {
        e.preventDefault()
        navigate("/login")
    }
   
    return (
        <div className="not-authorized">
            <h1>VOCÊ NÃO PODE ACESSAR ESSA PAGINA</h1>
            <h3>Recarregue esta pagina e clique em um dos botões abaixo:</h3>
            <button onClick={handleClickUser}>Tente novamente</button>
            <h3>ou</h3>
            <button onClick={handleClickLogin}>Faça login novamente</button>
        </div>
        
    )
}

export default NotAuthorized