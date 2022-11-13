import React from "react";
import './index.css'
import NavbarUser from "../../components/NavbarUser";
import { useNavigate } from 'react-router-dom'

function User() {
const navigate = useNavigate()

    const token = localStorage.getItem("token")
    const name = localStorage.getItem("name")
    const lastName = localStorage.getItem("lastName")
    const birth = localStorage.getItem("birth")
    const whatsapp = localStorage.getItem("whatsapp")
    

    return (
        <div className="user">
            <div className="perfil">
                <div className="img">
                    <img src="" alt="" />
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h3>{lastName}</h3>
                    <h4>{birth}</h4>
                </div>
            </div>
            <div className="info2">
                    <h6>Biografia:</h6>
                    <p>{token}</p>
                    <a href={`https://api.whatsapp.com/send?phone=${whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <NavbarUser />
        </div>
    )
}

export default User
