import React, { Component } from 'react'
import api from '../services/api'
import axios from 'axios'

import { Row, Col, Button } from 'reactstrap'
import { Card } from 'antd';

const { Meta } = Card;


class GameScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            heroLoaded : false,
            heroeList: null,
            VisitedHeroes: [],
            ActualHeroes: [],
            pickedHeroe: null
        }
    }

    numAleatorio = (range) => {
        return Math.floor(Math.random() * range) //Como o vetor de heroi tem tamanho 500 , pego un numero aleatorio de 0 a 499
    }

    componentDidMount() {
        api.get("/all.json")
            .then(res => (
                (
                    this.setState({
                        heroeList: res.data
                    })
                ))
            ).catch(error => alert('erro de comunicação com o servidor ' + error))
    }
    componentDidUpdate(prevState) {
        if(prevState.ActualHeroes !== this.state.ActualHeroes && this.state.heroeList!==null){
            let actualHeros = this.selectHeroes()
        }
    }

    verifyName = (e) =>{
        if(this.state.pickedHeroe.name === e.target.value){
            alert('parabens voce acertou')
        }else{
            alert('Eroooooou!')
        }
    }
    selectHeroes = () => {
        let vetHerois = [] , pickedHero 
        console.log('selecionei herois')
        let numSorteado = this.numAleatorio(500)
        var i = 0;
        while (i < 3) {
            if(i === 0){
                pickedHero = this.state.heroeList[numSorteado]
            }
            //this.setState(VisitedHeroes.push(this.state.heroeList[numSorteado]) )
            vetHerois.push(this.state.heroeList[numSorteado ])
            numSorteado = this.numAleatorio(500)
            i++
        }
        //this.setState({pickedHeroe : pickedHero , ActualHeroes : vetHerois})
        //console.log('vetor de herois' + vetHerois + 'visitados ' , this.state.VisitedHeroes)
        console.log('heroi selecionado ' , vetHerois)
    
       return vetHerois
    }

    render() {
        
        if(this.state.heroeList!==null && this.state.heroLoaded === false){
          
            let heroes = this.selectHeroes()
            heroes.map(hero => (
                this.state.ActualHeroes.push(hero)
            ))
            this.state.ActualHeroes.concat(this.selectHeroes())


            if(this.state.ActualHeroes !== null){
                console.log('herois do meu estado ' , this.state.ActualHeroes)
                this.setState({pickedHeroe : this.state.ActualHeroes[this.numAleatorio(this.state.ActualHeroes.length)] , heroLoaded : true})
            }
            console.log('pickado ' , this.state.pickedHeroe)
        }
        return (
            <div>
                <Row>
                    {/*Coluna das pontuações , acertos e erros*/}
                    <Col xs={12} sm={12} xl={{ size: 4, offset: 1 }}>

                    </Col>
                    {/*Coluna das cards */}
                    <Col xl={{ size: 5 }}>
                        {this.state.pickedHeroe ? <Card
                            hoverable
                            style={{ width: 300, backgroundColor: 'whitesmoke' }}
                            cover={<img alt="example" style={{ borderRadius: '15px' }} className="img-fluid" src={this.state.pickedHeroe.images.md} />}
                        >
                            <Meta title="" description="" />
                            {this.state.ActualHeroes? this.state.ActualHeroes.map(heroSelected => (
                                <Button onClick = {this.verifyName} value = {heroSelected.name} outline color = "primary">{heroSelected.name} </Button>
                            )) : null}
                        </Card> : ''}
                    </Col>
                    {/* Coluna de cards/tempo Restante}*/}
                    <Col xl={{ size: 4 }}>

                    </Col>

                </Row>
                {/*    {this.state.heroeList ? <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" className="img-fluid" src= {this.state.heroeList[this.numAleatorio()].images.md } />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card> : ''} */}

            </div>
        )
    }
}

export default GameScreen