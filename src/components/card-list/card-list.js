import * as React from 'react'
import styled from '@emotion/styled'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 auto;
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
