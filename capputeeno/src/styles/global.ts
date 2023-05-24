import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    min-width: 100vh;
    font-family: ${theme.font.default};

    & main {
      background-color: ${theme.color.bgPrimary};
    }
  }
`}`
