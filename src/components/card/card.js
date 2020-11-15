import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { pxToRem } from '../../helper'

const Post = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
  a {
    display: flex;
    position: relative;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    
    &:before {
      content: '';
      position: absolute;
      display: block;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
      }
  transition: .5s ease;

}
    }
    
    &:hover {
      color: ${props => props.theme.colors.background};
      &:before {
        background: rgba(255, 165, 31, 0.5);
        z-index: 99;
        
    }
    }
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }

      img {
        object-position: top center !important;
      }
    }
  }
`

const StyledImg = styled(Img)`
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`

const Title = styled.h3`
  position: relative;
  font-size: ${pxToRem(20)};
  text-align: center;
  font-weight: 600;
  margin: 1rem 1rem 0.5rem 1rem;
  z-index: 999;
`

const Card = ({ slug, heroImage, title, body, ...props }) => {
  return (
    <>
      {heroImage && body && (
        <Post featured={props.featured}>
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
            <Title>{title}</Title>
          </Link>
        </Post>
      )}
    </>
  )
}

export default Card
