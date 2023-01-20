import React from 'react';
// import ReactDOM from 'react-router-dom';
import AboutPage  from '../about';
import { Link, Route ,Routes } from 'react-router-dom';
import HomePage from '../home';
import ContactPage from '../contact';
import Nopage from '../nopage';

function Navbarfun() {
  return (
    <>
    
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/*' element={<Nopage/>} />
      </Routes>
    </>
  )
  
}

export default Navbarfun;
