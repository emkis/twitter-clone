import styled, { css } from 'styled-components'

import { LocationOn, Cake } from '../../styles/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: scroll;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: min(33vw, 199px);
  flex-shrink: 0;

  background: var(--twitter);
`

export const Avatar = styled.div`
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 4px solid var(--primary);
  border-radius: 50%;
  background: var(--gray);

  > img {
    max-width: 100%;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const ProfileData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  > h1 {
    font-size: 19px;
    font-weight: bold;
  }

  > h2 {
    font-size: 15px;
    font-weight: normal;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    margin: 10px 0;
    list-style: none;

    > li {
      display: flex;
      align-items: center;

      font-size: 15px;
      line-height: 1.5;
      color: var(--gray);
    }

    > li svg {
      fill: var(--gray);
      margin-right: 5px;
    }
  }
`

const iconCSS = css`
  width: 20px;
  height: 20px;

  fill: var(--gray);
`

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`
