import Home from './pages/Home'
import User from './pages/User';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import NotAuthorized from './pages/NotAuthorized';
import InscricaoSocio from './pages/InscricaoSocio';
import Celula from './pages/Celula';
import Eventos from './pages/Eventos';
import Feed from './pages/Feed';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import jwt_decode from 'jwt-decode'
let typeUser = function () {
  if (localStorage.getItem("token") != undefined) {
    var token = localStorage.getItem("token")
    let user = jwt_decode("Bearer " + token).type
    if (user == 2) {
      return true
    } else { return false }
  } else { return false }
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={/*typeUser() ?*/ <User />/* : <Navigate to="/not"/>*/} />
          <Route path='/signin' element={typeUser() ? <Navigate to="/user" /> : <SignIn />} />
          <Route path='/login' element={typeUser() ? <Navigate to="/user" /> : <Login />} />
          <Route path='/inscricao' element={/*typeUser() ?*/ <InscricaoSocio />/* : <Navigate to="/not"/>*/} />
          <Route path='/celula' element={/*typeUser() ?*/ <Celula />/* : <Navigate to="/not"/>*/} />
          <Route path='/eventos' element={/*typeUser() ?*/ <Eventos />/* : <Navigate to="/not"/>*/} />
          <Route path='/feed' element={/*typeUser() ?*/ <Feed />/* : <Navigate to="/not"/>*/} />

          <Route path='/not' element={<NotAuthorized />} />
          <Route path='*' element={<h1>404<br />PÁGINA NÃO ENCONTRADA</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
