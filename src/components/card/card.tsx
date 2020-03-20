import React, { FC } from 'react';
import Img, { FluidObject } from 'gatsby-image';

import { FaGithub, FaLink } from 'react-icons/fa';

import './card.scss';

export interface Project {
  id: number;
  title: string;
  frontend: string[];
  backend?: string[];
  testing?: string[];
  info?: string;
  github: string;
  url: string;
  img: FluidObject;
  scale?: boolean;
  type: 'full' | 'front' | 'other';
}

const Card: FC<Project> = ({
  title,
  frontend,
  backend,
  testing,
  info,
  github,
  url,
  img,
  type,
  scale,
}: Project): JSX.Element => {
  return (
    <div className={scale ? 'card scale' : 'card'}>
      <div className="front">
        <Img fluid={img} />
      </div>
      <div className="back">
        <h3>{title}</h3>
        <p>
          {type === 'full' ? (
            <span>Frontend:</span>
          ) : (
            <span>Technologies:</span>
          )}{' '}
          {frontend.join(', ')}
        </p>
        {backend && (
          <p>
            <span>Backend:</span> {backend.join(', ')}
          </p>
        )}
        {testing && (
          <p>
            <span>Testing:</span> {testing.join(', ')}
          </p>
        )}
        {info && <p>{info}</p>}
        <div className="links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <span>Github</span>
            <FaGithub />
          </a>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
            >
              <span>Website Link</span>
              <FaLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
