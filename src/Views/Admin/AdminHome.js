import React from "react";
import CanvasJSReact from './canvasjs.react';


import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AdminHome() {

    const options = {
        theme: "light2",
        animationEnabled: true,
        title:{
            text: "Units Sold VS Profit"
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }],
        axisX: {
            title: "States"
        },
        axisY: {
            title: "Units Sold",
            titleFontColor: "#6D78AD",
            lineColor: "#6D78AD",
            labelFontColor: "#6D78AD",
            tickColor: "#6D78AD"
        },
        axisY2: {
            title: "Profit in USD",
            titleFontColor: "#51CDA0",
            lineColor: "#51CDA0",
            labelFontColor: "#51CDA0",
            tickColor: "#51CDA0"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: this.toggleDataSeries
        },
        data: [{
            type: "spline",
            name: "Units Sold",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
                { x: new Date(2017, 0, 1), y: 120 },
                { x: new Date(2017, 1, 1), y: 135 },
                { x: new Date(2017, 2, 1), y: 144 },
                { x: new Date(2017, 3, 1), y: 103 },
                { x: new Date(2017, 4, 1), y: 93 },
                { x: new Date(2017, 5, 1), y: 129 },
                { x: new Date(2017, 6, 1), y: 143 },
                { x: new Date(2017, 7, 1), y: 156 },
                { x: new Date(2017, 8, 1), y: 122 },
                { x: new Date(2017, 9, 1), y: 106 },
                { x: new Date(2017, 10, 1), y: 137 },
                { x: new Date(2017, 11, 1), y: 142 }
            ]
        },
        {
            type: "spline",
            name: "Profit",
            axisYType: "secondary",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,##0.#",
            dataPoints: [
                { x: new Date(2017, 0, 1), y: 19034.5 },
                { x: new Date(2017, 1, 1), y: 20015 },
                { x: new Date(2017, 2, 1), y: 27342 },
                { x: new Date(2017, 3, 1), y: 20088 },
                { x: new Date(2017, 4, 1), y: 20234 },
                { x: new Date(2017, 5, 1), y: 29034 },
                { x: new Date(2017, 6, 1), y: 30487 },
                { x: new Date(2017, 7, 1), y: 32523 },
                { x: new Date(2017, 8, 1), y: 20234 },
                { x: new Date(2017, 9, 1), y: 27234 },
                { x: new Date(2017, 10, 1), y: 33548 },
                { x: new Date(2017, 11, 1), y: 32534 }
            ]
        }]
    }

    var button = {
        borderRadius:'0px'
    };

    return(
        <div className='container'>
            <Row>
                <Col id="column_left">
                    <br></br>
                    <h1>Admin Panel <h5>welcome to admin panel</h5></h1>
                </Col>
                <Col id="column_right">
                    <br></br>
                    <h5>Admin - Lahiru Chalana</h5>
                </Col>
            </Row>

            <Row>
                <Col>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Countries <a href='/#' id='button_sub_title_blue'>Updated Today</a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Economy Index <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Currency <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">GDP Data <a href='/admin/home/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">GDP Per Capita <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Economy Growth Rate <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>
                                        
                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Foreign Reserves <a href='/#' id='button_sub_title_blue'>Updated Today</a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Poverty Rate <a href='/#' id='button_sub_title_blue'>Updated Today</a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="secondary" size="lg">Population <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                </Col>
                <Col>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="primary" size="lg">Update Currency Rates<a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="primary" size="lg">Create Latest News<a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="primary" size="lg">Create Social Media Posts<a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="primary" size="lg">Statics<a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>
   
                    <CanvasJSChart options = {options} />

                    <div id='headings_carousel' href='/#'>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img height={250}
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4 >Get In Touch With Updates</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img height={250}
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Create Latest News</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img height={250}
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Update Data</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img height={250}
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Comparison And Review Of Countries</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img height={250}
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Update All Data</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img height={250}
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Academy</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img height={250}
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Investments</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img height={250}
                                className="d-block w-100"
                                src="https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366__340.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Forum</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="success" size="lg">Add New Data</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="success" size="lg">Update Data</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="success" size="lg">Delete Data</Button>
                    </div>
                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="success" size="lg">Find Data</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="outline-info" size="lg">Academy</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="outline-info" size="lg">Forum</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="outline-info" size="lg">Researches</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="outline-info" size="lg">Investments</Button>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default AdminHome;