import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './SharedPage/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Footer from './SharedPage/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';


function App() {
  return (
    <div >
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/checkout' element={<Checkout></Checkout>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
