import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='d-flex justify-content-between fs-4 fw-normal' >
                <Navbar.Brand as={Link} to='/'>
                <img height={70} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >

                    <Form className=" me-auto mx-auto d-flex ">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 fs-4"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Nav
                        className=" my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/'>News</Nav.Link>
                        <Nav.Link as={Link} to='/'>Destination</Nav.Link>
                        <Nav.Link as={Link} to='/'>BLog</Nav.Link>
                        <Nav.Link as={Link} to='/'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/signup'>SignUp</Nav.Link>
                       
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;