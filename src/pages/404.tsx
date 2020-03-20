import React, { FC } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../scss/404.scss';

const NotFoundPage: FC = (): JSX.Element => (
  <Layout
    directions={{ home: '', about: '', skills: '', projects: '', contact: '' }}
  >
    <SEO title="404: Not found" description="404 Page" />
    <section className="not-found container">
      <div className="wp">
        <h1>Oops!</h1>
      </div>
      <h2>404 - Page not found</h2>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <AniLink
        to="/"
        activeClassName="active"
        swipe
        entryOffset={100}
        duration={0.7}
        direction="up"
      >
        Home
      </AniLink>
    </section>
  </Layout>
);

export default React.memo(NotFoundPage);
