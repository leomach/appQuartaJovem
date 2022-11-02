import React from "react";
import { useRef } from "react"
import './index.css'
import { Link } from 'react-router-dom'

function Home() {
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    return (
        <div className="container">
            {/* <div className="logo">
                <img src="/img/logo.png" alt="logo Quarta Jovem" />
            </div> */}
            <div className="carousel" ref={carousel}>
                <div className="item">
                    <div className="info">
                        <h1>BEM VINDO</h1>
                        <h5>ao aplicativo da Quarta Jovem!</h5>
                        <div className="buttons">
                            <button onClick={handleRightClick} className="back">Voltar</button>
                            <button onClick={handleLeftClick} className="next">Avançar</button>
                        </div>
                    </div>
                </div>
                <div className="item2">
                    <div className="info">
                        <div className="name">
                            <h1>Nossas programações:</h1>
                            <h5>Quarta Jovem - Sábado - 18hrs</h5>
                            <h5>Célula Jovem - Segunda - 19:30hrs</h5>
                            <h5>Escola Bíblica Dominical - Domingo - 9hrs</h5>
                            <h5>Culto de celebração - Domingo - 18hrs</h5>
                        </div>
                        <div className="buttons">
                            <button onClick={handleRightClick} className="back">Voltar</button>
                            <button onClick={handleLeftClick} className="next">Avançar</button>
                        </div>
                    </div>
                </div>
                <div className="item3">
                    <div className="info">
                        <img src="/img/mapa.png" alt="mapa para quarta igreja" />
                        <h1>Saiba nos encontrar</h1>
                        <h5>Quer ver a gente no maps? <a href="https://goo.gl/maps/uLQeY4mqksg8pMfm6">Click aqui</a></h5>
                        <div className="buttons">
                            <button onClick={handleRightClick} className="back">Voltar</button>
                            <button onClick={handleLeftClick} className="next">Avançar</button>
                        </div>
                    </div>
                </div>
                <div className="item4">
                    <div className="info">
                        <h1>Participe</h1>
                        <h5>é de graça ;)</h5>
                        <div className="buttons">
                            <button onClick={handleRightClick} className="back">Voltar</button>
                            <button className="next">
                                <Link className="btn-login" to='/login'>Login / Inscreva-se</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home