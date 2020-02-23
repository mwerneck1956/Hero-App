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
    font-size : 4rem ;
    font-family : "avengersFont";
    color : #0B0930;
`
export const ButtonTitle = styled.h3 `
    font-family : 'avengersFont';
    color : #5C49C6;

`
export const Menu = styled.div`
    display : flex;
	flex-flow: column nowrap;
    padding-left : 5%;
    padding-right : 5%;
    background-color : whitesmoke;
    height : 80%;
`