import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    const [dropdownEconomicsOpen, toggleDropdownEconomicsOpen] = useState(false);
    const [dropdownIndustryOpen, toggleDropdownIndustryOpen] = useState(false);
    const [dropdownMarketOpen, toggleDropdownMarketOpen] = useState(false);
    const [dropdownPoliticsOpen, toggleDropdownPoliticsOpen] = useState(false);
    const [dropdownTechnologyOpen, toggleDropdownTechnologyOpen] = useState(false);
    const [dropdownForumOpen, toggleDropdownForumOpen] = useState(false);
    const [dropdownResearchesOpen, toggleDropdownResearchesOpen] = useState(false);
    const [dropdownAcademyOpen, toggleDropdownAcademyOpen] = useState(false);
    const [dropdownCurrencyOpen, toggleDropdownCurrencyOpen] = useState(false);
    const [dropdownCountryOpen, toggleDropdownCountryOpen] = useState(false);
    const [dropdownInvestmentsOpen, toggleDropdownInvestmentsOpen] = useState(false);

    var style_navbar = {
        backgroundColor: 'black'
    };


    return(
        <div>
            <Navbar style={style_navbar} variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">World Economy Index</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <NavDropdown title="Economics" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownEconomicsOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownEconomicsOpen(false);
                            }}
                            show={dropdownEconomicsOpen}>
                        <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">GDP Per Capita</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Foreign Reserves</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Industry" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownIndustryOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownIndustryOpen(false);
                            }}
                            show={dropdownIndustryOpen}>
                            <NavDropdown.Item href="#action3">Nuclear</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Oil</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Space</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Army</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Automobile</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Marine</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Transport</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Market" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownMarketOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownMarketOpen(false);
                            }}
                            show={dropdownMarketOpen}>
                            <NavDropdown.Item href="#action3">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">British Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">NASDAQ</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Shanghai</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Amsterdam</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Paris</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Tokyo</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">New Delhi</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Politics" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownPoliticsOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownPoliticsOpen(false);
                            }}
                            show={dropdownPoliticsOpen}>
                            <NavDropdown.Item href="#action3">Global</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Local</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Asia</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Europe</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">America</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Africa</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Australia</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Technology" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownTechnologyOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownTechnologyOpen(false);
                            }}
                            show={dropdownTechnologyOpen}>
                            <NavDropdown.Item href="#action3">Industrial</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Space</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Nuclear</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Automobile</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Forum" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownForumOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownForumOpen(false);
                            }}
                            show={dropdownForumOpen}>
                            <NavDropdown.Item href="#action3">Profession's Forum</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Global Forum</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Social Media</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Researches" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownResearchesOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownResearchesOpen(false);
                            }}
                            show={dropdownResearchesOpen}>
                            <NavDropdown.Item href="#action3">Profession Researches</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Gratuates Researches</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Undergraduate Researches</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Currency" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownCurrencyOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownCurrencyOpen(false);
                            }}
                            show={dropdownCurrencyOpen}>
                            <NavDropdown.Item href="#action3">Currency Rates</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Exchanges</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Country" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownCountryOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownCountryOpen(false);
                            }}
                            show={dropdownCountryOpen}>
                            <NavDropdown.Item href="#action3">Countries</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Continents</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Academy" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownAcademyOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownAcademyOpen(false);
                            }}
                            show={dropdownAcademyOpen}>
                            <NavDropdown.Item href="#action3">Register for Academy</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Login</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Courses</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">New Courses</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Popular Courses</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Exams</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Results</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Information System</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Investments" id="navbar_scrolling_dropdown" onMouseEnter={() => {
                            toggleDropdownInvestmentsOpen(true);}}
                            onMouseLeave={() => {
                                toggleDropdownInvestmentsOpen(false);
                            }}
                            show={dropdownInvestmentsOpen}>
                            <NavDropdown.Item href="#action3">Register for Investments</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Login</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Stock Market</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Crypto</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Enterprises</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Real States</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Other</NavDropdown.Item>
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