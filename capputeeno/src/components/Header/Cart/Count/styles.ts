import styled, { css } from 'styled-components'

export const Wrapper = styled.span`
  ${({ theme }) => css`
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 12px;
    background: ${theme.color.delete};
    color: white;

    position: absolute;
    right: -6px;
    top: 50%;
  `}
`
