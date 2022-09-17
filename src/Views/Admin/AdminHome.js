import React from "react";
import CanvasJSReact from '../assets/canvasjs.react';


import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AdminHome() {

    const optionsUsersAndIncome = {
        animationEnabled: true,
        title:{
            text: "Subscribed Users and Income"
        },
        subtitles: [{
            text: "Compare Income with the Subscribed Users"
        }],
        axisX: {
            title: "Date"
        },
        axisY: {
            title: "Number of Users",
            titleFontColor: "#6D78AD",
            lineColor: "#6D78AD",
            labelFontColor: "#6D78AD",
            tickColor: "#6D78AD"
        },
        axisY2: {
            title: "Total Income ($)",
            titleFontColor: "#51CDA0",
            lineColor: "#51CDA0",
            labelFontColor: "#51CDA0",
            tickColor: "#51CDA0"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer"
        },
        data: [{
            type: "spline",
            name: "Number of Subscribed Users",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Users",
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
            name: "Income",
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

    const optionsAcademyStudents = {
        animationEnabled: true,
        title:{
            text: "All Updates Per Day"
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
            cursor: "pointer"
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

    const optionsUpdates = {
        animationEnabled: true,
        title:{
            text: "Updates Per Day"
        },
        axisX: {
            valueFormatString: "YY-MMM-DDD"
        },
        axisY: {
            title: "Updates Per Day",
            prefix: ""
        },
        data: [{
            yValueFormatString: "Updates ###,###",
            xValueFormatString: "MMM-DD",
            type: "spline",
            dataPoints: [
                { x: new Date(2017, 0), y: 25 },
                { x: new Date(2017, 1), y: 27 },
                { x: new Date(2017, 2), y: 42 },
                { x: new Date(2017, 3), y: 32 },
                { x: new Date(2017, 4), y: 35 },
                { x: new Date(2017, 5), y: 33 },
                { x: new Date(2017, 6), y: 40 },
                { x: new Date(2017, 7), y: 52 },
                { x: new Date(2017, 8), y: 32 },
                { x: new Date(2017, 9), y: 42 },
                { x: new Date(2017, 10), y: 3 },
                { x: new Date(2017, 11), y: 68 }
            ]
        }]
    }

    const optionsUsers = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Users"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 6, label: "Academic Users" },
                { y: 12, label: "Subscribed Users" },
                { y: 1, label: "Investments Users" },
                { y: 78, label: "Free Users" },
                { y: 3, label: "Researches Users" }
            ]
        }]
    }

    
    const optionsUsersByCountry = {
        animationEnabled: true,
        title:{
            text: "Most Popular Social Networking Sites"
        },
        axisX: {
            title: "Social Network",
            reversed: true,
        },
        axisY: {
            title: "Monthly Active Users",
            includeZero: true,
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  2200000000, label: "Facebook" },
                { y:  1800000000, label: "YouTube" },
                { y:  1800000000, label: "YouTube" },
                { y:  1800000000, label: "YouTube" },
                { y:  1800000000, label: "YouTube" },
                { y:  1800000000, label: "YouTube" },
                { y:  1800000000, label: "YouTube" },
                { y:  800000000, label: "Instagram" }
            ]
        }]
    }

    const optionsForumUsers = {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Users Of Forum"
        },
        axisY: {
          title: "Number Of Users"
        },
        toolTip: {
          shared: true
        },
        legend: {
          verticalAlign: "center",
          horizontalAlign: "right",
          reversed: true,
          cursor: "pointer"
        },
        data: [
            {
                type: "stackedArea",
                name: "No Data",
                showInLegend: true,
                xValueFormatString: "YYYY-MMM",
                dataPoints: [
                    {x: new Date(2022, 3), y: 9562},
                    {x: new Date(2022, 4), y: 9584},
                    {x: new Date(2022, 5), y: 11568},
                    {x: new Date(2022, 6), y: 12569}
                ]
            },
          {
              type: "stackedArea",
              name: "Professions",
              showInLegend: true,
              xValueFormatString: "YYYY-MMM",
              dataPoints: [
                {x: new Date(2022, 3), y: 1095},
                {x: new Date(2022, 4), y: 1100},
                {x: new Date(2022, 5), y: 1359},
                {x: new Date(2022, 6), y: 1459}
              ]
          },
          {
            type: "stackedArea",
            name: "Students",
            showInLegend: true,
            xValueFormatString: "YYYY-MMM",
            dataPoints: [
                {x: new Date(2022, 3), y: 6584},
                {x: new Date(2022, 4), y: 8145},
                {x: new Date(2022, 5), y: 11584},
                {x: new Date(2022, 6), y: 12456}
            ]
        },
        {
            type: "stackedArea",
            name: "University Students",
            showInLegend: true,
            xValueFormatString: "YYYY-MMM",
            dataPoints: [
                {x: new Date(2022, 3), y: 1023},
                {x: new Date(2022, 4), y: 1058},
                {x: new Date(2022, 5), y: 1158},
                {x: new Date(2022, 6), y: 1235}
            ]
        },
        {
            type: "stackedArea",
            name: "Other Professions",
            showInLegend: true,
            xValueFormatString: "YYYY-MMM",
            dataPoints: [
                {x: new Date(2022, 3), y: 5369},
                {x: new Date(2022, 4), y: 5481},
                {x: new Date(2022, 5), y: 6589},
                {x: new Date(2022, 6), y: 8490}
            ]
        }
        ]
    }

    const optionsResearchesPerDay = {
        animationEnabled: true,
        title:{
            text: "Researches Per Day"
        },
        axisX: {
            valueFormatString: "YY-MMM-DD"
        },
        axisY: {
            title: "Number Of Researches",
            prefix: ""
        },
        data: [{
            yValueFormatString: "Researches #,###",
            xValueFormatString: "MMM-DD",
            type: "spline",
            dataPoints: [
                { x: new Date(2017, 0), y: 25 },
                { x: new Date(2017, 1), y: 30 },
                { x: new Date(2017, 2), y: 4 },
                { x: new Date(2017, 3), y: 38 },
                { x: new Date(2017, 4), y: 36 },
                { x: new Date(2017, 5), y: 39 },
                { x: new Date(2017, 6), y: 68 },
                { x: new Date(2017, 7), y: 50 },
                { x: new Date(2017, 8), y: 23 },
                { x: new Date(2017, 9), y: 82 },
                { x: new Date(2017, 10), y: 37 },
                { x: new Date(2017, 11), y: 94 }
            ]
        }]
    }


    return(
        <div className='admin_container'>

            <Row>

                {/* 1st Column Navigation Starts */}

                <Col id="vartical_nav" xs lg={2}>
                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='vertical_nav_button' variant="outline-secondary" size="lg">Countries <a href='/#' id='button_sub_title_blue'> </a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='vertical_nav_button' variant="outline-secondary" size="lg">Economy Index <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='vertical_nav_button' variant="outline-secondary" size="lg">Currency <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='vertical_nav_button' variant="outline-secondary" size="lg">GDP Data <a href='/admin/home/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='vertical_nav_button' variant="outline-secondary" size="lg">GDP Per Capita <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='vertical_nav_button' variant="outline-secondary" size="lg">Economy Growth Rate <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>
                                        
                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='vertical_nav_button' variant="outline-secondary" size="lg">Foreign Reserves <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='vertical_nav_button' variant="outline-secondary" size="lg">Poverty Rate <a href='/#' id='button_sub_title_blue'> </a></Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='vertical_nav_button' variant="outline-secondary" size="lg">Population <a href='/#' id='button_sub_title_blue'></a></Button>
                    </div>

                </Col>

                {/* 1st Column Navigation Ends */}

                {/* 2nd Column Navigation Starts */}                

                <Col>

                    <h1 id="column_center">Admin Panel </h1>

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
                                    <h4>Researches</h4>
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
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="outline-success" size="lg">Add New Data</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="outline-success" size="lg">Update Data</Button>
                    </div>

                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="outline-success" size="lg">Delete Data</Button>
                    </div>
                    <div id='column_center'>
                        <br></br>
                        <Button href='/admin/home/#' className='w-100' id='button_low_top_margin' variant="outline-success" size="lg">Find Data</Button>
                    </div>

                    <br></br>
                    <div id="chart_container">
                        <CanvasJSChart options = {optionsUpdates} />
                    </div>

                    <br></br>
                    <div id="chart_container">
                        <CanvasJSChart options = {optionsForumUsers} />
                    </div> 
                    
                </Col>

                {/* 2nd Column Navigation Ends */}

                {/* 3rd Column Navigation Starts */}
                
                <Col>

                    <br></br>
                    <br></br>
                    <div id="chart_container">
                        <CanvasJSChart options = {optionsUsersAndIncome} />
                    </div>   

                    <br></br>
                    <div id="chart_container">
                        <CanvasJSChart options = {optionsUsersByCountry} />
                    </div>   

                    <br></br>
                    <div id="chart_container">
                        <CanvasJSChart options = {optionsAcademyStudents} />
                    </div>   

                </Col>

                {/* 3rd Column Navigation Ends */}

                {/* 4th Column Navigation Starts */}

                <Col>

                    <h5 id="column_right">Admin - Lahiru Chalana</h5>

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

                    {/* chart of users data starts */}

                    <br></br>
                    <div id="chart_container">
                        <CanvasJSChart options = {optionsUsers} />
                    </div>

                    {/* chart of users data ends */}

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

                    <br></br>
                    <div id="chart_container">
                        <CanvasJSChart options = {optionsResearchesPerDay} />
                    </div> 

                </Col>

                {/* 4th Column Navigation Ends */}

            </Row>
        </div>
    )
}

export default AdminHome;