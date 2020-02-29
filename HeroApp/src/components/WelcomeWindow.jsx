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
import AvengersPortrait from '../images/spider.jpg'
const linkColor = {

    underline: 'none',
    listStyle: 'none',
    color: "whitesmoke"
    //color: "#1A1A64"
}
const styleButton = {
    padding: '3%',
    fontFamily: 'avengersFont',
    marginTop: "3%",
    fontSize: '4vh',
    color: 'white',
    textAling: 'center',
    backgroundColor: 'rgb(24, 0, 64)',
    //borderRadius: '25px'
}
const styleBackground = {
    opacity : "0.2" ,  
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
                <Row className="no-gutters">
                    <img style={styleBackground} src={AvengersBg} /*className="img-fluid"*/ />
                    <Col xl={{ size: 12 }} xs={{ size: 12 }}>
                        <div data-aos="slide-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >

                            <Menu>
                                <Animated animationIn="bounceIn" animationOut="fadeOutRight" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                                    <Title>
                                        Hero <br />
                                        App
                                    </Title>
                                </Animated>


                                {/* <Button style={styleButton} color="dark" > <Link to="/game" style={linkColor}> Iniciar o Jogo</Link></Button>
                                <br />

                                <Button style={styleButton} color="dark"><Link style={linkColor} to="/aboutUs">Sobre</Link></Button>
                                <br />

                                <Button style={styleButton} color="dark"><a style={linkColor} href="http://github.com/mwerneck1956" target="_blank">GitHub </a></Button>*/}


                            </Menu>

                            <Animated animationIn="bounceIn" animationOut="fadeOutRight" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
                                <div className="d-flex col justify-content-center">
                                    <Link style={linkColor} to="/game"> <Button style={{ fontSize: "2rem" }} color="primary" >Start the Game</Button> </Link>
                                </div>
                            </Animated>

                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}
