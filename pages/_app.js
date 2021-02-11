import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .itens{
    margin-top:6%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .title{
    font-size:3.8vh;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-shadow:1px 1px rgba(0,0,0,0.5);
  }
  .img{
    border-radius:40%;
    box-shadow:3px 3px rgba(0,0,0,0.5);
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
  .menuitens{}
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
