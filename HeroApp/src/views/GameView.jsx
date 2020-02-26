import React, { Component } from 'react'
import GameScreen from '../components/GameScreen'
import MainNavbar from '../components/MainNavbar'
class GameView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <MainNavbar/>
                <GameScreen/>
            </div>
        )
    }
}

export default GameView