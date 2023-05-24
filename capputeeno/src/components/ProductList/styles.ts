import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    padding-top: 36px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    max-width: 100%;
    grid-gap: 32px;
  `}
`
