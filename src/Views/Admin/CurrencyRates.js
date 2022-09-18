import React, {useEffect, useState} from "react";
import VerticalNavBar from "./VerticalNavBar";
import { useParams } from 'react-router';

import axios from "axios";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import * as Icon from 'react-bootstrap-icons';


function CurrencyRates() {
    const { currencyname, equalscurrencyname } = useParams(); 
    const [currencyList, setCurrencyList] = useState([]);
    const [currencyNameList, setCurrencyNameList] = useState([]);
    const [currencyName, setCurrencyName] = useState(currencyname);
    const [equalsCurrencyName, setEqualsCurrencyName] = useState(equalscurrencyname);
    const [currencyRateList, setCurrencyRateList] = useState([]);
    const [currencyRateId, setCurrencyRateId] = useState(null);
    const [addNewCurrencyName, setAddNewCurrencyName] = useState("USD");
    const [addNewEqualsCurrencyName, setAddNewEqualsCurrencyName] = useState("Euro");

    const currencyUrl = `http://localhost:8080/api/data/currency`;

    useEffect(() => {
        axios.get(currencyUrl).then((response) => {
            setCurrencyList(response.data);
        })

    }, [currencyUrl])
    
    useEffect(() => {
        setCurrencyNameList([]);
        
        currencyList.forEach(element => {
            setCurrencyNameList(oldArray => [...oldArray, element.currencyName])
        });

    }, [currencyList])    

    useEffect(() => {
        const currencyRateURL = `http://localhost:8080/api/data/currency/rate/all/${currencyName}/${equalsCurrencyName}`;

        axios.get(currencyRateURL).then((response) => {
            setCurrencyRateList(response.data);
        })
        
    }, [currencyName, equalsCurrencyName])

    function deleteTableData(id) {
        console.log("deleted " + id);
    }

    function updateTableData(id) {
        console.log("updated " + id);
    }

    console.log(currencyList);
    console.log(currencyRateList);
    console.log(currencyName + "/" + equalsCurrencyName);
    console.log(currencyNameList);
    console.log("delete or update = " + currencyRateId + " currencyRateId");


    return(
        <div className='admin_container'>
            <Row>
                <Col id="vartical_nav" xs lg={2}>
                    <VerticalNavBar/>
                </Col>

                <Col xs lg={4}>
                    <h2>Currency Rates</h2>
                    <div id='singele_line'></div>

                    <br></br>
                    
                    <Row>
                        
                        <Col id="column_center">
                            <DropdownButton id="dropdown-basic-button" title="Select Currency" >
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item onClick={() => setCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                        <Col id="column_center">
                            <DropdownButton id="dropdown-basic-button" title="Select Equals Currency">
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item onClick={() => setEqualsCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                    </Row>

                    <br></br>
                    <h5 id="column_center">1 <a href="/#" id="blue_title">{currencyName.toUpperCase()}</a> equals to <a href="/#" id="blue_title">{equalsCurrencyName.toUpperCase()}</a> rates in table</h5>

                    <div id='thin_singele_line'></div>
                    <br></br>

                    {/* table starts */}

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Rates</th>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Delete</th>
                            <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currencyRateList.map(element => {
                                return <tr>
                                            <td>{element.currencyRateId}</td>
                                            <td>{element.currencyRateValue} {equalsCurrencyName}</td>
                                            <td>{element.year}</td>
                                            <td>{element.month}</td>
                                            <td onClick={() => { 
                                                setCurrencyRateId(element.currencyRateId);
                                                deleteTableData(element.currencyRateId);  
                                             }}><Button variant="outline-secondary"><Icon.Trash color='white' size={16}/></Button></td>
                                            <td onClick={() => {
                                                setCurrencyRateId(element.currencyRateId);
                                                updateTableData(element.currencyRateId);
                                            }}><Button variant="outline-secondary"><Icon.ArrowRepeat color='white' size={16}/></Button></td>
                                        </tr>
                            })}
                        </tbody>
                    </Table>

                    {/* table ends */}

                </Col>

                <Col>
                    <h2>Add New Currency Rate</h2>
                    <div id='singele_line'></div>

                    <br></br>
                    <Row>
                        
                        <Col id="column_center">
                            <DropdownButton id="dropdown-basic-button" variant="outline-secondary" title={`${addNewCurrencyName}`} >
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item onClick={() => setAddNewCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                        <Col id="column_center">
                            <DropdownButton  id="dropdown-basic-button" variant="outline-secondary" title={`${addNewEqualsCurrencyName}`}>
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item onClick={() => setAddNewEqualsCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                    </Row>

                    <br></br>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup>

                    <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                        https://example.com/users/
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>

                </Col>

            </Row>
        </div>
    );
}

export default CurrencyRates;