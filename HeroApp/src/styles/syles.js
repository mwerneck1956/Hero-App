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
    font-size : 3rem ;
    font-family : "avengersFont";
    color : #484848
`
