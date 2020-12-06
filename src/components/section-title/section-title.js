import React from 'react'
import styled from '@emotion/styled'

import { pxToRem } from '../../helper'

const Title = styled.h2`
  font-size: ${pxToRem(30)};
  font-weight: 400;
  margin: ${pxToRem(28)} 0;
  text-align: center;
  color: #0a65a5;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    margin: ${pxToRem(50)} 0 ${pxToRem(20)};
  }
`

const SectionTitle = props => {
  return <Title>{props.children}</Title>
}

export default SectionTitle
