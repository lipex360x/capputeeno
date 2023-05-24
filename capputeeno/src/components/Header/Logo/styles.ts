// eslint-disable-next-line camelcase
import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    color: ${theme.color.logoColor};
    font-size: 40px;
    line-height: 150%;
    font-family: ${theme.font.logo};
  `}
`
