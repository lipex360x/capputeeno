import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 4px;

    img {
      width: 256px;
      height: 300px;
      border-radius: 4px 4px 0 0;
    }
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 8px;
    padding: 8px;

    h3 {
      font-weight: 300;
      font-size: 16px;
      line-height: 150%;
      color: ${theme.color.textDark};
    }

    hr {
      width: 228px;
      border: 1px solid ${theme.color.shapesLight};
    }

    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 150%;
      color: ${theme.color.shapesDark};
    }
  `}
`
