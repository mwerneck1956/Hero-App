import React, { Component } from 'react'
import { Row, Col, Container, Media } from 'reactstrap'
//images
import ContainerImage from '../images/heroAppContainer.jpg'
import PortraitImage from '../images/portrairWelcomeImage.jpg'
import PortraitImage2 from '../images/walpaperView1.jpg'
import PortraitImage3 from '../images/Portrait3.jpg'

import { withConfigConsumer } from 'antd/lib/config-provider/context'
import { MainImage } from '../styles/syles'
import { Grid } from '@material-ui/core'

//StyledComponents
import { Title, Menu, ButtonTitle } from '../styles/syles'

//Button
import { Button } from 'reactstrap';

//Router
import {
    Link,
    BrowserRouter as Router,

} from 'react-router-dom'
const styleImg = {

    width: '100%',
    maxHeight: "100vh",
    objectFit: 'cover',
    borderRadius: '0px  0px 10px 10px'

}

const styleButton = {
    padding: '3%',
    fontFamily: 'avengersFont',
    marginTop: "3%",
    fontSize: '4vh',
    color: '#1A1A64',
    //backgroundColor : '#1A1A64',
    textAling: 'center',
    borderRadius: '25px'
}

const linkColor = {

    underline: 'none',
    listStyle: 'none',
    color: "#1A1A64"
}

class WelcomeBody extends Component {

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
            <div style={{ backgroundColor: 'whitesmoke' }}
            >
                <Row className="no-gutters">

                    {this.state.width > this.state.height ? (
                        <Col xl={4} xs={0}>
                            <img style={styleImg} className="img-fluid" src={PortraitImage3}/*src ={this.state.height> this.state.width ? PortraitImage : ContainerImage }*/></img>
                        </Col>
                    ) : ''
                    }
                    <Col xl={{ size: 4 }} xs={{ size: 12 }}>
                        <Title>
                            Hero App
                        </Title>
                        <Menu>


                            <Button style={styleButton} outline color="primary" > <Link to="/game" style={linkColor}> Iniciar o Jogo</Link></Button>
                            <br />

                            <Button style={styleButton} outline color="primary">Sobre</Button>
                            <br />

                            <Button style={styleButton} outline color="primary"><a style={linkColor} href="http://github.com/mwerneck1956" target="_blank">GitHub </a></Button>

                        </Menu>
                    </Col>
                    {this.state.width > this.state.height ? (
                        <Col xl={4} xs={{ offset: 12 }}>    

                            <img style={styleImg} className="img-fluid" src={PortraitImage2} ></img>
                        </Col>
                    ) : ''}
                </Row>

            </div>
        )
    }
}

export default WelcomeBody