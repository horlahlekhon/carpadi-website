import React from 'react';
import classNames from 'classnames';
import '../styles/mobilenavlinks.css';
import { Link } from 'gatsby';

const MobileNavLinks = ({ open }) => {
  const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
    open: open,
  });

  return (
    <>
    
    <nav aria-label="mobile navigation" className={displayMobileNavLinks}>
      <Link className="mobile-link" to="/faq">
        FAQ's
      </Link>
    
    </nav>
    </>
  );
};

export default MobileNavLinks;