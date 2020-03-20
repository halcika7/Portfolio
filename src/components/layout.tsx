import React, { ReactNode, FC, useEffect, useState } from 'react';

import Header, { Directions } from './header/header';
import Footer from './footer/footer';

import './layout.scss';

interface LayoutProps {
  children: ReactNode;
  directions: Directions;
}

const Layout: FC<LayoutProps> = ({
  children,
  directions,
}: LayoutProps): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  let wrapper: any = null;

  const resizeWindow = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      wrapper = document.querySelector<HTMLElement>('.tl-wrapper--mount');
      setWidth(window.innerWidth);
      window.addEventListener('resize', resizeWindow);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeWindow);
      }
    };
  }, []);

  useEffect(() => {
    if (wrapper?.style.transform === 'translate(0px, 0px)') {
      wrapper.style.transform = 'none';
    }
  }, [wrapper?.style.transform]);

  return (
    <>
      <Header width={width} directions={directions} />
      {children}
      <Footer />
    </>
  );
};

export default React.memo(Layout);
