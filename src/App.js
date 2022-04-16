import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Componentes/Booking/Booking';
import Header from './Componentes/Header/Header';
import Home from './Componentes/Home/Home';
import Login from './Componentes/Login/Login';
import SignUp from './Componentes/SignUp/SignUp';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
