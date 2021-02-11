import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .itens{
    width:50%;
    margin-top:6%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:2px 2px 2px 2px rgb(0,0,0);
    @media screen and (max-width:450px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
  }
  .title{
    font-size:3.8vh;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-shadow:1px 1px rgba(0,0,0,0.5);
    @media screen and (max-width:450px){
    font-size:3.2vh;
    }
  }
  .img{
    border-radius:30%;
    @media screen and (max-width:450px){
    width:60vw;
    }
  }
  .txt{
    font-size:2.2vh;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .menutitle{
    font-size:2.2vh;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,Impact, 'Arial Narrow Bold', sans-serif, sans-serif;
  }
  .menu{
    font-size:2.2vh;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
