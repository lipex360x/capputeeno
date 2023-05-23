import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
${() => css`
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
`}`
