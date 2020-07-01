import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Container from '../components/container'
import PageTitle from '../components/page-title'
import SEO from '../components/seo'

const InstagramGallery = () => {
  return (
    <Layout>
      <SEO title="Gallery" description="My work....." />
      <Container>
        <PageTitle>Gallery</PageTitle>
      </Container>
    </Layout>
  )
}

export default InstagramGallery
