import React from 'react';
import SEO from "../components/seo"
import Layout from '../components/Layout';
import About from '../components/about';

const IndexPage = () => {
  return (
    <Layout>
        <SEO title="Home" />
        <About />
    </Layout>
  )
}

export default IndexPage;
