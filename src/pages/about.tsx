import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

import { IoIosGift } from 'react-icons/io';
import { GiBookmarklet, GiConsoleController } from 'react-icons/gi';
import { GoCalendar, GoLocation, GoMail } from 'react-icons/go';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../scss/about.scss';

import cv from '../files/HarisBeslic.pdf';

const birth = new Date(1995, 1, 11);

const About: FC = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ja2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const date = new Date();

  return (
    <Layout
      directions={{
        home: 'right',
        about: 'left',
        skills: 'left',
        projects: 'left',
        contact: 'left',
      }}
    >
      <SEO title="About" description="About Page" />
      <main className="about container">
        <section className="about-me">
          <div className="about-img">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <div className="paragraphs">
            <h1>Hi I&apos;m Haris Bešlić</h1>
            <p>
              I&apos;m <span>Energetic</span> and <span>passionate</span>{' '}
              college student working towards Bachelor&apos;s degree in
              Information Technologies. I&apos;m also a full stack web
              developer. I enjoy using my obsessive attention to detail, my
              unequivocal love for making things, and my mission-driven work
              ethic to literally change the world.
            </p>
            <p>
              I spend my free time hanging out with my friends, playing
              basketball and video games.
            </p>
            <p>
              Interested in working together? Feel free to contact me for any
              project or collaboration.
            </p>
            <section className="details">
              <div className="left">
                <div>
                  <IoIosGift /> Birthday: <span>11.01.1995</span>
                </div>
                <div>
                  <GoLocation /> Location: <span>Sarajevo, BiH</span>
                </div>
                <div>
                  <GiBookmarklet /> Study:{' '}
                  <span>
                    <a
                      href="https://www.ibu.edu.ba/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="International Burch Univeristy"
                    >
                      IBU
                    </a>
                  </span>
                </div>
                <div>
                  <GoMail /> Mail: <span>harisbeslic32@gmail.com</span>
                </div>
              </div>
              <div className="right">
                <div>
                  <GoCalendar /> Age:{' '}
                  <span>
                    {Math.ceil(
                      (date.getTime() - birth.getTime()) / 31536000000
                    )}
                  </span>
                </div>
                <div>
                  <GiConsoleController /> Interests: <br />
                  <span>PlayStation, Reading, Basketball</span>
                </div>
              </div>
            </section>
            <section className="buttons">
              <a href={cv} download aria-label="Download CV">
                Download CV
              </a>
              <AniLink
                to="/contact"
                swipe
                entryOffset={100}
                duration={0.7}
                direction="left"
              >
                Send Message
              </AniLink>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default React.memo(About);
