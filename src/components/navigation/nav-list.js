import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import { pxToRem } from '../../helper'

const activeLinkStyle = {
  color: '#53666E',
}

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding-top: ${pxToRem(60)};

  @media (min-width: 1101px) {
    flex-direction: row;
    align-items: flex-end;
    min-height: ${pxToRem(105)};
    margin-right: ${pxToRem(10)};
    padding-top: 0;
  }

  li {
    margin: ${pxToRem(15)};
    text-align: center;

    @media (min-width: 1101px) {
      text-align: left;
    }
  }

  a {
    color: ${props => props.theme.colors.white};
    text-transform: lowercase;
    font-size: ${pxToRem(19)};

    &:hover {
      color: ${props => props.theme.colors.shuttleGray};
    }
  }
`

const NavList = ({ isOpen }) => {
  const { menuLinks } = useSiteMetadata()

  const handleClick = event => {
    console.log(event)
  }

  return (
    <NavItems>
      {menuLinks.map(link => (
        <li key={link.name}>
          {link.name === 'Projects' ? (
            <AnchorLink
              to={link.slug}
              title={link.name}
              activeStyle={activeLinkStyle}
            />
          ) : (
            <Link
              to={link.slug}
              activeStyle={activeLinkStyle}
              onClick={handleClick}
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </NavItems>
  )
}

NavList.propType = {
  isOpen: PropTypes.boolean,
  className: PropTypes.string,
}

NavList.defaultProps = {
  isOpen: false,
  className: '',
}

export default React.memo(NavList)
