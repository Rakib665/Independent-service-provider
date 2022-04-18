import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './SharedPage/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Footer from './SharedPage/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RequiredAuth from './SharedPage/RequiredAuth/RequiredAuth';
import About from './pages/About/About';
// import RequiredAuth from './SharedPage/RequiredAuth/RequiredAuth';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<RequiredAuth>
          <About></About>
        </RequiredAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>

        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
