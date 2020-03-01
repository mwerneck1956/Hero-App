import React, { Component, useState } from 'react'


//Reacstrap
import { Container, Col, Row, Button } from 'reactstrap'


//Animation Library
import { Animated } from "react-animated-css";

//Styled-Components
import { Title, Menu, BackgroundGameScreen} from '../styles/syles'

//Aos Animated 
import Aos from 'aos'

import {
    Link,
    BrowserRouter as Router,

} from 'react-router-dom'

//Images
import AvengersBg from '../images/AvengersBg.jpg'

const linkColor = {

    underline: 'none',
    listStyle: 'none',
    color: "whitesmoke"
    //color: "#1A1A64"
}
const styleButton = {
    fontSize: "2rem" ,
    borderRadius :  "25px" ,
    fontFamily: 'avengersFont',
    marginTop: "3%",
    fontSize: '4vh',
   
    backgroundColor: 'rgb(24, 0, 64)',
    //borderRadius: '25px'
}
const styleBackground = {
    opacity : "0.4" ,  
    position: "absolute", 
    width: "100%", 
    objectFit: 'cover' , 
    height : "100vh" 
}
export default class WelcomeWindow extends Component {

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    constructor(props) {
        super(props)

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

  
    render() {
      

        return (
            <div
                
            >
                <Row className="no-gutters ">
                    <img style={styleBackground} src={AvengersBg} />
                    <Col style={{marginTop :"15%"}} xl={{ size: 12 }} xs={{ size: 12 }}>
                        <div 
                        >

                          
                                <Animated   animationIn="bounceIn" animationOut="fadeOutRight" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                                    <Title>
                                        Hero <br />
                                        App
                                    </Title>
                                </Animated>


                            

                            <Animated animationIn="bounceIn" animationOut="fadeOutRight" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                                <div className="d-flex col justify-content-center mt-3">
                                    <Link style={linkColor} to="/game"> <Button  style={{fontSize : "2rem" , borderRadius :"25px"}}   color="dark" >Click To Start</Button> </Link>
                                </div>
                            </Animated>

                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}
