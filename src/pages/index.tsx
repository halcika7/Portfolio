import React, { FC, useState, useEffect } from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Typing from '../components/typing/typing';

import '../scss/index.scss';

import img from '../images/ja.jpg';

const IndexPage: FC = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <Layout
      directions={{
        home: 'left',
        about: 'left',
        skills: 'left',
        projects: 'left',
        contact: 'left',
      }}
    >
      <SEO title="Home" description="Home Page" />
      <main className="main">
        <section className="hero" />
        <section className="me">
          <div className="img">
            <img src={img} alt="ja" />
          </div>
          <h1>
            Haris <span>Bešlić</span>
          </h1>
          {show && <Typing start={show} />}
          <section className="icons">
            <a
              href="https://www.facebook.com/haris.beslic"
              className="fb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/halcika7"
              className="git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/haris-beslic/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default React.memo(IndexPage);
