import React, {useState, useEffect} from 'react'
import classNames from 'classnames';
import MobileNavLinks from './MobileNavLinks';
import "../styles/nav.css";
import { Link as Anchor } from 'gatsby';


function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const active = classNames('mobile-menu', {
    open: mobileNavOpen,
  });

  const scrollToWailist = () => {
    window.scrollTo({
      top: 5500,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  useEffect(() => {
    if(mobileNavOpen === true){
      document.body.style.overflow = 'hidden';
    }

    else if (mobileNavOpen === false){
      document.body.style.overflow = 'unset';
    }
  }, [mobileNavOpen])

  return (

  
        <>
          <header className="navigation-wrapper">
            <div className="navigation-header">
              <span className="navigation-names">
                <Anchor className="link" to="/">
                  <img className="logo d-block d-lg-none" style={{width:'123px', height: '46px'}} src="https://res.cloudinary.com/grootretro/image/upload/v1646753364/carpadi-website/carpadi_logo_rokoey.svg" alt="carpadi_logo"></img>
                  <img className="logo d-none d-lg-block" src="https://res.cloudinary.com/grootretro/image/upload/v1646753364/carpadi-website/carpadi_logo_rokoey.svg" alt="carpadi_logo"></img>
                </Anchor>
              </span>
            <div style={{display: 'flex'}}>
                <Anchor to="/faq" className='faq-lg-link d-none d-lg-block'>FAQ's </Anchor>
            
              <div className='navigation-button'>
                <button onClick={scrollToWailist}>
                  Join Waitlist
                </button>
                
                </div>
              <span className="navigation-links d-block d-lg-none">
                <button
                  aria-label="Toggle Mobile Menu Button"
                  className={active}
                  onClick={() => {
                    setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
                  }}
                >
                  <img src={mobileNavOpen === true ? "https://res.cloudinary.com/grootretro/image/upload/v1646244422/carpadi-website/close_icon_wqjrhy.png" : "https://res.cloudinary.com/grootretro/image/upload/v1646751540/carpadi-website/toggle-icon_bftxlv.png"} alt="toggle icon" />
                </button>
              </span>
              </div>

            </div>
          </header>
          <MobileNavLinks open={mobileNavOpen} />
        </>
  
    
  )
}

export default Navbar