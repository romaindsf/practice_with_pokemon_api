import { createGlobalStyle } from 'styled-components'
import { useTheme } from './context'
import colors from './colors'

const StyleGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        line-height: 1.5
    }
    body {
        background-color: ${({ isdarkmode }) =>
          isdarkmode ? colors.darkBgTheme : colors.lightBgTheme};
        color: ${({ isdarkmode }) => (isdarkmode ? 'white' : 'black')};
        margin: 0;
        padding: 10px;
    }
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${({ isdarkmode }) => (isdarkmode ? 'white' : 'black')};
      }
    h1 {
        font-size: 32px;
        text-align: center;
    }
    h2 {
        font-size: 24px;
        padding-left: 15px;
    }
    h3 {
        font-size: 18px;
    }
    p {
        font-size: 16px;
    }
    ul {
        list-style-type: none;
    }
`
export default function GlobalStyle() {
  const { theme } = useTheme()
  return <StyleGlobalStyle isdarkmode={theme === 'dark'} />
}
