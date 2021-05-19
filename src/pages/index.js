import { graphql } from 'gatsby';
import React from 'react';
import Articles from '../components/articles';
import Layout from '../components/layout';

// markup
const IndexPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Articles posts={posts} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query AllPostsOderByDateDesc {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date
          description
          title
        }
      }
    }
  }
`;
