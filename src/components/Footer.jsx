import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'


const FooterDiv =  styled.div`
    background: #243773;
    padding: 50px 30px 20px;
    width: 100%;

h1{
font-weight: 600;
font-size: 32px;
line-height: 37px;
color: #FFFFFF;

}

.stores{
    display: flex;
    margin: 50px 0;
    width: 100%;
  }

  .appstore_icons{
    margin: 0 30px 0 0;
    width: 160px;
    background: #FFFFFF;
    border: 1px solid #767676;
    border-radius: 12px;
    padding: 7px 10px;
  }

  .appstore_icons a img{
    display: block;
    margin: auto;
    width: 100%;
  }

  .footerlogo{
      display: block;
      margin: 20px 0px;
  }

  .contact{
      display: block;
      margin: 30px 0;
  }

.contact h6{
    text-transform: uppercase;
    margin: 0 0 10px;
    font-weight: 600;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
}

.contact p{
    font-weight: 300;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;

}

.contact p a{
    font-weight: 300;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
text-decoration: none;
}

  .address{
    white-space: pre-line;
      display: block;
      margin: 30px 0;
  }

.address h6{
    text-transform: uppercase;
    margin: 0 0 10px;
    font-weight: 600;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
}

.address p{
    font-weight: 300;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;

}

.social{
  display: block;
  margin: 30px 0;
}

.social h6{
    text-transform: uppercase;
    margin: 0 0 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
}

.social .social-icons{
    display: flex;
}

.social .social-icons img{
    margin-right: 20px;
}

.policy{
      display: block;
      margin: 50px 0 0;
      border-top: 2px solid rgba(255, 255, 255, 0.26);
      padding-top: 30px;
  }

.policy h6{
    text-transform: uppercase;
    margin: 0 0 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
}


.policy .policy-text{
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    padding: 0 100px 0 0;

}

.policy .copyright{
    margin: 10px 0 0;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;

}

@media (min-width: 1090px){
  padding: 100px 30px 20px;

  

  .lg-footer-title{
     display: flex;
     justify-content: space-between; 
  }


  .lg-footer-title h1{
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    margin-left: 50px;
  }

  .lg-footer-title  .stores{
    width: auto;
  }

  .lg-footer-title .stores .appstore_icons{
   width: 203.08px;
   height: 64px;
   display: flex;
   justify-content: center;
   padding:  10px 20px;
  }

  .lg-footer-title .stores .appstore_icons a img{
   width: 100%;
  }

  .flex-contacts{
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }

  .contacts{
    display: flex;
  }

  .contacts div{
    margin: 0 30px;
  }

  .social h6{
    margin: 0 0 10px 25px;
}

.policy .copyright{
    margin: 40px 0 20px;

}

}
`

export default function Footer() {

  const data = useStaticQuery(graphql`
  
  query FooterData {
    footer:site {
      siteMetadata {
        address
        email
        phone
        policy
      }
    }
  }
  
  
  `)

  const {email, phone, address, policy} = data.footer.siteMetadata
  return (
    <FooterDiv>
      <div className='d-block d-lg-none'>
        <h1>Download the app <br />and start trading</h1>

        <div className="stores">
  <div className="appstore_icons">
   <a href="#google"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244426/carpadi-website/footer_g_play_oydrjs.png" alt="appstore icon"/></a> 
  </div>
  <div className="appstore_icons">
  <a href="#apple"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/appstore_pnip5c.png" alt="appstore icon"/></a>
  </div>
  </div>

  <img className='footerlogo' src="https://res.cloudinary.com/grootretro/image/upload/v1646244426/carpadi-website/footer_logo_fbwr98.png" alt="carpadi logo"/>
  <div className="contact">
      <h6>Contact</h6>
      <p><a href='mailto: yourpadi@carpadi.com'>{email}</a></p>
      <p>Phone: {phone}</p>
  </div>
  <div className="address">
      <h6>Address</h6>
      <p>{address}</p>
  </div>
  <div className="social">
      <h6>Social</h6>
      <div className='social-icons'>
    <a href="#link"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244425/carpadi-website/fb_icon_wnyupl.png" alt="facebook" /></a>
    <a href="#link"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244428/carpadi-website/twitter_icon_ng36kw.png" alt="twitter" /></a>
    <a href="#link"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244426/carpadi-website/insta_icon_tgl28n.png" alt="insta" /></a>
    <a href="#link"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244426/carpadi-website/linkedin_icon_bfoosj.png" alt="linkedin" /></a>
      </div>
  </div>
  <div className='policy'>
    <h6>Privacy Policy</h6>
    <p className='policy-text'>{policy}</p>
  <p className='copyright'> &copy; Copyright 2022-CARPADI. All rights reserved.</p>
  </div>

  </div>




  <div className="d-none d-lg-block" style={{padding: '0 30px'}}>

<div className='lg-footer-title'>
<h1>Download the app <br />and start trading</h1>

<div className="stores">
<div className="appstore_icons">
   <a href="#google"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244426/carpadi-website/footer_g_play_oydrjs.png" alt="appstore icon"/></a> 
  </div>
  <div className="appstore_icons">
  <a href="#apple"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/appstore_pnip5c.png" alt="appstore icon"/></a>
  </div>
</div>
</div>

<div className='flex-contacts'>
  <div>
  <img className='footerlogo' src="https://res.cloudinary.com/grootretro/image/upload/v1646244426/carpadi-website/footer_logo_fbwr98.png" alt="carpadi logo"/>
  </div>

<div className='contacts'>
  <div className="contact">
      <h6>Contact</h6>
      <p><a href='mailto: yourpadi@carpadi.com'>{email}</a></p>
      <p>Phone: {phone}</p>
  </div>
  <div className="address">
      <h6>Address</h6>
      <p>{address}</p>
  </div>
  <div className="social">
    <h6>Social</h6>
    <div className='social-icons'>
    <a href="#link"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244425/carpadi-website/fb_icon_wnyupl.png" alt="facebook" /></a>
    <a href="#link"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244428/carpadi-website/twitter_icon_ng36kw.png" alt="twitter" /></a>
    <a href="#link"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244426/carpadi-website/insta_icon_tgl28n.png" alt="insta" /></a>
    <a href="#link"><img src="https://res.cloudinary.com/grootretro/image/upload/v1646244426/carpadi-website/linkedin_icon_bfoosj.png" alt="linkedin" /></a>
    </div>
  </div>

  
  </div>

  </div>

  <div className='policy'>
    <h6>Privacy Policy</h6>
    <p className='policy-text'>{policy}</p>
  <p className='copyright'> &copy; Copyright 2022-CARPADI. All rights reserved.</p>
  </div>
  </div>
    </FooterDiv>
  )
}

