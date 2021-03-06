import portraitImage from '../images/portrairWelcomeImage.jpg'
import styled from 'styled-components'
import '../fonts/fonts.css'

export const DivCard = styled.div `
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-items : center;
    justify-content : center;
    align-items : center;

`

export const BackgroundGameScreen = styled.div `
   background-image: url("../images/BackgroundGameScreen.jpg");
   background-size : cover;
   position : fixed;
   height  : 100vh;
   width  : 100vw;

`
export const Item = styled.h2`
    margin-top : 3%;
    font-family : "avengersFont";
    font-size : 4vh ;
`
export const SubItem = styled.h4`
    
    font-size : 4vh;
    font-family : "avengersFont";
    
`
export const Title = styled.h1`
    text-align : center;

    font-size : 6rem ;
    font-family : "avengersFont";
    color :#1A1808;
`
export const NavTitle = styled.h2`
    margin-top : 15% ;
    text-align : center;
    font-size : 3rem ;
    font-family : "avengersFont";
 
   color :  #ffffff;
`
export const ButtonTitle = styled.h3`
    font-family : 'avengersFont';
    color : #5C49C6;

`
export const StatisticNumber = styled.h4 `
    display : inline-block;
    font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size : '2rem';

`
export const Menu = styled.div`
    margin-top : 7%;
    margin-left : 25%;
    width : 50%;
    display : flex;
    justify-content : center;
	flex-direction : column;
    padding-left : 5%;
    padding-right : 5%;
    background-color : none;
    height : 80%;
`
export const StatisticTitle  = styled.h2 `
    font-family : "avengersFont" ;
    font-size  : ${props => `${props.fontSize}vh`} ;
    color  : rgb(24, 0, 64);
     

`
export const Panel = styled.div `
  background-color:#fff;
  border:solid 2px #000;
  box-shadow:0 6px 6px -6px #000;
  display:inline-block;
  flex:1 1;
  height:80vh;
  margin:1vmin;
  overflow:hidden;
  position:relative;
  background-image:radial-gradient(circle, palegreen, yellowgreen);
  width : 100%;
  `