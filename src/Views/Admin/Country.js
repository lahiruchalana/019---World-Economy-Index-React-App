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
    const [updateCurrencyRateId, setUpdateCurrencyRateId] = useState(null);
    const [addNewCurrency, setAddNewCurrency] = useState(null);
    const [addNewCountry, setAddNewCountry] = useState("");
    const [addNewContinent, setAddNewContinent] = useState("");
    const [addNewSubContinent, setAddNewSubContinent] = useState("");
    const [addNewYear, setAddNewYear] = useState(2022);
    const [addNewMonth, setAddNewMonth] = useState("JANUARY");
    const [addNewDay, setAddNewDay] = useState(1);
    const [addNewRecordStatus, setAddNewRecordStatus] = useState("current");
    const [isResponseErrorOnGetCurrencyRates, setIsResponseErrorOnGetCurrencyRates] = useState(false);
    const [currencyRateResponse, setCurrencyRateResponse] = useState([]);
    const [placeHolderForCountry, setPlaceHolderForCountry] = useState("Country");
    const [placeHolderForContinent, setPlaceHolderForContinent] = useState("Continet");
    const [placeHolderForSubContinent, setPlaceHolderForSubContinent] = useState("Sub Continent");
    const [sortingProperty, setSortingProperty] = useState("Date");
    const [order, setOrder] = useState("Asc");
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPage, setTotalPage] = useState(1);

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
        axios.post(currencyUrl, {   // when change two currencies 
            countryName: addNewCountry,
            continentName: addNewContinent,
            subContinentName: addNewSubContinent
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
                        title: `${addNewCountry.toUpperCase()}  Already Exist A Country Data Record`,
                        text: `Change Country or Update!`,
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

    }

    function updateData() {   // update the record of currency rate
        axios.put(`${currencyUrl}/countries/${updateCurrencyRateId}`, {
            countryName: addNewCountry,
            continentName: addNewContinent,
            subContinentName: addNewSubContinent
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
                    title: `${addNewCountry.toUpperCase()}  Already Exist A Country Data Record`,
                    text: `Change Country or Update!`,
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

    }

    function deleteTableData(id, name) {      // delete a currency rate by id
        axios.delete(`${currencyUrl}/countries/${id}`)
        .then(() => {
            swal({
                title: `${name} Country Data Deleted!`,
                icon: "success",
                timer: 8000,
            });
            setCurrencyRateResponse(oldList => [...oldList, null]);
        })

        console.log("deleted " + id + " " + name);
    }

    function updateFormData(element) {      // when click on the update of a currency rate --> the form fill with relavent currency rate data
        setAddNewCountry(element.countryName);
        setAddNewContinent(element.continentName);
        setAddNewSubContinent(element.subContinentName);
        setPlaceHolderForCountry(element.countryName);
        setPlaceHolderForContinent(element.continentName);
        setPlaceHolderForSubContinent(element.subContinentName);

        console.log("updating : " + element.countryId);
    }

    function cancelForm() {     // clear all the data of form in adding or updating 
        setUpdateCurrencyRateId(null);
        setAddNewCountry("");
        setAddNewContinent("");
        setAddNewSubContinent("");
        setPlaceHolderForCountry("Country");
        setPlaceHolderForContinent("Continent");
        setPlaceHolderForSubContinent("Sub-Continent");
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
                            <th>Country</th>
                            <th>Continent</th>
                            <th>Sub-Continent</th>
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
                                                deleteTableData(element.countryId, element.countryName);  
                                             }}><Button variant="outline-secondary"><Icon.Trash color='white' size={16}/></Button></td>
                                            <td onClick={() => {
                                                setUpdateCurrencyRateId(element.countryId);
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
                            onChange={(e) => setAddNewCountry(e.target.value)}
                            placeholder={`${placeHolderForCountry}`}
                            value={`${addNewCountry}`}
                            />
                        </InputGroup>

                        <Row>

                            <Col id="column_center">
                                <h6 id="column_left">Continent</h6>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => setAddNewContinent(e.target.value)}
                                    placeholder={`${placeHolderForContinent}`}
                                    value={`${addNewContinent}`}
                                    />
                                </InputGroup>
                            </Col>

                            <Col >
                                
                            </Col>

                        </Row>
                        
                        <Row>
                            
                            <Col id="column_center">
                                <h6 id="column_left">Sub-Continent</h6>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => setAddNewSubContinent(e.target.value)}
                                    placeholder={`${placeHolderForSubContinent}`}
                                    value={`${addNewSubContinent}`}
                                    />
                                </InputGroup>
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