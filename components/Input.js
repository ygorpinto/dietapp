import styled from 'styled-components'

const Input = styled.input`
width:30vw;
height:5vh;
border-radius:6px;
box-shadow:0px 2px rgba(0,0,0,0.5);
margin-right:3%;
font-size:3.2vh;
::placeholder{
    text-align:center;
}
@media screen and (max-width:450px){
    width:66vw;
    }
`

export default Input;