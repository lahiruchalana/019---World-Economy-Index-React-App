import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {

    const [show, setShow] = useState(false);

    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }


    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">World Economy Index</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <NavDropdown title="Economics" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                        <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Industry" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                        <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Market" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Politics" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Technology" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Economy Forum" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Researches" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Academy" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Currency" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Country" id="navbarScrllingDropdown" show={show} onMouseEnter={showDropdown}  onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search Economics"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header