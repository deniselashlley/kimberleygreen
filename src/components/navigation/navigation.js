import React, { useState, useEffect } from 'react'
import Media from 'react-media'
import styled from '@emotion/styled'

import NavList from './nav-list'
import { pxToRem } from '../../helper'

const Nav = styled.nav`
  position: ${props => (props.overlay ? `fixed` : `relative`)};
  background: ${props => (props.overlay ? props.theme.colors.baliHai : `none`)};
  opacity: 0.98;
  z-index: 999;
  width: 100%;
  overflow: ${props => (props.overlay ? `hidden` : `visible`)};
  height: ${props => (props.overlay ? `100vh` : `auto`)};
  transition: 0.5s;

  @media (min-width: 1101px) {
    position: static;
    display: flex;
    justify-content: flex-end;
    opacity: 1;
    zindex: 0;
  }
`

const MenuButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin-right: ${pxToRem(8)};
  margin-bottom: ${pxToRem(8)};
  width: ${pxToRem(45)};
  height: ${pxToRem(45)};
  padding: 0;
  cursor: pointer;

  &:focus {
    span {
      background-color: ${props => (props.active ? `white` : `black`)};
    }
  }

  span {
    position: absolute;
    left: 50%;
    top: ${pxToRem(25)};
    background-color: black;
    display: block;
    height: 2px;
    width: 50%;
    transform: translate(-50%, 0);
    transform-origin: center center;

    transition: top 0.3s ease 0.3s, transform 0.3s ease,
      background-color 500ms ease;
  }

  span:nth-of-type(1) {
    transform: ${props =>
      props.active
        ? `translate(-50%, 0) rotate(45deg)`
        : `translate(0 0) rotate(0deg)`};
    top: ${props => (props.active ? `${pxToRem(25)}` : `${pxToRem(18)}`)};
  }

  span:nth-of-type(2) {
    opacity: ${props => (props.active ? `0` : `1`)};
  }

  span:nth-of-type(3) {
    transform: ${props =>
      props.active
        ? `translate(-50%, 0) rotate(-45deg)`
        : `translate(0 0) rotate(0deg)`};
    top: ${props => (props.active ? `${pxToRem(25)}` : `${pxToRem(32)}`)};
  }
`

const MobileNavList = styled(NavList)`
  position: absolute;
  top: 0;
  z-index: 999;
  display: block;
  width: 100%;
`

const Navigation = () => {
  const [showMenu, setMenu] = useState(false)

  useEffect(() => {
    if (!showMenu) {
      document.body.classList.remove('kill-scroll')
      document.documentElement.classList.remove('kill-scroll')
    }
  }, [showMenu])

  const handleShowMenu = () => {
    setMenu(!showMenu)

    if (!showMenu) {
      document.body.classList.add('kill-scroll')
      document.documentElement.classList.add('kill-scroll')
    }

    if (showMenu) {
      document.body.classList.remove('kill-scroll')
      document.documentElement.classList.remove('kill-scroll')
    }
  }

  return (
    <Nav overlay={showMenu}>
      <Media query={{ maxWidth: 1100 }}>
        <>
          <MenuButton active={showMenu} type="button" onClick={handleShowMenu}>
            <span />
            <span />
            <span />
          </MenuButton>
          {showMenu && <MobileNavList isOpen={showMenu} />}
        </>
      </Media>
      <Media query={{ minWidth: 1101 }}>
        <NavList />
      </Media>
    </Nav>
  )
}

export default Navigation
