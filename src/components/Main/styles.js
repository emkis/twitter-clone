import styled, { css } from 'styled-components'

import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from '../../styles/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`
export const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 8px 0 9px 13px;
  z-index: 2;

  border-bottom: 1px solid var(--outline);
  background: var(--primary);

  > button {
    padding: 8px;
    cursor: pointer;

    outline: 0;
    border-radius: 50%;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
  z-index: 2;

  border-top: 1px solid var(--outline);
  background: var(--primary);

  @media (min-width: 500px) {
    display: none;
  }
`

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;

  fill: var(--gray);

  &:hover,
  &:active {
    fill: var(--twitter);
  }
`

export const HomeIcon = styled(Home)`
  ${iconCSS}
`

export const SearchIcon = styled(Search)`
  ${iconCSS}
`

export const EmailIcon = styled(Email)`
  ${iconCSS}
`

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`
