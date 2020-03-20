import React, { FC } from 'react';

import './footer.scss';

const Footer: FC = (): JSX.Element => {
  return (
    <footer>
      <p>
        Made with love by <span>Haris Beslic</span>
      </p>
      <p className="second">
        © {new Date().getFullYear()} <span>Haris Beslic</span> - All Rights
        Reserved
      </p>
    </footer>
  );
};

export default React.memo(Footer);
