// eslint-disable-next-line camelcase
import { Saira_Stencil_One } from 'next/font/google'
import styled, { css } from 'styled-components'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

export const Wrapper = styled.a.attrs(() => ({
  className: sairaStencil.className,
}))`
  ${({ theme }) => css`
    color: var(--logo-color);
    font-size: 40px;
    line-height: 150%;
    font-family: ${sairaStencil.style};
    color: ${theme.color.danger};
  `}
`
