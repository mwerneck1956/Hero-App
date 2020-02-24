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
          src :   '../images/heroAppContainer.jpg';
      }

`
export const Title = styled.h1`
    text-align : center;
    margin : 5%;
    /* era 5%*/
    font-size : 4rem ;
    font-family : "avengersFont";
    /*color : #0B0930;*/
    color :  #F5FFF5
`
export const NavTitle = styled.h2 `
    margin-top : 15% ;
    text-align : center;
    font-size : 3rem ;
    font-family : "avengersFont";
   /* color : #0B0930;*/
   color :  #FFFFFF
`
export const ButtonTitle = styled.h3 `
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