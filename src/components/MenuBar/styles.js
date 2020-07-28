import styled, { css } from 'styled-components'

import {
  Home,
  Bell,
  Email,
  Person,
  Hash,
  Twitter,
  ExitToApp,
} from '../../styles/Icons'

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    position: sticky;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  padding: 8.25px;
  border-radius: 50%;

  outline: 0;
  cursor: pointer;

  > span {
    display: none;
  }

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  & + button {
    margin-top: 14px;
  }

  & + button:last-child {
    width: 40px;
    height: 40px;
    margin-top: 33px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: revert;

      > span {
        display: revert;
      }
    }
  }

  @media (min-width: 1280px) {
    padding: 10px;
    border-radius: 25px;

    > span {
      display: revert;
      margin-left: 19px;

      font-size: 19px;
      font-weight: bold;
    }
  }
`

export const TwitterIcon = styled(Twitter)`
  width: 41px;
  height: 41px;

  margin-bottom: 20px;
  flex-shrink: 0;

  > path {
    fill: var(--twitter);
  }
`

const iconCSS = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;

  color: var(--white);
`

export const HomeIcon = styled(Home)`
  ${iconCSS}
`

export const MessagesIcon = styled(Email)`
  ${iconCSS}
`

export const ExploreIcon = styled(Hash)`
  ${iconCSS}
`

export const NotificationsIcon = styled(Bell)`
  ${iconCSS}
`

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`

export const BottomSide = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;
`

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    margin-left: 30px;

    width: 25px;
    height: 25px;

    color: var(--white);
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`
