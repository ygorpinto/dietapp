import styled from 'styled-components'

const Button = styled.button`
width:8vw;
height:6vh;
background-color:rgb(0,0,0);
color:white;
font-size:1.6vw;
border-radius:8px;
box-shadow:0px 2px rgba(0,0,0,0.5);
@media screen and (max-width:450px){
font-size:4vw;
width:16.8vw;
height:6.2vh;
:hover{
    opacity:0.4;
}
}
`

export default Button;