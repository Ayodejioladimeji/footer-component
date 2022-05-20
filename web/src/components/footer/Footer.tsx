import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <p>
        Important to note, trading in cryptocurrencies and in particular
        synthetic assets comes with risks. You can lose all your investment.
        Furthermore, trading in cryptocurrencies generally and trading on
        ULTAINFINITY Exchange UTTA, DIVIT or any assets on our platforms are not
        regulated by any Financial Authority.
      </p>

      <div className="footer-div">
        <Link to="/privacy">Privacy</Link>

        <Link to="/terms">Terms</Link>

        <Link to="/resources">Resources</Link>

        <Link to="/roadmaps">Road Maps</Link>
      </div>

      <small>© Ultainfinity Wealth Launchpad 2022</small>
    </div>
  );
};

export default Footer;
