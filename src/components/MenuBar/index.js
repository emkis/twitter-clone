import React from 'react'

import Button from '../Button'
import {
  Container,
  TopSide,
  TwitterIcon,
  MenuButton,
  HomeIcon,
  MessagesIcon,
  ExploreIcon,
  NotificationsIcon,
  ProfileIcon,
  ExitIcon,
  Avatar,
  BottomSide,
  ProfileData,
} from './styles'

function MenuBar() {
  return (
    <Container>
      <TopSide>
        <TwitterIcon />

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>
        <MenuButton>
          <ExploreIcon />
          <span>Explore</span>
        </MenuButton>
        <MenuButton>
          <NotificationsIcon />
          <span>Notifications</span>
        </MenuButton>
        <MenuButton>
          <MessagesIcon />
          <span>Messages</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </TopSide>

      <BottomSide>
        <Avatar />
        <ProfileData>
          <strong>Nicolas Jardim</strong>
          <span>@emkisn</span>
        </ProfileData>

        <ExitIcon />
      </BottomSide>
    </Container>
  )
}

export default MenuBar
