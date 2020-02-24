import React, { Component } from 'react'
import api from '../services/api'
import axios from 'axios'

import { Row, Col, Button, Spinner } from 'reactstrap'
import { Card } from 'antd';

const { Meta } = Card;

let buttons;
const numCards = 5;
class GameScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            heroLoaded: false,
            heroeList: null,
            VisitedHeroes: [],
            ActualHeroes: [],
            pickedHeroe: null,
            points: 0,
            sucessesses: 0,
            errors: 0,
            maxHeroes: 5,
            choices : 0 ,
            
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

        if (prevState.ActualHeroes !== this.state.ActualHeroes && this.state.heroeList !== null) {
            let actualHeros = this.selectHeroes()
            buttons = this.state.ActualHeroes.map(heroSelected => (
                <Button onClick={this.verifyName} value={heroSelected.name} outline color="primary">{heroSelected.name} </Button>
            ))
        }
    }

    verifyName = (e) => {

        if (this.state.pickedHeroe.name === e.target.value) {
            alert('parabens voce acertou')
            this.setState({ points: this.state.points + 20, sucessesses: this.state.sucessesses + 1 })
        } else {
            this.setState({ errors: this.state.errors + 1 })
            alert('Eroooooou!')
        }
        this.setState({ heroLoaded: false })
    }
    selectHeroes = () => {
        let vetHerois = [], pickedHero
        console.log('selecionei herois')
        let numSorteado = this.numAleatorio(500)
        var i = 0;
        while (i < 3) {
            if (i === 0) {
                pickedHero = this.state.heroeList[numSorteado]
            }
            //this.setState(VisitedHeroes.push(this.state.heroeList[numSorteado]) )
            vetHerois.push(this.state.heroeList[numSorteado])
            numSorteado = this.numAleatorio(500)
            i++
        }
        //this.setState({pickedHeroe : pickedHero , ActualHeroes : vetHerois})
        //console.log('vetor de herois' + vetHerois + 'visitados ' , this.state.VisitedHeroes)
        console.log('heroi selecionado ', vetHerois)

        return vetHerois
    }

    render() {

        if (this.state.heroeList !== null && this.state.heroLoaded === false) {
            this.state.ActualHeroes = []
            let heroes = this.selectHeroes()
            heroes.map(hero => (
                this.state.ActualHeroes.push(hero)
            ))
            this.state.ActualHeroes.concat(this.selectHeroes())


            if (this.state.ActualHeroes !== null) {
                var indiceEscolhido = this.numAleatorio(this.state.ActualHeroes.length) //Sorteio um indice para o heroi escolhido  , e guardo esse indíce
                // para  posteriormente deletar o heroi da minha lista de herois
                this.setState({ pickedHeroe: this.state.ActualHeroes[indiceEscolhido], heroLoaded: true })

                //Logo que escolhi um heroi deleto ele da minha lista de herois para evitar duplicatas
                if (this.state.pickedHeroe) {
                    this.state.heroeList.splice(indiceEscolhido, 1)
                    console.log('heroe lsit perdeu 1', this.state.heroeList)
                }


            }
            console.log('vetor de herois ', this.state.heroeList)
            console.log('pickado ', this.state.pickedHeroe)
        }
        return (
            <div>
                <Row className="no-gutters">
                    {/*Coluna das pontuações , acertos e erros*/}
                    <Col xs={12} sm={12} xl={{ size: 4, offset: 1 }}>
                        Pontuacao : {this.state.points}
                        <br />
                        Acertos : {this.state.sucessesses}
                        <br />
                        Errors : {this.state.errors}
                        <br />
                    </Col>
                    {/*Coluna das cards */}
                    <Col xl={{ size: 5 }}>
                        {this.state.pickedHeroe ? <Card
                            hoverable
                            style={{ width: 300, backgroundColor: 'whitesmoke' , marginTop : "5%" }}
                            cover={<img alt="example" style={{ borderRadius: '15px 15px 15px 15px' }} className="img-fluid" src={this.state.pickedHeroe.images.md} />}
                        >
                            <Meta title="" description="" />
                            {this.state.ActualHeroes ? this.state.ActualHeroes.map(heroSelected => (
                                <Button onClick={this.verifyName} value={heroSelected.name} outline color="primary">{heroSelected.name} </Button>
                            )) : null}


                        </Card> : <Spinner style={{ marginLeft: "25%", marginTop: '25%', width: '3rem', height: '3rem' }} />}
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