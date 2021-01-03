import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Header from './header'
import Footer from './footer'
import { globalStyles } from '../styles/globalStyles.js'

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Layout = props => {

  return (
    <div>
        <Header />
        <main id="main">{props.children}</main>
        <Footer />
        <Global styles={globalStyles} />
    </div>
  )
}

export default Layout
