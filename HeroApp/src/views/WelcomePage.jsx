import React, { Component } from 'react'
import WelcomeBody from '../components/WelcomeBody'
class WelcomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{backgroundColor : "whitesmoke" , height : '100vh' ,}}>
                <WelcomeBody />
            </div>
                )
            }
        }
        
export default WelcomePage