import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import News from '../News'
import FollowSuggestion from '../FollowSuggestion'
import { Container, SearchWrapper, SearchBar, SearchIcon, Body } from './styles'

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchBar placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion name="Jane Doe" nickname="@jdoe" />,
              <FollowSuggestion name="Lorem Ipsum" nickname="@lipsum" />,
              <FollowSuggestion name="John Doe" nickname="@jode" />,
            ]}
          />

          <List
            title="What’s happening"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="What’s happening"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar
