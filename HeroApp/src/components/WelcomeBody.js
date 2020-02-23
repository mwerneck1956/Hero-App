import React ,{Component} from 'react'
import {Row,Col ,Container, Media} from 'reactstrap'
import ContainerImage from '../images/heroAppContainer.jpg'
import PortraitImage from '../images/portrairWelcomeImage.jpg'
import { withConfigConsumer } from 'antd/lib/config-provider/context'
import {MainImage} from '../styles/syles'
import {Grid} from '@material-ui/core'

//StyledComponents
import {Title} from '../styles/syles'

//Button
import { Button} from 'reactstrap';

const styleImg = {
    width : '100%', 
    maxHeight : "80vh", 
    objectFit : 'cover'
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
            width : window.innerWidth ,
            height : window.innerHeight
        }
    }
    render() {
        return (
            <div
            >          
                <Row>
                    <Col xl= {{offset : 1 , size : 3}}>
                        <Title>
                            Your eyes they turn me
                        </Title>
                    </Col>
                    <Col xl = {8} xs ={12}>
                    <Button  size ="lg"  style={{ marginLeft : "45%" , marginTop :'40%', fontSize : '40px' , borderRadius : '25px' , position : 'absolute'}} color = "primary"> HEY HEY</Button>
                    <img  style={styleImg} className = "img-fluid" src ={this.state.height> this.state.width ? PortraitImage : ContainerImage }></img>
                    </Col>
                </Row>
               
            </div> 
        )
    }
}

export default WelcomeBody