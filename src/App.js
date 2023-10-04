// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams, Link, Navigate } from 'react-router-dom'
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import Admindashboard from './Components/Admindashboard';
import Order from './Components/Order';
import AdminOrders from './Components/AdminOrders';
import AdminMenu from './Components/AdminMenu';
import AdminReport from './Components/AdminReport';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/adminlogin' element={<AdminLogin />}></Route>
        <Route path='/admindashboard'>
    
          <Route path=':adminOrders'  element={<Admindashboard />}></Route>

        </Route>
        <Route path='/order'>
          <Route path=':orderid' element={<Order />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
