import React from 'react'

import { Container, Item, Title } from './styles'

function List({ title, elements }) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>

        {elements.map((element, index) => (
          <Item key={index}>{element}</Item>
        ))}
      </Item>
    </Container>
  )
}

export default List
