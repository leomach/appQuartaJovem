import Home from './pages/Home'
import User from './pages/User';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<h1>404<br/>PÁGINA NÃO ENCONTRADA</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
