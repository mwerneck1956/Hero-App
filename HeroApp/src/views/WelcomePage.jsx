import React, { Component } from 'react'

import WelcomeWindow from '../components/WelcomeWindow'
class WelcomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div style={{backgroundColor : "whitesmoke" , height : '100vh' ,}}>
            {/*<WelcomeBody /> */}
             <WelcomeWindow/>
            </div>
                )
            }
        }
        
export default WelcomePage