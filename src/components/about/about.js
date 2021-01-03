import * as React from 'react'
import styled from '@emotion/styled'
import { pxToRem } from '../../helper'

const IntroductionText = styled.div`
  line-height: 1.7;
  font-size: ${pxToRem(18)};
  margin: 0 auto;
  max-width: ${pxToRem(700)};

  p {
    margin-bottom:  ${pxToRem(15)};
    text-align: center;
  }

  ul {
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    
    li {
      padding: 0 ${pxToRem(8)}
    }
  }
`

const About = () => {
  return (
    <section>
      <IntroductionText>
      <p>As a freelancer web professional, based in London, UK. <br/>I have over 10 years of industry experience.</p><p>I specialise mainly in CSS, Javascript; 
        and producing high quality, modern and web standard coded front end applications.</p>
        {/* As a freelancer web professional, based in London, UK. <br />I
        specialise in producing high quality, modern and web standard, front-end
        development. */}
      </IntroductionText>
      <IntroductionText>
        <ul>
          <li>Javascript</li>
          <li>ES6</li>
          <li>Typescript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li> SASS</li>
          <li>React</li>
          <li>React Testing Library</li>
          <li>GATSBY</li>
          <li>GIT</li>
          <li>Accessibility</li>
        </ul>
      </IntroductionText>
    </section>
  )
}

export default About
