import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Container from '../components/container'
import SectionTitle from '../components/section-title'
import SEO from '../components/seo'
import ContactLinks from '../components/contact-links'
import StyledLists from '../components/styled-components'
import { pxToRem } from '../helper'

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  max-width: ${pxToRem(800)};
  margin: 0 auto;
`

const ContactList = styled(StyledLists)`
  ul {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${pxToRem(25)};

    li {
      margin: ${pxToRem(15)} 0;
      a {
        display: flex;
        align-content: center;
        align-items: center;
      }
    }
  }

  svg {
    display: block;
  }

  span {
    display: block;
    margin: ${pxToRem(5)} 0 0 ${pxToRem(15)};
  }
`

const ProfileImage = styled(Img)`
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: ${pxToRem(30)};
  font-weight: 400;
  margin: ${pxToRem(28)} 0;
  text-align: center;
  @media (min-width: ${props => props.theme.responsive.medium}) {
    font-size: ${pxToRem(40)};
    margin: ${pxToRem(50)} 0;
  }
`

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact description goes here" />
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <Section>
          <ContactList>
            <ContactLinks />
          </ContactList>
          <ProfileImage fixed={data.imageOne.childImageSharp.fixed} />
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact

export const fluidImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "avatar.png" }) {
      ...fixedImage
    }
  }
`
