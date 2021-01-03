import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'


const NotFoundPage = () => (
  <Layout>
    <SEO title="404" description="Page Not Found" />
      <h1>Page Not Found</h1>
      <Text>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </Text>
  </Layout>
)

export default NotFoundPage
