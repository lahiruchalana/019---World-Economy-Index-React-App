import React, {useEffect, useState} from "react";
import VerticalNavBar from "./Components/VerticalNavBar";
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
import CarouselComponent from "./Components/CarouselComponent";


function CurrencyRates() {
    const { currencyname, equalscurrencyname } = useParams(); 
    const [currencyList, setCurrencyList] = useState([]);
    const [currencyNameList, setCurrencyNameList] = useState([]);
    const [currencyName, setCurrencyName] = useState(currencyname);
    const [equalsCurrencyName, setEqualsCurrencyName] = useState(equalscurrencyname);
    const [currencyRateList, setCurrencyRateList] = useState([]);
    const [deleteCurrencyRateId, setDeleteCurrencyRateId] = useState(null);
    const [updateCurrencyRateId, setUpdateCurrencyRateId] = useState(null);
    const [addNewCurrencyName, setAddNewCurrencyName] = useState("USD");
    const [addNewEqualsCurrencyName, setAddNewEqualsCurrencyName] = useState("Euro");
    const [addNewCurrency, setAddNewCurrency] = useState(null);
    const [addNewEqualsCurrency, setAddNewEqualsCurrency] = useState(null);
    const [addNewCurrencyRateValue, setAddNewCurrencyRateValue] = useState("");
    const [addNewYear, setAddNewYear] = useState(2022);
    const [addNewMonth, setAddNewMonth] = useState("JANUARY");
    const [addNewDate, setAddNewDate] = useState(1);
    const [addNewRecordStatus, setAddNewRecordStatus] = useState("current");
    const [isResponseErrorOnGetCurrencyRates, setIsResponseErrorOnGetCurrencyRates] = useState(false);
    const [post, setPost] = useState([]);
    const [placeHolderForCurrencyRateValue, setPlaceHolderForCurrencyRateValue] = useState(0.00);

    const yearList = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999]
    const monthList = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", 'NOVEMBER', "DECEMBER"];
    const dateList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const currencyUrl = `http://localhost:8080/api/data/currency`;
    const currencyRatePostUrl = "http://localhost:8080/api/data/currency/rate";

    useEffect(() => {   // get currency data (purpose to store in drop down buttons)
        axios.get(currencyUrl).then((response) => {
            setCurrencyList(response.data);
        })
        .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log("Reason For Error : " + error.response.data.message);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
        })

    }, [currencyUrl])
    
    useEffect(() => {   // create currencyNameList using currencyList (includes only currencyNames)
        setCurrencyNameList([]);
        
        currencyList.forEach(element => {
            setCurrencyNameList(oldArray => [...oldArray, element.currencyName])
        });

    }, [currencyList])    

    useEffect(() => {   // load currency rates relavent to currencyName and equalsCurrencyName
        const currencyRateGetURL = `http://localhost:8080/api/data/currency/rate/all/${currencyName}/${equalsCurrencyName}`;

        axios.get(currencyRateGetURL).then((response) => {
            setCurrencyRateList(response.data);
            setIsResponseErrorOnGetCurrencyRates(false);
        })
        .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log("Reason For Error : " + error.response.data.message);
              console.log(error.response.status);
              console.log(error.response.headers);
              setIsResponseErrorOnGetCurrencyRates(true);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
        })
        
    }, [currencyName, equalsCurrencyName, post.length])

    function addData() {    
        if (addNewCurrency === null || addNewEqualsCurrency === null) {
            axios.post(currencyRatePostUrl, {
                currencyRateValue: addNewCurrencyRateValue,
                recordStatus: addNewRecordStatus,
                year: addNewYear,
                month: addNewMonth,
                currency: {
                    currencyId: 2
                },
                equalsCurrency: {
                    currencyId: 1
                }
            })
            .then((response) => {
                setPost(oldList => [...oldList, response.data]);
            })
            .catch(function (error) {
                if (error.response) {
                  // Request made and server responded
                  console.log(error.response.data);
                  console.log("Reason For Error : " + error.response.data.message);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
            })
            
        }

        axios.post(currencyRatePostUrl, {
            currencyRateValue: addNewCurrencyRateValue,
            recordStatus: addNewRecordStatus,
            year: addNewYear,
            month: addNewMonth,
            currency: {
                currencyId: addNewCurrency.currencyId
            },
            equalsCurrency: {
                currencyId: addNewEqualsCurrency.currencyId
            }
        })
        .then((response) => {
            setPost(oldList => [...oldList, response.data]);
        })
        .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log("Reason For Error : " + error.response.data.message);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
        })
        

        console.log(post);
    }

    function updateData() {
        // updateCurrencyRateId

        // using this Id update the relavent data of currency - axios PUT method

        //todo 
    }

    function deleteTableData(id) {
        console.log("deleted " + id);
    }

    function updateFormData(element) {
        setAddNewCurrencyName(element.currency.currencyName);
        setAddNewEqualsCurrencyName(element.equalsCurrency.currencyName);
        setAddNewCurrencyRateValue(element.currencyRateValue);
        setPlaceHolderForCurrencyRateValue(element.currencyRateValue);
        setAddNewYear(element.year);
        setAddNewMonth(element.month);
        setAddNewRecordStatus(element.recordStatus);

        console.log("updating : " + element.currencyRateId);
    }

    function cancelForm() {
        setUpdateCurrencyRateId(null);
        setAddNewCurrencyRateValue("");
        setPlaceHolderForCurrencyRateValue(0.00);
        setAddNewYear(2022);
        setAddNewMonth("JANUARY");
        setAddNewRecordStatus("current");
        setAddNewDate(1);

    }

    console.log(currencyList);
    console.log(currencyRateList);
    console.log(currencyNameList);
    console.log(currencyName + "/" + equalsCurrencyName);
    console.log("delete = " + deleteCurrencyRateId + " currencyRateId");
    console.log("update = " + updateCurrencyRateId + " currencyRateId");

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
                    
                    <div id='single_line'></div>
                    <h2>Currency Rates</h2>
                    <div id='single_line'></div>

                    <br></br>
                    
                    <Row>
                        
                        <Col id="column_center">
                            <DropdownButton id="dropdown_basic_button" title={`${currencyName}`} >
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item onClick={() => setCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                        <Col id="column_center">
                            <DropdownButton id="dropdown_basic_button" title={`${equalsCurrencyName}`}>
                                {currencyNameList.map(currencyName => {
                                    return <Dropdown.Item onClick={() => setEqualsCurrencyName(currencyName)}>{currencyName}</Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>

                    </Row>

                    <br></br>
                    <h5 id="column_center">1 <a href="/#" id="blue_title">{currencyName.toUpperCase()}</a> = <a href="/#" id="blue_title">{equalsCurrencyName.toUpperCase()}</a> Rates In The Table</h5>

                    <div id='thin_single_line'></div>
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
                            {isResponseErrorOnGetCurrencyRates === true  ? <tr>
                                <td>No Data</td>
                                <td>No Data</td>
                                <td>No Data</td>
                                <td>No Data</td>
                                <td>No Data</td>
                                <td>No Data</td>
                                </tr> :  currencyRateList.map(element => {
                                return <tr>
                                            <td>{element.currencyRateId}</td>
                                            <td>{element.currencyRateValue} {equalsCurrencyName}</td>
                                            <td>{element.year}</td>
                                            <td>{element.month}</td>
                                            <td onClick={() => { 
                                                setDeleteCurrencyRateId(element.currencyRateId);
                                                deleteTableData(element.currencyRateId);  
                                             }}><Button variant="outline-secondary"><Icon.Trash color='white' size={16}/></Button></td>
                                            <td onClick={() => {
                                                setUpdateCurrencyRateId(element.currencyRateId);
                                                updateFormData(element);
                                            }}><Button variant="outline-secondary"><Icon.ArrowRepeat color='white' size={16}/></Button></td>
                                        </tr>
                            })}
                        </tbody>
                    </Table>

                    {/* table ends */}

                </Col>

                <Col>
                    <div id='single_line'></div>
                    <h2>Add New Currency Rate</h2>
                    <div id='single_line'></div>

                    <br></br>

                    {/* add/ update the currency rate data starts */}

                    <div id="form_block">

                        <Row>
                            
                            <Col id="column_center">
                                <h6 id="column_left">Select Currency</h6>
                                <DropdownButton id="dropdown_basic_button" variant="outline-secondary" title={`${addNewCurrencyName}`} >
                                    {currencyList.map(currency => {
                                        return <Dropdown.Item onClick={() => {
                                            setAddNewCurrency(currency); 
                                            setAddNewCurrencyName(currency.currencyName);
                                        }}>{currency.currencyName}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </Col>

                            <Col id="column_center">
                                <h6 id="column_left">Select Equals Currency</h6>
                                <DropdownButton  id="dropdown_basic_button" variant="outline-secondary" title={`${addNewEqualsCurrencyName}`}>
                                    {currencyList.map(currency => {
                                        return <Dropdown.Item onClick={() => {
                                            setAddNewEqualsCurrency(currency);
                                            setAddNewEqualsCurrencyName(currency.currencyName);
                                        }}>{currency.currencyName}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </Col>

                        </Row>

                        <br></br>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                            <div id="text_bold">Currency Rate ({addNewEqualsCurrencyName}) </div>
                            </InputGroup.Text>
                            <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setAddNewCurrencyRateValue(e.target.value)}
                            placeholder={`${placeHolderForCurrencyRateValue}`}
                            value={`${addNewCurrencyRateValue}`}
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
                            </Col>
                            
                        </Row>

                        <Row>

                            <Col  >
                                <br ></br>
                                <div id="extra_thin_single_line"></div>
                                <h5 style={margin_top} id="column_center">1 <a href="/#" id="blue_title">{addNewCurrencyName.toUpperCase()}</a> = <a href="/#" id="blue_title">{addNewCurrencyRateValue} {addNewEqualsCurrencyName.toUpperCase()}</a> Rate</h5> 
                                <div id="extra_thin_single_line"></div>
                            </Col>
                            
                        </Row>

                        <br></br>
                        <br></br>
                        <Row>

                            <Col id="column_center">

                            </Col>

                            <Col id="column_center">
                                <div id='column_center'>
                                    <Button onClick={cancelForm} className='w-100' id='home_buttons' variant="primary" size="lg">Cancel</Button>
                                </div>
                            </Col>

                            <Col id="column_center">
                                <div id='column_center'>
                                    { 
                                    updateCurrencyRateId === null ? <Button onClick={addData} className='w-100' id='home_buttons' variant="primary" size="lg">Add Data</Button>
                                    : <Button onClick={updateData} className='w-100' id='home_buttons' variant="primary" size="lg">Update Data</Button> 
                                    }
                                </div>
                            </Col>

                        </Row>

                    </div>

                    <br></br>
                    <Row>

                        <Col>

                            <CarouselComponent />
                           
                        </Col>

                        <Col>

                            <div id="margin_top_10"></div>
                            <div id='column_center'>
                                <br></br>
                                <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Create Latest News<a href='/#' id='button_sub_title_blue'></a></Button>
                            </div>

                            <div id='column_center'>
                                <br></br>
                                <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Create Social Media Posts<a href='/#' id='button_sub_title_blue'></a></Button>
                            </div>

                            <div id='column_center'>
                                <br></br>
                                <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Stock Market<a href='/#' id='button_sub_title_blue'></a></Button>
                            </div>

                            <div id='column_center'>
                                <br></br>
                                <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Overview<a href='/#' id='button_sub_title_blue'></a></Button>
                            </div>  

                        </Col>

                    </Row>

                    {/* add/ update the currency rate data ends */}

                </Col>

            </Row>
        </div>
    );
}

export default CurrencyRates;