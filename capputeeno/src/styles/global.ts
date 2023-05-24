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

  .html-main {
    min-height: 100vh;
    background-color: ${theme.color.bgPrimary};
  }
`}`
