import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos CSS
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import Pizza from './components/Pizza';


function App() {

  return (
    <>
    <Navbar/>
    {/*<Home />*/}
    {/*<Register/>*/}
    {/*<Login/>*/}
    {/*<Cart/>*/}
    <Pizza/>
    <Footer/>
    </>
  )
}

export default App
