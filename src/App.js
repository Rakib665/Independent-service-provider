import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './SharedPage/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Footer from './SharedPage/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
