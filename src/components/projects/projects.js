import * as React from 'react'
import styled from '@emotion/styled'
import CardList from '../card-list'
import Card from '../card'
import { pxToRem } from '../../helper'
import SectionTitle from '../section-title'

const Section = styled.section`
  margin: ${pxToRem(50)} 0;
`

const Projects = ({ data, path }) => {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <CardList>
        {data.map(({ node: post }) => (
          <Card key={post.id} {...post} basePath={path} />
        ))}
      </CardList>
    </Section>
  )
}

export default Projects
