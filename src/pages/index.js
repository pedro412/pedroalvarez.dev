import React, { useEffect } from 'react';
import Layout from '../components/layout';

// markup
const IndexPage = () => {
  useEffect(() => {
    console.log('effect!');
  }, []);

  return (
    <Layout>
      <main>
        <h1>Hola!</h1>
        <p>lorem</p>
      </main>
    </Layout>
  );
};

export default IndexPage;
