import React, { Component } from 'react'


//Reacstrap
import { Container, Col, Row, Button } from 'reactstrap'

//Styled-Components
import { Title, ButtonTitle, Menu } from '../styles/syles'



import {
    Link,
    BrowserRouter as Router,

} from 'react-router-dom'

//Images

import AvengersBg from '../images/AvengersBg.jpg'
import AvengersPortrait from '../images/portraitBg.jpg'
const linkColor = {

    underline: 'none',
    listStyle: 'none',
    color : "whitesmoke"
    //color: "#1A1A64"
}
const styleButton = {
    padding: '3%',
    fontFamily: 'avengersFont',
    marginTop: "3%",
    fontSize: '5vh',
    color: 'white',
    textAling: 'center',
   backgroundColor : 'rgb(24, 0, 64)',
    //borderRadius: '25px'
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
                    <img style={{ position: "fixed", width: "100%", objectFit: 'cover' }} src={this.state.height > this.state.width ? AvengersPortrait :AvengersBg }  className="img-fluid" />
                    <Col xl={{ offset: 7, size: 5 } } xs ={{size : 12}}>
                        <Menu>
                            <Title>
                                Hero <br />
                                App
                        </Title>

                            <Button style={styleButton}    color="dark" > <Link to="/game" style={linkColor}> Iniciar o Jogo</Link></Button>
                            <br />

                            <Button style={styleButton}  color="dark"><Link style={linkColor} to = "/aboutUs">Sobre</Link></Button>
                            <br />

                            <Button style={styleButton}   color="dark"><a style={linkColor} href="http://github.com/mwerneck1956" target="_blank">GitHub </a></Button>

                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    }
}
