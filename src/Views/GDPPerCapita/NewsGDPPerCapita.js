import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

import CanvasJSReact from '../assets/canvasjs.react';

import axios from "axios";

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";


function NewsGDPPerCapita() {
    const [gdpPerCapita, setGdpPerCapita] = useState([]);
    const [gdpPerCapitaDataArray, setGdpPerCapitaDataArray] = useState([]);
    const { countryname } = useParams();
    

    const gdpPerCapitaRateURL = `http://localhost:8080/world-economy-index/api/data/gdps`;   

    const monthsShort = {
        JANUARY: 0,
        FEBRUARY: 1,
        MARCH: 2,
        APRIL: 3,
        MAY: 4,
        JUNE: 5,
        JULY: 6,
        AUGUST: 7,
        SEPTEMBER: 8,
        OCTOBER: 9,
        NOVEMBER: 10,
        DECEMBER: 11,
      };


    useEffect(() => {
        axios.get(`${gdpPerCapitaRateURL}/countries/${countryname}/gdps-by-name-sorting?sortingProperty=Date&order=Asc`).then((response) => {
            setGdpPerCapita(response.data);
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
        
    }, [countryname, gdpPerCapitaRateURL]);    

    useEffect(() => {
        setGdpPerCapitaDataArray([]);

        gdpPerCapita.forEach(element => {
            var yearMonthString = element.yearMonth
            var yearString = String(yearMonthString).slice(3, 7)
            var monthString = String(yearMonthString).slice(0,2)

            const gdpPerCapitaData = {
                x: new Date (Number(yearString), Number(monthString)),
                y: element.gdpPerCapita
            }

            console.log(gdpPerCapitaData);
            setGdpPerCapitaDataArray(oldArray => [...oldArray, gdpPerCapitaData]);
    
        })
    }, [gdpPerCapita.length]);

    console.log(gdpPerCapita);
    console.log(gdpPerCapitaDataArray);

    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,
        title:{
            text: "Global GDP Per Capita"
        },
        axisX: {
            valueFormatString: "YYYY-MMMM"
        },
        axisY: {
            title: "USD",
            prefix: "$"
        },
        data: [{
            yValueFormatString: "$##,###,###.####",
            xValueFormatString: "YYYY-MMMM",
            type: "spline",
            dataPoints: gdpPerCapitaDataArray
        }]
    };

    var button = {
        borderRadius:'0px'
    };

    return(
        <div className='container'>

            <Row>

                {/* Page Related Content Column Starts */}

                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100'>
                            <Card.Img height={450} variant="top" src="https://images.pexels.com/photos/3964406/pexels-photo-3964406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            <Card.Body>
                                <a href="/#" id='title_in_card'>
                                    <Card.Title id='subscribe_title_in_card'>Be Updated With Us @Washington DC</Card.Title>
                                    <Card.Title id='subscribe_title_in_card'> - World Economy Index - </Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* News Content Starts */}

                    <br></br>
                    <h2>Global GDP Per Capita Fallen</h2>
                    <h6>2022_09_29, Munich, Germany - Senchers Gobrashav</h6>
                    <br></br>
                    <h5>The world economy is paying a high price for Russia’s unprovoked, unjustifiable and illegal war of aggression against Ukraine. With the impacts of the COVID-19 pandemic still lingering, the war is dragging down growth and putting additional upward pressure on prices, above all for food and energy. Global GDP stagnated in the second quarter of 2022 and output declined in the G20 economies. High inflation is persisting for longer than expected. In many economies, inflation in the first half of 2022 was at its highest since the 1980s. With recent indicators taking a turn for the worse, the global economic outlook has darkened.<br></br><br></br>
                        Despite a boost in activity as COVID-19 infections drop worldwide, global growth is projected to remain subdued in the second half of 2022, before slowing further in 2023 to an annual growth of just 2.2%.<br></br> <br></br>
                        Compared to OECD forecasts from December 2021, before Russia’s aggression against Ukraine, global GDP is now projected to be at least USD 2.8 trillion lower in 2023.
                    </h5>

                    <br></br>
                    <br></br>

                    {/* Charts or Tables Starts */}

                    <CanvasJSChart options = {options}/>

                    {/* Charts or Tables Ends */}

                </Col>

                {/* Page Related Content Column Ends */}


                {/* News Column Starts */}

                <Col xs lg='3'>

                    <Col>
                        <div id='headings_carousel' >
                            <Carousel>
                                <Carousel.Item interval={3000}>
                                    <img height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2018/08/17/18/36/refinery-3613526__340.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='percentage_red_style' >20.56 USD</h4>
                                    <h5 id='number_white_style'>Crude Oil</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/321452/pexels-photo-321452.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='percentage_green_style' >56.23 USD</h4>
                                    <h5 id='number_white_style'>Gold</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={3500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://st2.depositphotos.com/1050267/6671/i/950/depositphotos_66715947-stock-photo-stack-of-silver-bars-in.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='percentage_red_style' >12.36 USD</h4>
                                    <h5 id='number_white_style'>Silver</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={3500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://newagemetals.com/wp-content/uploads/Platinum-Bar.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='percentage_green_style' >89.25 USD</h4>
                                    <h5 id='number_white_style'>Platinum</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    <br></br>
                    <ButtonGroup size="lg" className="mb-2 w-100">
                        <Button style={button} variant="outline-secondary">NasDaQ<div id='percentage_red_style'><div >2.1%</div></div></Button>
                        <Button style={button} variant="outline-secondary">Tokyo<div id='percentage_green_style'><div >4.21%</div></div></Button>
                    </ButtonGroup>
                    <ButtonGroup size="lg" className="mb-2 w-100">
                        <Button style={button} variant="outline-secondary">London<div id='percentage_green_style'><div >1.51%</div></div></Button>
                        <Button style={button} variant="outline-secondary">NewYork<div id='percentage_green_style'><div >1.91%</div></div></Button>
                    </ButtonGroup>

                    <Col>
                        <div id='headings_carousel' style={{marginTop: '0px'}}>
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <img height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2015/09/15/15/53/bank-notes-941246__340.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='number_white_style'>0.99 EUR</h4>
                                    <h5 id='number_white_style'>USD</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2017/08/21/15/55/money-2665824__340.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='number_white_style'>1.01 USD</h4>
                                    <h5 id='number_white_style'>EUR</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/02/19/11/28/british-1209730__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='number_white_style'>1.17 USD</h4>
                                    <h5 id='number_white_style'>GBP</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2019/07/03/13/12/swiss-francs-4314471__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4 id='number_white_style'>1.05 USD</h4>
                                    <h5 id='number_white_style'>CHF</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    
                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/#" id='title_in_card'>
                                    <Card.Title>China Increased GDP Growth Rate In 2022. Corona Virus... <a href='/#' id='button_sub_date'>2022-09-06</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>                    
                

                    <Col>
                        <div id='headings_carousel'>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/10/16/13/06/new-york-1745089__340.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h4>United States</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2019/12/14/12/08/night-4694750__340.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>China</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/01/03/00/16/big-ben-1118888__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>United Kingdom</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2020/09/14/22/27/river-5572289__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>Japan</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2020/04/08/13/24/sunset-5017360__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>India</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/07/30/08/13/moscow-1556561__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>Russia</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>France</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' id='button_low_top_margin' variant="outline-secondary" size="lg">Your Country <a href='/#' id='button_sub_title_blue'>Dive In</a></Button>
                    </div>

                    <Row>
                        <Col xs lg="2">
                            <Image id='uklrain_flag_image' src="https://cdn-icons-png.flaticon.com/64/206/206725.png"></Image>
                        </Col>
                        <Col>
                            <Button className='w-100 rounded-pill border border-0' id='button_support_ukrain' variant="outline-primary" size="lg">Visit Sri Lanka</Button>
                        </Col>
                    </Row>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' id='button_low_top_margin' variant="outline-success" size="lg">Subscribe Us</Button>
                    </div>


                </Col>

                {/* News Column Ends */}

            </Row>

            {/* Footer News Starts */}

            <br></br>
            <h2>Latest News Available</h2>
            <div id='single_line'></div>

            <Row>
                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/#" id='title_in_card'>
                                    <Card.Title>Global Poverty Rate Increased. Lower Income People Going... <a href='/#' id='button_sub_date'>2022-09-16</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                
                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/#" id='title_in_card'>
                                    <Card.Title>China Increased GDP Growth Rate In 2022. Corona Virus... <a href='/#' id='button_sub_date'>2022-09-06</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>                    
                </Col>

                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/10/13/11/49/putin-2847423__340.jpg" />
                            <Card.Body>
                                <a href="/#" id='title_in_card'>
                                    <Card.Title>Putin Tells Xi He Understands China ‘Concerns’ on War in Ukraine... <a href='/#' id='button_sub_date'>2022-09-16</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                
                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/09/13/15/14/money-938269__340.jpg" />
                            <Card.Body>
                                <a href="/#" id='title_in_card'>
                                    <Card.Title>Offshore Yuan Drops Past 7 Per Dollar for First Time Since 2020... <a href='/#' id='button_sub_date'>2022-09-06</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>                    
                </Col>
            </Row>
            {/* Footer News Ends */}


        </div>
    )
}

export default NewsGDPPerCapita