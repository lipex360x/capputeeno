import styled, { DefaultTheme, css } from 'styled-components'

interface ItemProps {
  selected: boolean
}

export const Wrapper = styled.ul`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  `}
`

const hasSelected = (theme: DefaultTheme) => css`
  border-bottom: 4px solid ${theme.color.orangeLow};
  font-weight: 600;
`

export const Item = styled.li<ItemProps>`
  ${({ theme, selected }) => css`
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    cursor: pointer;

    align-items: center;
    text-align: center;

    color: ${theme.color.textDarkLight};
    list-style: none;

    ${selected && hasSelected(theme)}
  `}
`
