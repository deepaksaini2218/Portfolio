import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './mycomponent/Home';
import About from './mycomponent/About';
import Contact from './mycomponent/Contact';
import Service from './mycomponent/Service';
import ScrollspyNav from "react-scrollspy-nav";

function App() {
  return (
    <div className="App">



      <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                 {/* <Router> */}
        <Navbar bg="dark" expand="lg" variant='dark' fixed="top">
          {/* <Container> */}
          <Navbar.Brand href="#home"> <img src="images/logorect.png" alt="" height="50px" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              
              <Nav.Link href="#section_1">Home</Nav.Link>
              <Nav.Link href="#section_2">About</Nav.Link>
              <Nav.Link href="#section_3">Contact</Nav.Link>
              {/* <Nav.Link href="/contactform">Contact form</Nav.Link> */}
              {/* <Nav.Link href="/login">Login</Nav.Link> */}
              {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
              <Nav.Link href="/service">Service</Nav.Link>
    
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>

        {/* <Routes> */}
          {/* <Route exact path="/login" element={<Login />}></Route> */}
          {/* <Route exact path="/" element={<Home />}></Route> */}
          {/* <Route exact path="/signup" element={<Signup />}></Route> */}
          {/* <Route exact path="/service" element={<Service />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route> */}
          {/* <Route exact path="/contactform" element={<ContactForm /> }></Route> */}


        {/* </Routes> */}
      {/* </Router> */}
                </ScrollspyNav>
                
                <div>
                    {/* <div style={{"height": "400px"}}><span></span></div> */}
                    <div id="section_1"  className='is-active'><span><Home /></span></div>
                    <div id="section_2" ><span><About /></span></div>
                    <div id="section_3" ><span><Contact /></span></div>
                   
                </div>
            {/* </div> */}

    </div>
  );
}

export default App;
