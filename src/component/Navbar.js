import React from 'react';
import AboutPage  from '../about';
import { Link, Route ,Routes } from 'react-router-dom';
 import HomePage from '../home';
import ContactPage from '../contact';
import Nopage from '../nopage';
import Mainfun from './Main';
import Todo from '../component/Todo';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Signup from './Signup';
import Userdetails from './Userdetails';
import Newtodo from './Newtodo';
import Reactform from './Reactform';


function Navbarfun() {
  return (
    <>


<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/todo">
            <Nav.Link>Todo</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
            <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/userdetail">
            <Nav.Link>User Details</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/newtodo">
            <Nav.Link>Todo using UseReducer</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/reactform">
            <Nav.Link>React Form</Nav.Link>
            </LinkContainer>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path="/id/:id" element={ <Mainfun/>}/>
      <Route path="/todo" element={ <Todo/>}/>
      <Route path="/signup" element={ <Signup/>}/>
      <Route path="/userdetail" element={<Userdetails/>}/>
      <Route path="/newtodo" element={<Newtodo/>}/>
      <Route path="/reactform" element={<Reactform/>} />
      <Route path='/*' element={<Nopage value="page not found" /> } />
      </Routes>
    </>
  )
}

export default Navbarfun;
