import React, { Component } from 'react'
import api from '../services/api'
import axios from 'axios'


//Components
import DialogStatistics from './DialogStatistics'

//Reacstrap
import { Button, Spinner } from 'reactstrap'


//Ant design
import { Card, Row, Col } from 'antd';

//Styled Components 
import { Item, SubItem, DivCard, Panel } from '../styles/syles'

//MAterial Ui
import { Grid } from '@material-ui/core'
import { Snackbar } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import MuiAlert from '@material-ui/lab/Alert';


//Material Ui Icons
import CheckIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";
import TimerIcon from '@material-ui/icons/Timer';

//Images
import BackgroundImage from '../images/BackgroundGameScreen.jpg'




const { Meta } = Card;

let buttons;
const numCards = 10;

const Snack = {
    message: '',
    color: '',
    icon: null
}


const SpinnerConst = (
    <Spinner style={{ marginLeft: "25%", marginTop: '25%', width: '3rem', height: '3rem' }}/>
)

class GameScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 60,
            win: false,
            imageLoaded : false ,
            errorsPercentage: null,
            sucessessesPercentage: null,
            openStatistics: false,
            snackBarColor: '',
            snackBarMessage: '',
            snackbarIcon: null,
            snackBarOpen: false,
            numCards: 0, //Contar quantos numeros de cards ja foram exibidos
            heroLoaded: false, //Controlar se o heroi esta carregado ou não 
            heroeList: null, //Lista contendo todos os herois recebidos da api
            VisitedHeroes: [], //Vetor com os herois ja visitados para evitir duplicatas
            ActualHeroes: [], //
            pickedHeroe: null,
            points: 0,
            sucessesses: 0,
            errors: 0,
            maxHeroes: 5,
            choices: 0,

        }
    }
    Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    HandleImageLoaded = () =>{
        this.setState({imageLoaded : true})
    }
    loadingSnackBar(snack) { //Função para carregar a snack bar falando se usuario errou ou acertou o héroi
        this.setState({
            snackBarColor: snack.color,
            snackBarMessage: snack.message,
            snackbarIcon: snack.icon,
            snackBarOpen: true
        });
        setTimeout(
            function () {
                this.setState({ snackBarOpen: false });
            }.bind(this),
            1500
        );
    }

    numAleatorio = (range) => {
        return Math.floor(Math.random() * range) //Como o vetor de heroi tem tamanho 500 , pego un numero aleatorio de 0 a 499
    }


    componentDidMount() {
        this.interval = setInterval(this.updateCounter, 1000);
        setTimeout(this.verifyWinner, 60000)
        // this.updateInterval()
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
        }
    }

    verifyName = (e) => {

        //Se o botão foi clickado Adiciono 1 a meus cards visitado
        this.state.numCards = this.state.numCards + 1
        if (this.state.pickedHeroe.name === e.target.value) {
            Snack.message = "Você Acertou!"
            Snack.color = "success"
            Snack.icon = CheckIcon
            this.setState({ points: this.state.points + 20, sucessesses: this.state.sucessesses + 1 })
        } else {
            Snack.message = "Você errou!"
            Snack.color = "warning"
            Snack.icon = ErrorIcon
            this.setState({ errors: this.state.errors + 1 })

        }
        this.setState({ heroLoaded: false, pickedHeroe: null  , imageLoaded : false})
        this.loadingSnackBar(Snack)
        if (this.state.numCards === numCards) {
            this.verifyWinner()
        }
    }

    verifyWinner = () => {
        clearInterval(this.interval)

        if (this.state.sucessesses > this.state.errors) {
            this.setState({ openStatistics: true, win: true })
        } else {
            this.setState({ openStatistics: true, win: false })

        }
    }

    selectHeroes = () => {

        let numSorteado = this.numAleatorio(this.state.heroeList.length)
        let heroiSorteado = this.state.heroeList[numSorteado] //Ja que escolhi o sorteado deleto ele da minha lista para evitar duplicatas
        this.state.heroeList.splice(numSorteado, 1) //Deletei o heroi do meu vetor de herois

        return heroiSorteado
    }

    updateCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }


    render() {

        if (this.state.heroeList !== null && this.state.heroLoaded === false) {
            this.state.ActualHeroes = []

            let pickedHero = this.selectHeroes() // Pego o heroi escolhido atraves da funcão auxiliar

            this.setState({ pickedHeroe: pickedHero, heroLoaded: true })

            let random = this.numAleatorio(3) //Escolho um numero aleatorio para o heroi certo , para a posição do botao certo não ser o mesmo toda vez
            for (var i = 0; i < 3; i++) {
                if (i === random) {
                    this.state.ActualHeroes.push(pickedHero)
                } else {
                    this.state.ActualHeroes.push(this.state.heroeList[this.numAleatorio(this.state.heroeList.length)])
                }
            }
        }
        if (this.state.counter === 0) {
            clearInterval(this.interval)
        }
        const styleBackground = {
            opacity : "0.2" ,  
            position: "absolute", 
            width: "100%", 
            objectFit: 'cover' , 
            height : "100vh" 
        }
        return (

            <div >
                <DialogStatistics
                    open={this.state.openStatistics}
                    won={this.state.win}
                    errors={this.state.errors / this.state.numCards * 100}
                    sucessess={this.state.sucessesses / this.state.numCards * 100} points={this.state.points + this.state.counter} />

                <Grid
                    container
                    fluid
                >
                      
                    <Grid
                        item
                        className="mt-0 mb-2"
                        xl={12}
                        xs={8}
                    >   
                        <img style={styleBackground}src= {BackgroundImage}/>
                        <Grid
                            item
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Item> Pontuacao : {this.state.points}
                                &nbsp;	&nbsp;	&nbsp;
                            <CheckIcon style={{ color: green[500] }} fontSize="large" /> : {this.state.sucessesses}
                                &nbsp;	 &nbsp;
                            <ErrorIcon style={{ color: "#B33A3A    " }} fontSize="large" /> : {this.state.errors}
                            </Item>
                            <Grid
                                stlye={{position : "absolute"}}
                                item
                                container
                                direction="col"
                                justify="center"
                            >
                               
                                    {this.state.pickedHeroe ? <Card
                                        hoverable
                                        style={{ width: 300 , position : "absolute"}}
                                        cover={ <img onLoad = {this.HandleImageLoaded} alt="example" style={{ height : "300" ,width: '350px', borderRadius: '15px 15px 15px 15px' }} className="img-fluid" src={this.state.imageLoaded ?  this.state.pickedHeroe.images.sm : "https://media.giphy.com/media/38msMCMSMUK7m/giphy.gif"} />}
                                    >
                        
                                        <Meta title="" description="" />
                                        <Grid
                                            xl = {12}
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
                        </Grid>
                        <Grid
                            style={{position : "absolute"}}
                            
                            container
                            item
                            direction="col"
                            alignItens="center"
                            justify="center"
                        >
                            <SubItem>
                                <TimerIcon fontSize= "large"/>   {this.state.counter}
                                <br/>
                            </SubItem>
                            
                        </Grid>

                    </Grid>
                </Grid>

                <Snackbar
                    place="bc"
                    open={this.state.snackBarOpen}
                    closeNotification={() => this.setState({ snackBarOpen: false })}
                    close
                >
                    <MuiAlert elevation={6} variant="filled" severity={this.state.snackBarColor}>
                        {this.state.snackBarMessage}
                    </MuiAlert>

                </Snackbar>

            </div >
        )
    }
}

export default GameScreen