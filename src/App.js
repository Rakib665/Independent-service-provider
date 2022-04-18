import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Header from './SharedPage/Header/Header';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    </div>
  );
}

export default App;
