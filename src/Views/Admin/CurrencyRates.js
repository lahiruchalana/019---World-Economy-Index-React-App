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
    const [addNewYear, setAddNewYear] = useState(2022);
    const [addNewMonth, setAddNewMonth] = useState("JANUARY");
    const [addNewDate, setAddNewDate] = useState(1);
    const [addNewRecordStatus, setAddNewRecordStatus] = useState("past");

    const yearList = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999]
    const monthList = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", 'NOVEMBER', "DECEMBER"];
    const dateList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

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

    var margin_top = {
        marginTop:'10px',
    };

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
                            <DropdownButton id="dropdown_basic_button" title="Currency" >
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item onClick={() => setCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                        <Col id="column_center">
                            <DropdownButton id="dropdown_basic_button" title="Equals Currency">
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

                    <div id="form_block">

                        <Row>
                            
                            <Col id="column_center">
                                <h6 id="column_left">Select Currency</h6>
                                <DropdownButton id="dropdown_basic_button" variant="outline-secondary" title={`${addNewCurrencyName}`} >
                                    {currencyNameList.map(currencyName => {
                                        return <Dropdown.Item onClick={() => setAddNewCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </Col>

                            <Col id="column_center">
                                <h6 id="column_left">Select Equals Currency</h6>
                                <DropdownButton  id="dropdown_basic_button" variant="outline-secondary" title={`${addNewEqualsCurrencyName}`}>
                                    {currencyNameList.map(currencyName => {
                                        return <Dropdown.Item onClick={() => setAddNewEqualsCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </Col>

                        </Row>

                        <br></br>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                            Currency Rate ({addNewEqualsCurrencyName})
                            </InputGroup.Text>
                            <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>

                        <Row>

                            <Col id="column_center">
                                <h6 id="column_left">Year</h6>
                                <DropdownButton  id="form_dropdown_basic_button" variant="outline-secondary" title={`${addNewYear}`}>
                                    {yearList.map(year => {
                                        return <Dropdown.Item onClick={() => setAddNewYear(year)}>{year}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </Col>

                            <Col id="column_center">
                                <h6 id="column_left">Month</h6>
                                <DropdownButton  id="form_dropdown_basic_button" variant="outline-secondary" title={`${addNewMonth}`}>
                                    {monthList.map(month => {
                                        return <Dropdown.Item onClick={() => setAddNewMonth(month)}>{month}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </Col>

                            <Col id="column_center">
                                <h6 id="column_left">Date</h6>
                                <DropdownButton  id="form_dropdown_basic_button" variant="outline-secondary" title={`${addNewDate}`}>
                                    {dateList.map(date => {
                                        return <Dropdown.Item onClick={() => setAddNewDate(date)}>{date}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </Col>

                        </Row>
                        
                        <Row>
                            
                            <Col id="column_center">
                                <h6 style={margin_top} id="column_left">Record Status</h6>
                                <DropdownButton  id="form_dropdown_basic_button" variant="outline-secondary" title={`${addNewRecordStatus}`}>
                                    <Dropdown.Item onClick={() => setAddNewRecordStatus("past")}>Past</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setAddNewRecordStatus("current")}>Current</Dropdown.Item>
                                </DropdownButton>
                            </Col>

                            <Col >
                                <br ></br>
                                <h5 style={margin_top} id="column_center">1 <a href="/#" id="blue_title">{addNewCurrencyName.toUpperCase()}</a> equals to <a href="/#" id="blue_title">{addNewEqualsCurrencyName.toUpperCase()}</a> rate</h5>                                                        
                            </Col>
                        </Row>

                        <br></br>
                        <br></br>
                        <Row>

                            <Col id="column_center">

                            </Col>

                            <Col id="column_center">
                                <div id='column_center'>
                                    <Button className='w-100' id='home_buttons' variant="primary" size="lg">Add/Update Data</Button>
                                </div>
                            </Col>

                        </Row>

                    </div>

                </Col>

            </Row>
        </div>
    );
}

export default CurrencyRates;