import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 352px;
    border-radius: 8px;
    padding: 10px 16px;
    background-color: ${theme.color.bgSecondary};

    font-size: 14px;

    input {
      border: none;
      background-color: inherit;
      outline: none;
      flex: 1;

      font-family: inherit;
      color: ${theme.color.textDark};
    }
  `}
`
