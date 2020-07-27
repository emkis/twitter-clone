import React from 'react'

import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  EditButton,
  Followage,
  LocationIcon,
  ProfileData,
} from './styles'

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://pbs.twimg.com/profile_images/1161799449791930369/dG9dIUvL_400x400.jpg"
            alt="Avatar"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit profile</EditButton>

        <h1>Nicolas Jardim</h1>
        <h2>@emkis</h2>

        <p>
          Just a Frontend Developer that loves Javascript, Vue, React & Design
          stuff. Currently working at{' '}
          <a href="https://www.uoledtech.com.br">@UOL EdTech</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Porto Alegre, Brazil
          </li>
          <li>
            <CakeIcon />
            Born March 28, 1998
          </li>
        </ul>

        <Followage>
          <span>
            <strong>837</strong> Following
          </span>
          <span>
            <strong>1,204</strong> Followers
          </span>
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage
