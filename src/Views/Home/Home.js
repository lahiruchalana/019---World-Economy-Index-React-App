import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";



function Home() {

    var button = {
        borderRadius:'0px'
    };

    var button_styles = {
        marginTop:'10px',
        borderRadius:'0px'
    };
 

    return(
        <div className='container'>
            <Row>

                {/* 1st Column Navigation Starts */}

                <Col>

                    <Col>
                        <div id='headings_carousel' >
                            <Carousel className='w-100'>
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

                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/158776/euro-money-currency-the-european-158776.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/news/currency/euro/usd" id='title_in_card'>
                                    <Card.Title>Breaking - Putin Hit A Massive Damage On Euro</Card.Title>
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


                </Col>

                {/* 1st Column Navigation Ends */}


                {/* 2nd Column Navigation Starts */}

                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <Card.Title>What Happened To GDP Per Capita?</Card.Title>
                                <Card.Text>
                                Coming global economic crisis will hit to GDP per capita plus falling living conditions of global communities, 
                                specially lower income and pover income people.
                                </Card.Text>
                                <Button variant="primary" href='/news/gdp-per-capita/usa'>Go Deep On News</Button>
                            </Card.Body>
                        </Card>                    
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/gdp/1' className='w-100' id='button_low_top_margin' variant="outline-secondary" size="lg">GDP Data <a href='/gdp/1' id='button_sub_title_blue'>Updated</a></Button>
                    </div>
                    
                    <div id='column_center'>
                        <br></br>
                        <Button href='/gdp-per-capita/usa' className='w-100' id='button_low_top_margin' variant="outline-secondary" size="lg">GDP Per Capita <a href='/gdp-per-capita/usa' id='button_sub_title_blue'>Updated</a></Button>
                    </div>
                                        
                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' id='button_low_top_margin' variant="outline-secondary" size="lg">Foreign Reserves <a href='/#' id='button_sub_title_blue'>Updated</a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' id='button_low_top_margin' variant="outline-secondary" size="lg">Poverty Rate <a href='/#' id='button_sub_title_blue'>Latest</a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' id='button_low_top_margin' variant="outline-secondary" size="lg">Economy Freedom <a href='/#' id='button_sub_title_blue'>Updated</a></Button>
                    </div>

                </Col>

                {/* 2nd Column Navigation Ends */}


                {/* 3rd Column Navigation Starts */}

                <Col>
                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/#" id='title_in_card'>
                                    <Card.Title>Global Poverty Rate Increased. Lower Income People Going... <a href='/#' id='button_sub_date'>2022-09-16</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/4133256/pexels-photo-4133256.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/#" id='title_in_card'>
                                    <Card.Title>India's Economic Freedom Ranking 131st, How Become World Power? <a href='/#' id='button_sub_date'>2022-09-16</a></Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' id='button_low_top_margin' variant="outline-secondary" size="lg">Economy Growth Rate</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button className='w-100' id='button_low_top_margin' variant="outline-secondary" size="lg">Economy Index <a href='/#' id='button_sub_title_blue'>World Bank</a></Button>
                    </div>

                </Col>
                

                {/* 3rd Column Navigation Ends */}


                {/* 4th Column Navigation Starts */}

                <Col id='column_left'>
                    <br></br>
                    <ButtonGroup size="lg" className="mb-2 w-100">
                        <Button style={button} variant="outline-secondary">NasDaQ<div id='percentage_red_style'><div >2.1%</div></div></Button>
                        <Button style={button} variant="outline-secondary">Tokyo<div id='percentage_green_style'><div >4.21%</div></div></Button>
                        <Button style={button} variant="outline-secondary">Amsterdam <div id='percentage_red_style'><div >5.1%</div></div></Button>
                    </ButtonGroup>
                    <ButtonGroup size="lg" className="mb-2 w-100">
                        <Button style={button} variant="outline-secondary">London<div id='percentage_green_style'><div >1.51%</div></div></Button>
                        <Button style={button} variant="outline-secondary">NewYork<div id='percentage_green_style'><div >1.91%</div></div></Button>
                        <Button style={button} variant="outline-secondary">HongKong <div id='percentage_red_style'><div >3.1%</div></div></Button>
                    </ButtonGroup>

                    <Col >
                        <div id='headings_carousel' style={{marginTop: '0px'}}>
                            <Carousel className='w-100'>
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
                                    <h5 id='number_white_style'>EURO</h5>
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
                    
                    <div style={button_styles} id='column_center'>
                        <Button href='/currency/Euro/USD' className='w-100' style={button} id='home_buttons' variant="outline-success" size="lg">Other Currency Rates</Button>
                    </div>

                    <div id='column_left'>
                        <br></br>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                            <Card.Body>
                                <a href="/#" id='title_in_card'>
                                    <Card.Title>China Increased GDP Growth Rate In 2022. Corona Virus Caused A Large Scale Of Fallen Of All Over The... <a href='/#' id='button_sub_date'>2022-09-06</a></Card.Title>
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
                                height={600}
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
                                height={600}
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
                                height={600}
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

                    <div id='single_line'></div>

                    <div id='column_left'>
                        <br></br>
                        <Button id='column_left' className='w-100 border border-0'  style={button} variant="outline-secondary" size="lg">UK Inflation Rate Eases but Still Near 40-Year High</Button>
                    </div>

                    <div id='thin_single_line'></div>

                    <div id='column_left'>
                        <br></br>
                        <Button id='column_left' className='w-100 border border-0' style={button} variant="outline-secondary" size="lg">A US-China Battle on the Moon Is Possible, and Avoidable</Button>
                    </div>

                    <div id='thin_single_line'></div>

                    <div id='column_left'>
                        <br></br>
                        <Button id='column_left' className='w-100 border border-0' style={button} variant="outline-secondary" size="lg">Yen Rings Alarm in Japan Amid Global Stock Rout: Markets Wrap</Button>
                    </div>
                </Col>
            </Row>

            {/* News Section Ends */}

        </div>
    )
}



export default Home