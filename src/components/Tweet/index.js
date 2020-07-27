import React from 'react'

import {
  Container,
  Avatar,
  Retweeted,
  RetweetIcon,
  Body,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from './styles'

function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        You Retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Lorem Ipsum</strong>
            <span>@lipsum</span>
            <Dot />
            <time>Jul 25</time>
          </Header>

          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />9
            </Status>
            <Status>
              <RetweetIcon />
              25
            </Status>
            <Status>
              <LikeIcon />
              354
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet
