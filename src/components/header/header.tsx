import React, { FC, useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import './header.scss';

export interface Directions {
  home: string;
  about: string;
  skills: string;
  projects: string;
  contact: string;
}

interface HeaderProps {
  width: number;
  directions: Directions;
}

const Header: FC<HeaderProps> = ({
  width,
  directions: { home, about, skills, projects, contact },
}: HeaderProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={open ? 'open header' : 'header'}>
      {width <= 520 && (
        <button
          type="button"
          className="toggle"
          onClick={e => setOpen(prev => !prev)}
        >
          {open ? <MdClose /> : <FaBars />}
        </button>
      )}
      <nav className={open ? 'open' : ''}>
        <ul>
          <li>
            <AniLink
              to="/"
              activeClassName="active"
              swipe
              entryOffset={100}
              duration={0.7}
              direction={home}
            >
              Home
            </AniLink>
          </li>
          <li>
            <AniLink
              swipe
              entryOffset={100}
              duration={0.7}
              direction={about}
              to="/about"
              activeClassName="active"
              partiallyActive
            >
              About
            </AniLink>
          </li>
          <li>
            <AniLink
              to="/skills"
              activeClassName="active"
              partiallyActive
              swipe
              entryOffset={100}
              top="exit"
              duration={0.7}
              direction={skills}
            >
              Skills
            </AniLink>
          </li>
          <li>
            <AniLink
              to="/projects"
              activeClassName="active"
              partiallyActive
              swipe
              entryOffset={100}
              duration={0.7}
              top="exit"
              direction={projects}
            >
              Projects
            </AniLink>
          </li>
          <li>
            <AniLink
              to="/contact"
              activeClassName="active"
              partiallyActive
              swipe
              entryOffset={100}
              duration={0.7}
              direction={contact}
            >
              Contact
            </AniLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
