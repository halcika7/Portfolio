import React, { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
}

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== 'undefined' ? document.getElementById('portal') : null;

const Portal: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.add('no-scroll');
      // eslint-disable-next-line no-unused-expressions
      portalRoot?.classList.add('show');
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('no-scroll');
        // eslint-disable-next-line no-unused-expressions
        portalRoot?.classList.remove('show');
      }
    };
  }, []);

  return portalRoot && ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
