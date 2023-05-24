import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: white;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }
  `}
`
