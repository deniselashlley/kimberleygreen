import * as React from 'react'
import styled from '@emotion/styled'
import { pxToRem } from '../../helper'
import SectionTitle from '../section-title'

const IntroductionText = styled.p`
  line-height: 1.7;
  font-size: ${pxToRem(20)};
  margin: 0 0 ${pxToRem(30)};

  @media (min-width: ${props => props.theme.responsive.medium}) {
    text-align: center;
    font-size: ${pxToRem(25)};
    margin: 0 0 ${pxToRem(60)};
  }
`

const About = () => {
  return (
    <section>
      <SectionTitle>About Me</SectionTitle>
      <IntroductionText>
        As a freelancer web professional, based in London, UK. <br />I
        specialise in producing high quality, modern and web standard, front-end
        development.
      </IntroductionText>
    </section>
  )
}

export default About
