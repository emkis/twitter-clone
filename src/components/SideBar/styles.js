import styled from 'styled-components'

import { Search } from '../../styles/Icons'

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`

export const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;

  width: min(399px, 100%);
  max-height: 57px;
  padding: 10px 24px;

  background: var(--primary);
`

export const SearchBar = styled.input`
  width: 100%;
  height: 39px;

  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19px;

  outline: 0;
  background: var(--search);

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease;
  }

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }

  &::placeholder {
    color: var(--gray);
  }
`

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 3px;
  padding: 57px 24px 200px;

  > div + div {
    margin-top: 15px;
  }
`
