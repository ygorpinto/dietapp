import styled from 'styled-components'

const Content = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
@media screen and (max-width:450px){
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
}
`

export default Content;