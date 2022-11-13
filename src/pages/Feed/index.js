import './index.css'
import NavbarUser from '../../components/NavbarUser'
import logo from './img/logo.png'

export default function Feed() {
    return (
        <div className="feed">
            <div className="tituloFeed1">
                <h4>Programações:</h4>
            </div>
            <div className="cards">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front1">
                            {/* <img src={logo} alt="" /> */}
                            <h3>Evento Destaque</h3>
                        </div>
                        <div className="flip-card-back1">
                            <div className="img">
                                <img src={logo} alt="" />
                            </div>
                            <h3>31/02 às 18h</h3>
                            <h1>Evento Destaque</h1>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front2">
                            <img src={logo} alt="" />
                        </div>
                        <div className="flip-card-back2">
                            <div className="img">
                                <img src={logo} alt="" />
                            </div>
                            <h3>Sabado às 18h</h3>
                            <h1>Quarta Jovem</h1>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front3">
                            {/* <img src={logo} alt="" /> */}
                            <h1>Célula</h1>
                        </div>
                        <div className="flip-card-back3">
                            <div className="img">
                                <img src={logo} alt="" />
                            </div>
                            <h3>Quarta às 19h</h3>
                            <h1>Célula</h1>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front4">
                            {/* <img src={logo} alt="" /> */}
                            <h1>EBD</h1>
                        </div>
                        <div className="flip-card-back4">
                            <div className="img">
                                <img src={logo} alt="" />
                            </div>
                            <h3>Domingo às 9:30h</h3>
                            <h1>EBD</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="em-breve">
                <h4>Home</h4>
                <h1>EM BREVE</h1>
            </div>
            <NavbarUser />
        </div>
    )
}