import styled, { css } from 'styled-components'

import { Chat, Retweet, Favorite } from '../../styles/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;
  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);
`

export const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 49px;
  height: 49px;

  border-radius: 50%;
  flex-shrink: 0;

  background: var(--gray);
`

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);

  > svg {
    width: 16px;
    height: 16px;

    margin: 0 9px 0 35px;

    > path {
      fill: var(--gray);
    }
  }
`

export const Body = styled.div`
  position: relative;

  display: flex;
  margin-top: 3px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  font-size: 15px;
  line-height: 1;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  margin: 0 5px;

  background: var(--gray);
`

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`

export const ImageContent = styled.div`
  width: 100%;
  height: min(285px, max(175px, 41vw));
  margin-top: 12px;

  border-radius: 14px;
  background: var(--outline);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 11px auto 0;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`

const iconCSS = css`
  width: 19px;
  height: 19px;
`

export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`
