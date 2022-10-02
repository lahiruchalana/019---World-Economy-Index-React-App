import React, {useState, useEffect} from "react";
import VerticalNavBar from "./Components/VerticalNavBar";

import axios from "axios";

import swal from 'sweetalert';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import * as Icon from 'react-bootstrap-icons';
import CarouselComponent from "./Components/CarouselComponent";


function Country() {
    const [currencyList, setCurrencyList] = useState([]);
    const [currencyNameList, setCurrencyNameList] = useState([]);
    const [currencyName, setCurrencyName] = useState("usa");
    const [currencyRateList, setCurrencyRateList] = useState([]);
    const [deleteCurrencyRateId, setDeleteCurrencyRateId] = useState(null);
    const [updateCurrencyRateId, setUpdateCurrencyRateId] = useState(null);
    const [addNewCurrency, setAddNewCurrency] = useState(null);
    const [addNewCurrencyName, setAddNewCurrencyName] = useState("USD");
    const [addNewEqualsCurrency, setAddNewEqualsCurrency] = useState(null);
    const [addNewCurrencyRateValue, setAddNewCurrencyRateValue] = useState("");
    const [addNewYear, setAddNewYear] = useState(2022);
    const [addNewMonth, setAddNewMonth] = useState("JANUARY");
    const [addNewDay, setAddNewDay] = useState(1);
    const [addNewRecordStatus, setAddNewRecordStatus] = useState("current");
    const [isResponseErrorOnGetCurrencyRates, setIsResponseErrorOnGetCurrencyRates] = useState(false);
    const [currencyRateResponse, setCurrencyRateResponse] = useState([]);
    const [placeHolderForCurrencyRateValue, setPlaceHolderForCurrencyRateValue] = useState("Country");
    const [sortingProperty, setSortingProperty] = useState("Date");
    const [order, setOrder] = useState("Asc");
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPage, setTotalPage] = useState(1);

    const yearList = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999]
    const monthList = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", 'NOVEMBER', "DECEMBER"];
    const dayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const currencyUrl = "http://localhost:8080/world-economy-index/api/data/countries";
     
    useEffect(() => {   // get currency data (purpose to store in drop down buttons)
        axios.get(`${currencyUrl}/countries-pagination?&pageNumber=0&pageSize=300`).then((response) => {
            setCurrencyList(response.data.content);
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log("Reason For Error : " + error.response.data.message);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
        })

    }, [currencyUrl])
    
    useEffect(() => {   // create currencyNameList using currencyList (includes only currencyNames)
        setCurrencyNameList([]);
        
        currencyList.forEach(element => {
            setCurrencyNameList(oldArray => [...oldArray, element.countryName])
        });

    }, [currencyList])    

    useEffect(() => {   // load currency rates relavent to currencyName 
        axios.get(`${currencyUrl}/countries-pagination?&pageNumber=${pageNumber}&pageSize=12`).then((response) => {
            setCurrencyRateList(response.data.content);
            setIsResponseErrorOnGetCurrencyRates(false);
            setTotalPage(response.data.totalPages);

            console.log(`total pages = ${response.data.totalPages}`);
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log("Reason For Error : " + error.response.data.message);
              console.log(error.response.status);
              console.log(error.response.headers);
              if (error.response.status === 500){
                  setIsResponseErrorOnGetCurrencyRates(true);

                  swal({
                    title: `${currencyName.toUpperCase()} Does Not Exist Records`,
                    text: `Change Currency!`,
                    icon: "warning",
                    timer: 20000,
                });

              }
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
        })
        
    }, [currencyName, currencyRateResponse.length, sortingProperty, order, pageNumber, totalPage])

    function addData() {    // post a currency rate record
        if (addNewCurrency === null && addNewEqualsCurrency === null) { // after loaded the page this execute for adding (without selecting currencies - default there)
            axios.post(currencyUrl, {
                currencyRateValue: addNewCurrencyRateValue,
                recordStatus: addNewRecordStatus,
                year: addNewYear,
                month: addNewMonth,
                day: addNewDay,
                currency: {
                    currencyId: 2
                },
                equalsCurrency: {
                    currencyId: 1
                }
            })
            .then((response) => {
                setCurrencyRateResponse(oldList => [...oldList, response.data]);
            })
            .catch(function (error) {
                if (error.response) {
                  console.log(error.response.data);
                  console.log("Reason For Error : " + error.response.data.message);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                  if (error.response.status === 500) {

                    if(error.response.data.exceptionId == "data.already-exist") {
                    
                        swal({
                            title: `${currencyName.toUpperCase()}  Already Exist A Currency Rate Records For "${addNewYear}-${addNewMonth}-${addNewDay}" Date`,
                            text: `Change Date or Update!`,
                            icon: "error",
                            timer: 30000,
                        });
    
                    } 

                  }
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log('Error', error.message);
                }
            })

            swal({
                title: `Successfully Added A New Data`,
                icon: "success",
                timer: 8000,
            });
    
            if (isNaN(addNewCurrencyRateValue)) {
                swal({
                    title: `"${addNewCurrencyRateValue}" Does Not A Number`,
                    text: `Change Currency Rate Value!`,
                    icon: "error",
                    timer: 15000,
                });
            }
            
            
        }

        axios.post(currencyUrl, {   // when change two currencies 
            currencyRateValue: addNewCurrencyRateValue,
            recordStatus: addNewRecordStatus,
            year: addNewYear,
            month: addNewMonth,
            day: addNewDay,
            currency: {
                currencyId: addNewCurrency.currencyId
            },
            equalsCurrency: {
                currencyId: addNewEqualsCurrency.currencyId
            }
        })
        .then((response) => {
            setCurrencyRateResponse(oldList => [...oldList, response.data]);
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.data.exceptionId)
              console.log("Reason For Error : " + error.response.data.message);
              console.log(error.response.status);
              console.log(error.response.headers);
              if (error.response.status === 500) {

                if(error.response.data.exceptionId == "data.already-exist") {
                    
                    swal({
                        title: `${currencyName.toUpperCase()}  Already Exist A Currency Rate Records For "${addNewYear}-${addNewMonth}-${addNewDay}" Date`,
                        text: `Change Date or Update!`,
                        icon: "error",
                        timer: 30000,
                    });

                } 


              }
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
        })

        swal({
            title: `Successfully Added A New Data`,
            icon: "success",
            timer: 8000,
        });

        if (isNaN(addNewCurrencyRateValue)) {
            swal({
                title: `"${addNewCurrencyRateValue}" Does Not A Number`,
                text: `Change Currency Rate Value!`,
                icon: "error",
                timer: 20000,
            });
        }
        
    }

    function updateData() {   // update the record of currency rate
        axios.put(`${currencyUrl}/currencies/${addNewCurrency.currencyId}/currencyRates/${updateCurrencyRateId}`, {
            currencyRateValue: addNewCurrencyRateValue,
            recordStatus: addNewRecordStatus,
            year: addNewYear,
            month: addNewMonth,
            day: addNewDay,
            equalsCurrency: {
                currencyId: addNewEqualsCurrency.currencyId
            }
        })
        .then((response) => {
            setCurrencyRateResponse(oldList => [...oldList, response.data]);
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log("Reason For Error : " + error.response.data.message);
              console.log(error.response.status);
              console.log(error.response.headers);
              if (error.response.status === 500) {

                swal({
                    title: `${currencyName.toUpperCase()} Already Exist A Currency Rate Records For "${addNewYear}-${addNewMonth}-${addNewDay}" Date`,
                    text: `Change Date or Update!`,
                    icon: "error",
                    timer: 30000,
                });

              }
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
        })

        swal({
            title: `Updated CurrencyRateId : ${updateCurrencyRateId}`,
            text: `You Have Updated Currency Rate Data!`,
            icon: "success",
            timer: 8000,
        });

        if (isNaN(addNewCurrencyRateValue)) {
            swal({
                title: `"${addNewCurrencyRateValue}" Does Not A Number`,
                text: `Change Currency Rate Value!`,
                icon: "error",
                timer: 20000,
            });
        }

    }

    function deleteTableData(id) {      // delete a currency rate by id
        axios.delete(`${currencyUrl}/currencyRates/${id}`)
        .then(() => {
            swal({
                title: `Id : ${id} Currency Rate Deleted!`,
                icon: "success",
                timer: 8000,
            });
            setCurrencyRateResponse(oldList => [...oldList, null]);
        })

        console.log("deleted " + id);
    }

    function updateFormData(element) {      // when click on the update of a currency rate --> the form fill with relavent currency rate data
        setAddNewCurrency(element.currency);
        setAddNewCurrencyName(element.currency.currencyName);
        setAddNewEqualsCurrency(element.equalsCurrency);
        setAddNewCurrencyRateValue(element.currencyRateValue);
        setPlaceHolderForCurrencyRateValue(element.currencyRateValue);
        setAddNewYear(element.year);
        setAddNewMonth(element.month);
        setAddNewDay(element.day);
        setAddNewRecordStatus(element.recordStatus);

        console.log("updating : " + element.currencyRateId);
    }

    function cancelForm() {     // clear all the data of form in adding or updating 
        setUpdateCurrencyRateId(null);
        setAddNewCurrencyRateValue("");
        setPlaceHolderForCurrencyRateValue(0.00);
        setAddNewYear(2022);
        setAddNewMonth("JANUARY");
        setAddNewDay(1);
        setAddNewRecordStatus("current");

    }


    let items = []; // pagination starts
    for (let number = 1; number <= totalPage; number++) {
    items.push(
        <Pagination.Item key={number} active={number === (pageNumber + 1)} onClick={() => {
            setPageNumber(number - 1);
        }}>
        {number}
        </Pagination.Item>,
    );
    } // pagination ends

    // file in side styles
    var margin_top = {
        marginTop:'10px',
    };
        
    return(
        <div className='admin_container'>

            <Row>

                {/* Table view starts */}

                <Col id="vartical_nav" xs lg={2}>
                    <VerticalNavBar/>
                </Col>

                <Col xs lg={5}>
                    
                    <div id='single_line'></div>
                    <h2>Country Data</h2>
                    <div id='single_line'></div>

                    {/* table starts */}

                    <Table striped bordered hover variant="dark" id="margin_top_10">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>GDP</th>
                            <th>Growth Rate</th>
                            <th>Per Capita</th>
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
                                            <td>{element.countryId}</td>
                                            <td>{element.countryName}</td>
                                            <td>{element.continentName}</td>
                                            <td>{element.subContinentName}</td>
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

                    <div id="content_center">
                        <Pagination>
                            <Pagination.First onClick={() => {
                                setPageNumber(0);
                            }}/>
                            <Pagination.Prev onClick={() => {
                                if (pageNumber === 0) {
                                    console.log("can not change page number")
                                } else {
                                    setPageNumber(pageNumber - 1);
                                }
                            }}/>

                            {items}
                            
                            <Pagination.Next onClick={() => {
                                if (pageNumber === (totalPage - 1)) {
                                    console.log("can not change page number")
                                } else {
                                    setPageNumber(pageNumber + 1);
                                }
                            }} />
                            <Pagination.Last onClick={() => {
                                setPageNumber(totalPage - 1);
                            }} />
                        </Pagination>
                    </div>

                </Col>

                <Col>
                    <div id='single_line'></div>
                    { 
                        updateCurrencyRateId === null ? <h2>Add New Country Data</h2>
                        : <h2>Update The Country Data</h2> 
                    }
                    <div id='single_line'></div>

                    <br></br>

                    {/* add/ update the currency rate data starts */}

                    <div id="form_block">

                        <div id="margin_top_10"></div>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                            <div id="text_bold">Country Name</div>
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
                                <h6 id="column_left">Continent</h6>
                                <DropdownButton  id="form_dropdown_basic_button" variant="outline-secondary" title={`${addNewYear}`}>
                                    {yearList.map(year => {
                                        return <Dropdown.Item onClick={() => setAddNewYear(year)}>{year}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </Col>

                            <Col >
                                
                            </Col>

                        </Row>
                        
                        <Row>
                            
                            <Col id="column_center">
                                <h6 style={margin_top} id="column_left">Sub-Continent</h6>
                                <DropdownButton  id="form_dropdown_basic_button" variant="outline-secondary" title={`${addNewDay}`}>
                                    {dayList.map(day => {
                                        return <Dropdown.Item onClick={() => setAddNewDay(day)}>{day}</Dropdown.Item>
                                    })}
                                </DropdownButton>
                            </Col>

                            <Col >
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
export default Country;