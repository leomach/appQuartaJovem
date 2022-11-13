import './index.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import Home from './icons/home.png'
import User from './icons/user.png'
import Event from './icons/event.png'
import Grupo from './icons/grupo.png'
import Handshake from './icons/handshake.png'

export default function NavbarUser() {
    const navigate = useNavigate()


    return (
        <div className='navbarUser'>
            <div className="eventsNavbar">
                <img src={Event} onClick={() => navigate('/eventos')} width="32px" alt="event" />
            </div>
            <div className="celulaNavbar">
                <img src={Grupo} onClick={() => navigate('/celula')} width="32px" alt="celula" />
            </div>
            <div className="homeNavbar">
                <img src={Home} onClick={() => navigate('/feed')} width="32px" alt="home" />
            </div>
            <div className="sociosNavbar">
                <img src={Handshake} onClick={() => navigate('/inscricao')}  width="32px" alt="handshake" />
            </div>
            <div className="userNavbar">
                <img src={User} onClick={() => navigate('/user')} alt="user" />
            </div>
        </div>
    )
}