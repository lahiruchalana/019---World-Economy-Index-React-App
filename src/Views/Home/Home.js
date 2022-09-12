import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";

import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {

    var button = {
        borderRadius:'0px'
    };

    var button_low_top_margin = {
        borderRadius:'0px',
        marginTop: '-13px'
    };

    var button_styles = {
        marginTop:'10px',
        borderRadius:'0px'
    };

    var button_support_ukrain = {
        marginTop:'33px',
        borderRadius:'0px',
        marginLeft: '15px'
    };

    var uklrain_flag_image = {
        marginTop:'23px',
    };

    var percentage_green_style = {
        color: 'rgb(5, 223, 12)'
    };

    var percentage_red_style = {
        color:'red'
    };
    


    return(
        <div className='container'>
            <Row>

                {/* 1st Column Navigation Starts */}

                <Col>

                    <Col>
                        <div id='headings_carousel' >
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <img height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/07/10/20/12/money-1508454_960_720.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>0.99</h4>
                                    <h5>Crude Oil</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2022/08/31/23/04/sunset-7424323_960_720.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>1.01</h4>
                                    <h5>Gold</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2017/07/02/09/10/stock-2463798_960_720.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>1.17</h4>
                                    <h5>Silver</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2017/07/02/09/10/stock-2463798_960_720.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>1.05</h4>
                                    <h5>Platinum</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/158776/euro-money-currency-the-european-158776.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/Currency">
                                    <Card.Title>Breaking - Putin Hit A Massive Damage On Euro</Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    <Col>
                        <div id='headings_carousel'>
                            <Carousel>
                                <Carousel.Item interval={4000}>
                                    <img height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/07/10/20/12/money-1508454_960_720.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h4>United States</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={3500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2022/08/31/23/04/sunset-7424323_960_720.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>China</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2017/07/02/09/10/stock-2463798_960_720.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>United Kingdom</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' style={button_low_top_margin} id='home_buttons' variant="outline-secondary" size="lg">Dive In Your Country</Button>
                    </div>

                    <Row>
                        <Col xs lg="2">
                            <Image style={uklrain_flag_image} src="https://cdn.icon-icons.com/icons2/97/PNG/64/ukraine_flags_flag_17076.png"></Image>
                        </Col>
                        <Col>
                            <Button className='w-100 rounded-pill border border-0' style={button_support_ukrain} id='home_buttons' variant="outline-primary" size="lg">Ukrain Need Your Help</Button>
                        </Col>
                    </Row>


                </Col>

                {/* 1st Column Navigation Ends */}


                {/* 2nd Column Navigation Starts */}

                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <Card.Title>What Happened To GDP Per Capita?</Card.Title>
                                <Card.Text>
                                Coming global economic crisis will hit to GDP per capita plus falling living conditions of global communities, 
                                specially lower income and pover income people.
                                </Card.Text>
                                <Button variant="primary">Go Deep On News</Button>
                            </Card.Body>
                        </Card>                    
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' style={button_low_top_margin} variant="outline-secondary" size="lg">Secondary</Button>
                    </div>
                    
                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' style={button_low_top_margin} id='home_buttons' variant="outline-secondary" size="lg">Dive In Your Country</Button>
                    </div>
                                        
                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' style={button_low_top_margin} id='home_buttons' variant="outline-secondary" size="lg">Dive In Your Country</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' style={button_low_top_margin} id='home_buttons' variant="outline-secondary" size="lg">Dive In Your Country</Button>
                    </div>
                </Col>

                {/* 2nd Column Navigation Ends */}


                {/* 3rd Column Navigation Starts */}

                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/Currency">
                                    <Card.Title>Global Poverty Rate Increased</Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    <div id='column_left'>
                        <br></br>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/4133256/pexels-photo-4133256.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/Currency">
                                    <Card.Title>India Becomes The Most Populous Country In The World??</Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' style={button_low_top_margin} id='home_buttons' variant="outline-secondary" size="lg">Dive In Your Country</Button>
                    </div>
                </Col>
                

                {/* 3rd Column Navigation Ends */}


                {/* 4th Column Navigation Starts */}

                <Col id='column_left'>
                    <br></br>
                    <ButtonGroup size="lg" className="mb-2 w-100">
                        <Button style={button} variant="outline-secondary">NasDaQ<div id='value_text'><div style={percentage_red_style}>2.1%</div></div></Button>
                        <Button style={button} variant="outline-secondary">Tokyo<div id='value_text'><div style={percentage_green_style}>4.21%</div></div></Button>
                        <Button style={button} variant="outline-secondary">Amsterdam <div id='value_text'><div style={percentage_red_style}>5.1%</div></div></Button>
                    </ButtonGroup>
                    <ButtonGroup size="lg" className="mb-2 w-100">
                        <Button style={button} variant="outline-secondary">London<div id='value_text'><div style={percentage_green_style}>1.51%</div></div></Button>
                        <Button style={button} variant="outline-secondary">NewYork<div id='value_text'><div style={percentage_green_style}>1.91%</div></div></Button>
                        <Button style={button} variant="outline-secondary">HongKong <div id='value_text'><div style={percentage_red_style}>3.1%</div></div></Button>
                    </ButtonGroup>

                    <Col>
                        <div id='headings_carousel' style={{marginTop: '0px'}}>
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <img height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2016/07/10/20/12/money-1508454_960_720.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>0.99</h4>
                                    <h5>USD/EUR</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1500}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2022/08/31/23/04/sunset-7424323_960_720.jpg"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>1.01</h4>
                                    <h5>EUR/USD</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2017/07/02/09/10/stock-2463798_960_720.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>1.17</h4>
                                    <h5>GBP/USD</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                    height={150}
                                    className="d-block w-100"
                                    src="https://cdn.pixabay.com/photo/2017/07/02/09/10/stock-2463798_960_720.jpg"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h4>1.05</h4>
                                    <h5>CHF/USD</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                    
                    <div style={button_styles} id='column_center'>
                        <Button className='w-100' style={button} id='home_buttons' variant="outline-success" size="lg">Other Currency Rates</Button>
                    </div>

                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/Currency">
                                    <Card.Title>China Increased GDP Growth Rate In 2022</Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

                {/* 4th Column Navigation Ends */}

            </Row>

            {/* News Section Starts */}

            <Row>
                <Col>
                    <div id='headings_carousel'>
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2016/07/10/20/12/money-1508454_960_720.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>Latest</h3>
                                <h2>Euro in freefall: Currency PLUMMETS to 20-year low as Putin sparks chaos across Europe</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2022/08/31/23/04/sunset-7424323_960_720.jpg"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h3>Headlines</h3>
                                <h2>Shanghai’s housing market rebounds as banks quicken loan approvals amid lower mortgage rates, spurring demand</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2017/07/02/09/10/stock-2463798_960_720.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h3>Breaking</h3>
                                <h2>With 62% ownership of the shares, New York Community Bancorp, Inc. (NYSE:NYCB) is heavily dominated by institutional owners</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>

                <Col xs lg="2">
                    <br></br>
                    <h1>Latest News</h1>

                    <div id='singele_line'></div>

                    <div id='column_left'>
                        <br></br>
                        <Button style={button} variant="outline-secondary" size="lg">Secondary</Button>
                    </div>

                    <div id='column_left'>
                        <br></br>
                        <Button style={button} variant="outline-secondary" size="lg">Secondary</Button>
                    </div>
                </Col>
            </Row>

            {/* News Section Ends */}

            

        </div>
    )
}



export default Home