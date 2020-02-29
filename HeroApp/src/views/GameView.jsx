import React, { Component } from 'react'
import GameScreen from '../components/GameScreen'
import MainNavbar from '../components/MainNavbar'

//Bg image

import { Title, Menu, BackgroundGameScreen} from '../styles/syles'

const styleBackground = {
    opacity : "0.5" ,  
    position: "absolute", 
    width: "100%", 
    objectFit: 'cover' , 
    height : "100vh" 
}
class GameView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <BackgroundGameScreen>
                
                <MainNavbar/>
                <GameScreen/>
            </BackgroundGameScreen>
        )
    }
}

export default GameView