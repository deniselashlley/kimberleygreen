import * as React from 'react'
import styled from '@emotion/styled'
import { pxToRem } from '../helper'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: ${pxToRem(30)} ${pxToRem(20)};
  flex-grow: 1;
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
