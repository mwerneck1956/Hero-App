import portraitImage from '../images/portrairWelcomeImage.jpg'
import styled from 'styled-components'
import '../fonts/fonts.css'
export const MainImage = styled.img`

        src : "../" ;
      @media(orientation : portrait) {
         src : '../images/portrairWelcomeImage.jpg';
         width : 100% ;
         height : auto ;
         max-height : '95%' ;
         max-width : '90%'
      }

      @media(orientation : landscape){
          src :   '../images/heroAp0B0930pContainer.jpg';
      }

`

export const Item = styled.h2`
    margin-top : 9%;
    font-family : "avengersFont";
    font-size : 5vh ;
`
export const SubItem = styled.h4`
    /* era 5%*/
    font-size : 4vh;
    font-family : "avengersFont";
    /*color : #0B0930;*/
`
export const Title = styled.h1`
    text-align : center;
    margin : 5%;
    /* era 5%*/
    font-size : 4rem ;
    font-family : "avengersFont";
    /*color : #0B0930;*/
    color :  #2C2A89 ;
`
export const NavTitle = styled.h2`
    margin-top : 15% ;
    text-align : center;
    font-size : 3rem ;
    font-family : "avengersFont";
   /* color : #0B0930;*/
   color :  #ffffff;
`
export const ButtonTitle = styled.h3`
    font-family : 'avengersFont';
    color : #5C49C6;

`
export const Menu = styled.div`
    margin-top : 10%;
    margin-left : 25%;
    width : 50%;
    display : flex;
	flex-flow: column nowrap;
    padding-left : 5%;
    padding-right : 5%;
    background-color : none;
    height : 80%;
`