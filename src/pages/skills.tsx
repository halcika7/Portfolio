import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ReactTooltip from 'react-tooltip';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../scss/skills.scss';

const Skills: FC = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      html: file(relativePath: { eq: "skills/front/html.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      css: file(relativePath: { eq: "skills/front/css.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bootstrap: file(relativePath: { eq: "skills/front/bootstrap.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sass: file(relativePath: { eq: "skills/front/sass.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      js: file(relativePath: { eq: "skills/front/js.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ts: file(relativePath: { eq: "skills/front/ts.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: { eq: "skills/front/react.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      angular: file(relativePath: { eq: "skills/front/angular.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redux: file(relativePath: { eq: "skills/front/redux.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rxjs: file(relativePath: { eq: "skills/front/rxjs.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      node: file(relativePath: { eq: "skills/backend/node.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      express: file(relativePath: { eq: "skills/backend/express.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nest: file(relativePath: { eq: "skills/backend/nest.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postgres: file(relativePath: { eq: "skills/backend/postgres.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mongo: file(relativePath: { eq: "skills/backend/mongo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mocha: file(relativePath: { eq: "skills/backend/mocha.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      auth: file(relativePath: { eq: "skills/backend/auth.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      passport: file(relativePath: { eq: "skills/backend/passport.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jwt: file(relativePath: { eq: "skills/backend/jwt.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socket: file(relativePath: { eq: "skills/backend/socket.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sequelize: file(relativePath: { eq: "skills/backend/sequelize.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      typeorm: file(relativePath: { eq: "skills/backend/typeorm.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      terminal: file(relativePath: { eq: "skills/tools/terminal.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postman: file(relativePath: { eq: "skills/tools/postman.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vsc: file(relativePath: { eq: "skills/tools/vsc.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eslint: file(relativePath: { eq: "skills/other/eslint.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chrome: file(relativePath: { eq: "skills/other/chrome.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroku: file(relativePath: { eq: "skills/other/heroku.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linux: file(relativePath: { eq: "skills/other/linux.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      git: file(relativePath: { eq: "skills/other/git.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      npm: file(relativePath: { eq: "skills/other/npm.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout
      directions={{
        home: 'right',
        about: 'right',
        skills: 'right',
        projects: 'left',
        contact: 'left',
      }}
    >
      <SEO title="Skills" description="Skills Page" />
      <section className="container skills">
        <section className="frontend">
          <h3>Frontend</h3>
          <div className="images">
            <span data-tip="HTML 5">
              <Img
                fluid={data.html.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="CSS 3">
              <Img
                fluid={data.css.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Bootstrap 4">
              <Img
                fluid={data.bootstrap.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="SASS">
              <Img
                fluid={data.sass.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Javascript">
              <Img
                fluid={data.js.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Typescript">
              <Img
                fluid={data.ts.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="React JS">
              <Img
                fluid={data.react.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Angular">
              <Img
                fluid={data.angular.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Redux">
              <Img
                fluid={data.redux.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="RxJS">
              <Img
                fluid={data.rxjs.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
          </div>
        </section>
        <section className="backend">
          <h3>Backend</h3>
          <div className="images">
            <span data-tip="Node JS">
              <Img
                fluid={data.node.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Express JS">
              <Img
                fluid={data.express.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Nest JS">
              <Img
                fluid={data.nest.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="MongoDB">
              <Img
                fluid={data.mongo.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="PostgreSQL">
              <Img
                fluid={data.postgres.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Mocha JS">
              <Img
                fluid={data.mocha.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="AuthO">
              <Img
                fluid={data.auth.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Passport JS">
              <Img
                fluid={data.passport.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Json Web Token">
              <Img
                fluid={data.jwt.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Web Socket/ Socket.io">
              <Img
                fluid={data.socket.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Sequelize">
              <Img
                fluid={data.sequelize.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Typeorm">
              <Img
                fluid={data.typeorm.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
          </div>
        </section>
        <section className="tools">
          <h3>Tools</h3>
          <div className="images">
            <span data-tip="Visual Studio Code">
              <Img
                fluid={data.vsc.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Postman">
              <Img
                fluid={data.postman.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Terminal">
              <Img
                fluid={data.terminal.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
          </div>
        </section>
        <section className="other">
          <h3>Other</h3>
          <div className="images">
            <span data-tip="Git">
              <Img
                fluid={data.git.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="Heroku">
              <Img
                fluid={data.heroku.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="npm">
              <Img
                fluid={data.npm.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
            <span data-tip="EsLint">
              <Img
                fluid={data.eslint.childImageSharp.fluid}
                imgStyle={{ objectFit: 'contain' }}
              />
            </span>
          </div>
        </section>
      </section>
      <ReactTooltip />
    </Layout>
  );
};

export default React.memo(Skills);
