import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import { pxToRem } from '../../helper'

const NavList = ({ isOpen }) => {
  const { menuLinks } = useSiteMetadata()

  const handleClick = event => {
    console.log(event)
  }

  return (
    <ul>
      {menuLinks.map(link => (
        <li key={link.name}>
          {link.name === 'Projects' ? (
            <AnchorLink
              to={link.slug}
              title={link.name}
            />
          ) : (
            <Link
              to={link.slug}
              onClick={handleClick}
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
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
