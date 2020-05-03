import React, { FC, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Card, { Project } from '../components/card/card';

import '../scss/projects.scss';

const Projects: FC = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      auction: file(relativePath: { eq: "auction.png" }) {
        childImageSharp {
          fluid(maxWidth: 449, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ecom: file(relativePath: { eq: "ecom.png" }) {
        childImageSharp {
          fluid(maxWidth: 449, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      print: file(relativePath: { eq: "print.png" }) {
        childImageSharp {
          fluid(maxWidth: 449, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nba: file(relativePath: { eq: "nba.png" }) {
        childImageSharp {
          fluid(maxWidth: 449, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      burger: file(relativePath: { eq: "burger.png" }) {
        childImageSharp {
          fluid(maxWidth: 449, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rubicon: file(relativePath: { eq: "rubicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 449, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: { eq: "skills/front/react.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsby: file(relativePath: { eq: "skills/front/gatsby.png" }) {
        childImageSharp {
          fluid(maxWidth: 449, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bash: file(relativePath: { eq: "skills/tools/terminal.png" }) {
        childImageSharp {
          fluid(maxWidth: 449, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      python: file(relativePath: { eq: "python.png" }) {
        childImageSharp {
          fluid(maxWidth: 449, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [full] = useState<Project[]>([
    {
      id: 100,
      title: 'Job listing',
      frontend: ['React', 'Typescript', 'SCSS', 'Redux', 'Formik'],
      backend: [
        'Node.js',
        'Express.js',
        'Typescript',
        'PostgreSQL',
        'TypeORM',
        'JWT',
        'Redis',
        'Twilio',
        'Neverbounce',
        'Passport.js',
        'Yarn Workspaces',
      ],
      testing: ['Jest', 'Enzyme'],
      github: 'https://github.com/halcika7/JobWeb',
      img: data.react.childImageSharp.fluid,
      url: '',
      type: 'full',
      info: 'Currently in progress',
      scale: true,
    },
    {
      id: 1,
      title: 'Auction App',
      frontend: ['Angular', 'Javascript', 'Typescript', 'NgRx', 'RxJS', 'SCSS'],
      backend: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Sequelize',
        'Passport.js',
        'JWT',
        'Web Sockets',
        'SendGrid',
        'Twilio',
        'Stripe',
        'Cloudinary',
        'Node-cron',
        'Neverbounce',
      ],
      github: 'https://github.com/halcika7/AuctionApp',
      url: 'https://polar-lake-39918.herokuapp.com/home',
      img: data.auction.childImageSharp.fluid,
      type: 'full',
    },
    {
      id: 2,
      title: 'Ecommerce App',
      frontend: [
        'React',
        'Javascript',
        'Redux',
        'CSS3',
        'Bootstrap 4',
        'Google Maps',
      ],
      backend: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Passport.js',
        'JWT',
        'Web Sockets',
        'SendGrid',
        'Node-cron',
        'Stripe',
      ],
      testing: ['Mocha', 'Chai', 'Supertest'],
      github: 'https://github.com/halcika7/Ecommerce-website',
      url: 'https://still-waters-45697.herokuapp.com/',
      img: data.ecom.childImageSharp.fluid,
      type: 'full',
    },
    {
      id: 3,
      title: 'Print Shop',
      frontend: [
        'React',
        'Redux',
        'Javascript',
        'CSS3',
        'Bootstrap 4',
        'Helmet',
        'Charts',
      ],
      backend: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Passport.js',
        'JWT',
        'Google OAuth',
        'Web Sockets',
        'SendGrid',
      ],
      testing: ['Mocha', 'Chai', 'Supertest'],
      github: 'https://github.com/halcika7/Printshop',
      url: 'https://cryptic-cliffs-18144.herokuapp.com/',
      img: data.print.childImageSharp.fluid,
      type: 'full',
    },
    {
      id: 4,
      title: 'NBA',
      frontend: ['Angular', 'Javascript', 'Typescript', 'NgRx', 'RxJS', 'SCSS'],
      backend: ['Node.js', 'Nest.js', 'PostgreSQL', 'TypeORM'],
      info: 'Currently in progress',
      github: 'https://github.com/halcika7/NBA',
      url: '',
      img: data.nba.childImageSharp.fluid,
      type: 'full',
    },
  ]);

  const [react] = useState<Project[]>([
    {
      id: 5,
      title: 'Burger Builder',
      frontend: ['React', 'Redux', 'Firebase'],
      github: 'https://github.com/halcika7/burgerBuilder-react',
      url: 'https://react-my-burger-49530.firebaseapp.com/',
      img: data.burger.childImageSharp.fluid,
      type: 'front',
    },
    {
      id: 6,
      title: 'Movie Search App',
      frontend: [
        'React',
        'Typescript',
        'Redux',
        'SCSS',
        'Jest',
        'Enzyme',
        'ESLint',
      ],
      github: 'https://github.com/halcika7/rubicon',
      url: 'https://rubicon-task.netlify.com/',
      img: data.rubicon.childImageSharp.fluid,
      type: 'front',
    },
  ]);

  const [other] = useState<Project[]>([
    {
      id: 10,
      title: 'Python Project Automation',
      frontend: ['Bash', 'Python', 'Github'],
      github: 'https://github.com/halcika7/python-web-automation',
      url: '',
      img: data.bash.childImageSharp.fluid,
      type: 'other',
      scale: true,
    },
    {
      id: 11,
      title: 'NBA Data Scraping',
      frontend: ['Python', 'Selenium', 'Beautiful Soup', 'Requests'],
      github: 'https://github.com/halcika7/nbaScrapingPython',
      url: '',
      img: data.python.childImageSharp.fluid,
      type: 'other',
      scale: true,
    },
  ]);

  return (
    <Layout
      directions={{
        home: 'right',
        about: 'right',
        skills: 'right',
        projects: 'right',
        contact: 'left',
      }}
    >
      <SEO title="Portfolio" description="Projects Page" />
      <main className="portfolio container">
        <section className="projects">
          <h3>Full-Stack Projects</h3>
          <div className="grid">
            {full.map(
              ({
                id,
                title,
                frontend,
                backend,
                testing,
                info,
                github,
                url,
                img,
                type,
              }) => (
                <Card
                  key={`${id}-fullstack`}
                  id={id}
                  title={title}
                  frontend={frontend}
                  backend={backend}
                  testing={testing}
                  info={info}
                  github={github}
                  url={url}
                  type={type}
                  img={img}
                />
              )
            )}
          </div>
        </section>
        <section className="projects">
          <h3>React Projects</h3>
          <div className="grid">
            {react.map(
              ({
                id,
                title,
                frontend,
                info,
                github,
                url,
                img,
                type,
                scale,
              }) => {
                return (
                  <Card
                    key={`${id}-react`}
                    id={id}
                    title={title}
                    frontend={frontend}
                    info={info}
                    github={github}
                    url={url}
                    type={type}
                    img={img}
                    scale={scale}
                  />
                );
              }
            )}
          </div>
        </section>
        <section className="projects">
          <h3>Other Projects</h3>
          <div className="grid">
            {other.map(
              ({
                id,
                title,
                frontend,
                info,
                github,
                url,
                img,
                type,
                scale,
              }) => {
                return (
                  <Card
                    key={`${id}-other`}
                    id={id}
                    title={title}
                    frontend={frontend}
                    info={info}
                    github={github}
                    url={url}
                    type={type}
                    img={img}
                    scale={scale}
                  />
                );
              }
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default React.memo(Projects);
