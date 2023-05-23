import styled, { css } from 'styled-components'

interface SearchFieldProps {
  isOpen: boolean
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.textDark};
    position: relative;
  `}
`

export const SearchField = styled.button<SearchFieldProps>`
  ${({ isOpen, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: inherit;
    color: ${theme.color.textDark};
    border: none;
    background: none;

    svg {
      transform: ${isOpen && `rotate(180deg)`};
    }
  `}
`

export const PriorityOptions = styled.ul`
  ${() => css`
    position: absolute;
    padding: 12px 16px;

    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    list-style: none;
    font-family: inherit;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 176px;
    top: 120%;
    right: 0px;
  `}
`
