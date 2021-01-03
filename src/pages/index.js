import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import About from '../components/about';

const IndexPage = () => {
  return (
    <Layout>
        <About />
    </Layout>
  )
}

export default IndexPage;
