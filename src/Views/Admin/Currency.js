import React, {useState, useEffect} from "react";
import VerticalNavBar from "./Components/VerticalNavBar";

import axios from "axios";

import swal from 'sweetalert';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import * as Icon from 'react-bootstrap-icons';
import CarouselComponent from "./Components/CarouselComponent";


function Currency() {
    const [countryList, setCountryList] = useState([]);
    const [countryNameList, setCountryNameList] = useState([]);
    const [countryName, setCountryName] = useState("USA");
    const [countryIdList, setCountryIdList] = useState([]);
    const [currencyList, setCurrencyList] = useState([]);
    const [updateCurrencyId, setUpdateCurrency] = useState(null);
    const [AddNewCurrency, setAddNewCurrency] = useState("");
    const [addNewCountryIdList, setAddNewCountryIdList] = useState([]);
    const [currencyResponse, setCurrencyResponse] = useState([]);
    const [placeHolderForCountry, setPlaceHolderForCountry] = useState("Country");
    const [placeHolderForSubContinent, setPlaceHolderForSubContinent] = useState("Sub Continent");
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPage, setTotalPage] = useState(1);

    const [field, setField] = useState([]);


    const currencyUrl = "http://localhost:8080/world-economy-index/api/data/currencies"; 
    const countryUrl = "http://localhost:8080/world-economy-index/api/data/countries"; 
   
    useEffect(() => {   // get country data (purpose to store in drop down buttons)
        axios.get(`${countryUrl}/countries-pagination?&pageNumber=0&pageSize=300`).then((response) => {
            setCountryList(response.data.content);
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

    }, [countryUrl])
    

    useEffect(() => {   // load country data relavent to countryName 
        axios.get(`${currencyUrl}/currencies-pagination?&pageNumber=${pageNumber}&pageSize=12`).then((response) => {
            setCurrencyList(response.data.content);
            setTotalPage(response.data.totalPages);
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
        
    }, [currencyResponse.length, pageNumber, totalPage])

    function addData() {    // post a country data record
        axios.post(currencyUrl, {    
            currencyName: AddNewCurrency,
            countryList: countryIdList,
        })
        .then((response) => {
            setCurrencyResponse(oldList => [...oldList, response.data]);
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
                        title: `${AddNewCurrency.toUpperCase()}  Already Exist A Currency  Data Record`,
                        text: `Change Currency or Update!`,
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

    function updateData() {   // update the record of country data
        axios.put(`${currencyUrl}/currencies/${updateCurrencyId}`, {
            currencyName: AddNewCurrency,
            countryList: countryIdList,
        })
        .then((response) => {
            setCurrencyResponse(oldList => [...oldList, response.data]);
        })
        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log("Reason For Error : " + error.response.data.message);
              console.log(error.response.status);
              console.log(error.response.headers);
              if (error.response.status === 500) {

                swal({
                    title: `${AddNewCurrency.toUpperCase()}  Already Exist A Country Data Record`,
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
            title: `Updated CountryId : ${updateCurrencyId}`,
            text: `You Have Updated Country Data!`,
            icon: "success",
            timer: 8000,
        });

    }

    function deleteTableData(id, name) {      // delete a country by id
        axios.delete(`${currencyUrl}/currencies/${id}`)
        .then(() => {
            swal({
                title: `${name} Country Data Deleted!`,
                icon: "success",
                timer: 8000,
            });
            setCurrencyResponse(oldList => [...oldList, null]);
        })

        console.log("deleted " + id + " " + name);
    }

    function updateFormData(element) {      // when click on the update of a currency --> the form fill with relavent country data data
        setAddNewCurrency(element.currencyName);
        setCountryNameList([]);
        setCountryIdList([]);
        element.countryList.map(country => {
            setCountryNameList(oldList => [...oldList, country.countryName ])
            setCountryIdList(oldList => [...oldList, {"countryId" : country.countryId}]);
        })
        setPlaceHolderForCountry(element.currencyName);

        console.log(countryNameList)
        console.log(countryIdList)
        console.log("updating : " + element.countryId);
    }

    function cancelForm() {     // clear all the data of form in adding or updating 
        setUpdateCurrency(null);
        setAddNewCurrency("");
        setCountryIdList([]);
        setCountryNameList([]);
        setPlaceHolderForCountry("Country");
        setPlaceHolderForSubContinent("Continent");
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
                    <h2>Currency Data</h2>
                    <div id='single_line'></div>

                    {/* table starts */}

                    <Table striped bordered hover variant="dark" id="margin_top_10">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Currency</th>
                            <th>Country</th>
                            <th>Delete</th>
                            <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currencyList.map(element => {
                                return <tr>
                                            <td>{element.currencyId}</td>
                                            <td>{element.currencyName}</td>
                                            <td>{element.countryList.map(ele => {
                                                return ele.countryName + ", "
                                            })}</td>
                                            <td onClick={() => { 
                                                deleteTableData(element.currencyId, element.currencyName);  
                                             }}><Button variant="outline-secondary"><Icon.Trash color='white' size={16}/></Button></td>
                                            <td onClick={() => {
                                                setUpdateCurrency(element.currencyId);
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
                        updateCurrencyId === null ? <h2>Add New Currency Data</h2>
                        : <h2>Update The Currency Data</h2> 
                    }
                    <div id='single_line'></div>

                    <br></br>

                    {/* add/ update the country data starts */}

                    <div id="form_block">

                        <div id="margin_top_10"></div>

                        <h6 id="column_left">Currency Name</h6>
                        <InputGroup className="mb-3">
                            <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setAddNewCurrency(e.target.value)}
                            placeholder={`${placeHolderForCountry}`}
                            value={`${AddNewCurrency}`}
                            />
                        </InputGroup>

                        <Row>

                            <Col id="column_center">
                                {/* <h6 id="column_left">Continent</h6>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => setAddNewCountryIdList(e.target.value)}
                                    placeholder={`${placeHolderForContinent}`}
                                    value={`${addNewContinent}`}
                                    />
                                </InputGroup> */}

                                {/* <Form.Group as={Col}>
                                    <Form.Control as="select" multiple value={field} onChange={e => setField(oldList => [...oldList, {"countryId": e.target.value}])}>
                                    <option value="field1">Field 1</option>
                                    <option value="field2">Field 2</option>
                                    <option value="field3">Field 3</option>
                                    <option value="field3">Field 3</option>
                                    <option value="field3">Field 3</option>
                                    <option value="field3">Field 3</option>
                                    <option value="field3">Field 3</option>
                                    <option value="field3">Field 3</option>
                                    <option value="field3">Field 3</option>
                                    </Form.Control>
                                </Form.Group> */}

                                <h6 id="column_left">Select Countries</h6>
                                <Col id="column_center">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-primary" id="dropdown_basic_button">
                                        {countryName.toUpperCase()} <Icon.CaretDownFill></Icon.CaretDownFill>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {countryList.map(country => {
                                                return <Dropdown.Item onClick={() => {
                                                    setCountryName(country.countryName);
                                                    setCountryIdList(oldList => [...oldList, {"countryId" : country.countryId}]);
                                                    setCountryNameList(oldList => [...oldList, country.countryName])
                                                }}>{country.countryName}</Dropdown.Item>
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Col>

                            <Col >
                                <h6 id="column_left">Selected Countries</h6>
                                {countryNameList.map(country => {
                                    return <h5>{country}</h5>
                                })}
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
                                    updateCurrencyId === null ? <Button onClick={addData} className='w-100' id='home_buttons' variant="primary" size="lg">Add Data</Button>
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
export default Currency;