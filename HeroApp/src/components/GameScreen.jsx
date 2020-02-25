import React, { Component } from 'react'
import api from '../services/api'
import axios from 'axios'


//Reacstrap
import { Button, Spinner } from 'reactstrap'


//Ant design
import { Card, Row, Col } from 'antd';

//Styled Components 
import { Item, SubItem } from '../styles/syles'

//MAterial Ui
import { Grid } from '@material-ui/core'




const { Meta } = Card;

let buttons;
const numCards = 10;


class GameScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numCards : 0,
            heroLoaded: false,
            heroeList: null,
            VisitedHeroes: [],
            ActualHeroes: [],
            pickedHeroe: null,
            points: 0,
            sucessesses: 0,
            errors: 0,
            maxHeroes: 5,
            choices: 0,

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
        this.setState({ heroLoaded: false , pickedHeroe : null })
    }
    selectHeroes = () => {
        let vetHerois = [], pickedHero
        let numSorteado = this.numAleatorio(500)
        var i = 0;
        while (i < 3) {
            if (i === 0) {
                pickedHero = this.state.heroeList[numSorteado]
            }
           
            vetHerois.push(this.state.heroeList[numSorteado])
            numSorteado = this.numAleatorio(500)
            i++
        }

   
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
            <div style={{ backgroundColor: 'whitesmoke'  , height : "100%"}}>
                <Grid
                    
                    container spacing={1}
                    justify="space-around"
                >

                    <Grid item xl={4} 
                        xs = "auto"
                        spacing ={2}

                    >
                        <Item> Pontuacao : {this.state.points} </Item>

                        <SubItem>
                            
                            Acertos : {this.state.sucessesses}
                            <br/>
                            Errors : {this.state.errors}

                        </SubItem>


                    </Grid>
                    <Grid item
                        className ="mt-3 mb-2"
                        xl ={4} xs = {8} spacing={2}>
                        {this.state.pickedHeroe ? <Card
                            hoverable
                            style={{ width: 300, backgroundColor: 'whitesmoke', marginTop: "5%" }}
                            cover={<img alt="example" style={{ borderRadius: '15px 15px 15px 15px' }} className="img-fluid" src={this.state.pickedHeroe.images.md} />}
                        >

                            <Meta title="" description="" />
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center">
                                {this.state.ActualHeroes ? this.state.ActualHeroes.map(heroSelected => (
                                    <Grid
                                        fluid
                                    >
                                        <Button className="mt-1" onClick={this.verifyName} value={heroSelected.name} outline color="primary">{heroSelected.name} </Button>
                                        <br />
                                    </Grid>

                                )) : <Spinner style={{ marginLeft: "25%", marginTop: '25%', width: '3rem', height: '3rem' }} />}
                            </Grid>

                        </Card> : <Spinner style={{ marginLeft: "25%", marginTop: '25%', width: '3rem', height: '3rem' }} />

                        }
                    </Grid>
                    <Grid 
                        className = "mt-5"
                        item xl={2}
                    >
                            <SubItem>
                                Tempo Restante :
                            </SubItem>
                            <SubItem>
                                Cards Restantes :
                            </SubItem>
                    </Grid>
                </Grid>


            </div>
        )
    }
}

export default GameScreen