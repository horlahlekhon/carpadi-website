import React, {useEffect, useState} from "react"
import {graphql} from 'gatsby';
import styled from "styled-components"
import Layout from "../components/Layout"
import Instruction from "../components/Instruction"
import Review from "../components/Review"
import Waitlist from "../components/Waitlist"
import {Col, Row } from "react-bootstrap"
import SuccessAlert from "../components/SuccessAlert";



export default function Home({data}) {

  const [openAlert, setOpenAlert] = useState(false)

  const handleClick = () => {
    setOpenAlert(true);
  };

  const closeAlert = () => {
    setOpenAlert(false)
  }

  useEffect(() => {
    if(openAlert === true){
      document.body.style.overflow = 'hidden';
    }

    else if (openAlert === false){
      document.body.style.overflow = 'unset';
    }
  }, [openAlert])




  console.log(data)


  const {
    extraIncomeHeader, 
    extraIncomeBody, 
    tradeCarsHeader, 
    tradeCarsTitle, 
    passiveIncome,
    reviewHeader,
    secureHeader,
    secureBody,
    desktopSecureHeader,
    firstReviewUserName,
    secondReviewUserName,
    thirdReviewUserName,
    fourthReviewUserName,
    firstReviewComment,
    secondReviewComment,
    thirdReviewComment,
    fourthReviewComment,
    carListingTitle,
    carListingContent,
    shareTitle,
    shareContent,
    earnTitle,
    earnContent,
    unlimitedText,
    capitalText,
    sweatText,


  } = data.home.siteMetadata


  // const offersIcons = [
  //   {
  //     "id": 1,
  //     "image":"../images/car_icon.png",
  //     "text": 'Unlimited access to used cars'
  //   },
  //   {
  //     "id": 2,
  //     "image":"../images/smile_emoji.png",
  //     "text": 'Little capital required'
  //   },
  //   {
  //     "id": 3,
  //     "image":"../images/wallet_icon.png",
  //     "text": 'Get paid without breaking a sweat'
  //   },
  // ]

  const ExtraIncome = styled.section`
  margin: 120px 0 0;
  padding: 0 60px 0 30px;
  white-space: pre-line;

  h1{
  font-weight: 800;
  font-size: 32px;
  line-height: 37px;
  padding: 0 0 15px;
    }

  .stores{
      display: flex;
      margin: 20px 0;
    }

  /* .appstore_icons{
    margin: 0 20px 0 0;
    width: 122px;
    background: #FFFFFF;
    border: 1px solid #767676;
    border-radius: 10px;
    padding: 5px 10px;
  } */
  
  .appstore_icons img{
    display: block;
    margin: auto;
    width: 144px;

    background: #FFFFFF;
    padding: 5px 10px;
  }

  @media (min-width: 992px) { 
    margin: 240px 0 0;
    padding: 0 30px;

    h1{
      font-weight: 900;
      font-size: 56px;
      line-height: 66px;

    }
    
    p{
      font-size: 20px;
      line-height: 28px;
      font-weight: 300;
      margin: 10px 0 30px;
    }

    .appstore_icons img{
      margin: 20px 0 30px ;
      width:auto;
    }



   }

  `

  const FirstPhoneAd = styled.section`
  display: block;
  position: relative;
  margin: 40px 0;
  background: rgba(239, 242, 249, 0.33);
  background-image:url('https://res.cloudinary.com/grootretro/image/upload/v1646753368/carpadi-website/cool_pattern_hero_vzd001.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 560px;

  .phone-over{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  


  @media (min-width: 992px) { 
    height: 900px;

   }

  `

  const TradeCars = styled.section`
  margin: 40px 10px 60px;
  padding: 0 20px;

  p{
margin: 10px 0;
font-weight: 500;
font-size: 12px;
line-height: 14px;

  }

  @media (min-width: 992px) { 
    margin: 70px 0;
    padding: 0 30px;
   }

   p{
    margin: 10px 0 30px;
    font-size: 18px;
    line-height: 21px;

   }


  `
  const Stocks = styled.section`
  margin: 30px 0;
  padding: 0 30px;

  p{
    text-align: center;
    margin: 10px 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
  }

  p span{
    font-weight: 300;
    font-size: 14px;
  }

  .offers{
    display: block;
    margin: 20px auto;
    width: 100%;
  }

  .offers .offers-item {
    display: flex;
    margin: 20px auto;
    flex-direction: column;
    align-items: center;
    padding: 26px 0;
    
  }

  .offers .offers-item img{
    display: block;
    margin: 0 auto 10px;
  }

  .offers .offers-item h6{
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    padding: 0 165px;
    text-align: center;
  }

  @media (min-width: 992px) { 
    margin: 70px 0;
    padding: 0 10px;

    
   p{
  font-weight: 700;
  font-size: 48px;
  line-height: 50px;
  text-align: center;

   }

   p span{
    font-weight: 300;
    font-size: 28px;
    line-height: 25px;
    
  }

  .offers{
    display: flex;
    margin: 20px auto;
    align-items: center;
    padding: 26px 0;
    flex-direction: row;
  }
  

  .offers .offers-item h6{
    font-size: 20px;
    line-height: 28px;
    padding: 20px 140px;
  }

   }

  `

  const PassiveIncome = styled.section`
  display: block;
  margin: 5px auto;
  padding: 20px 20px 0;
  width: 100%;
  background-color: #BCFFDB;
  border-radius: 12px;
  white-space: pre-line;

  h3{
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #243773;
  }
  
  .img-right{
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 992px) { 
    padding: 30px 0 0;

  h3{
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;
    margin: 0 20px 0
    }

  .desktop-passive-income{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  }
  `

  const EarlyAdopters = styled.section`
  margin: 20px;

  h2{
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #212120;

  }

  .scroll-reviews{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

  }

  @media (min-width: 992px){
    margin: 50px;

    h2{
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
      margin: 0 0 50px;
    }

  }
  
  `

  const CarCompanies = styled.div`
  display: block;
  margin: 40px auto;

  img{
  display: block;
  margin: 0 auto;
  }

  @media (min-width: 992px){
      margin: 80px auto;
    

      img{
        width: 90%;
      }

  }
  `

const Secure = styled.div`
display: block;
padding: 20px;
white-space: pre-line;

img{
  display: block;
  margin: 20px auto;
}

  h2{
  margin: 10px 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  }

  p{
  font-weight: 300;
font-size: 16px;
line-height: 24px;
text-align: center;
  }

  @media (min-width: 992px){

     h2{
      margin: 20px 0;
      font-weight: 900;
      font-size: 32px;
      line-height: 37px;
     }

     p{
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;
     }

  }
  
  `
  
return (
<Layout>
  <div className="d-block d-lg-none">
  <ExtraIncome>
    <h1>{extraIncomeHeader}</h1>
    <p>{extraIncomeBody}</p>
  <div className="stores">
  <div className="appstore_icons">
    <a href="#playstore">
    <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753366/carpadi-website/google_play_cylzg0.svg" alt="google icon"/>
    </a>
  </div>
  <div className="appstore_icons">
    <a href="#appstore">
    <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753364/carpadi-website/appstore_o2hrwn.svg" alt="appstore icon"/>
    </a>
  </div>
  </div>
  </ExtraIncome>

  <FirstPhoneAd>
 <img className="phone-over" src="https://res.cloudinary.com/grootretro/image/upload/v1646764903/carpadi-website/phone_hero_mcb1yb.svg" alt="iphone"/>
  </FirstPhoneAd>

  <TradeCars>
  <p>Trade Nigerian-used cars, such as</p>
  <img style={{width: '315px', height:'91px'}} src="https://res.cloudinary.com/grootretro/image/upload/v1646753365/carpadi-website/car_group_hero_vlorb1.svg" alt="car brands"/>

  </TradeCars>
  <Stocks>
  <p>{tradeCarsHeader}
    <br />
<span>({tradeCarsTitle})</span>
</p>

<div className="offers">
 <div className="offers-item">
 <img style={{width:'28px'}} src="https://res.cloudinary.com/grootretro/image/upload/v1646753364/carpadi-website/car_icon_a0iaf8.svg" alt="offers_icon"/>
 <h6>{unlimitedText}</h6>
</div>

 <div className="offers-item">
 <img style={{width:'28px'}} src="https://res.cloudinary.com/grootretro/image/upload/v1646753370/carpadi-website/smiley_emoji_ohg0av.svg" alt="offers_icon"/>
 <h6>{capitalText}</h6>
</div>

 <div className="offers-item">
 <img style={{width:'28px'}} src="https://res.cloudinary.com/grootretro/image/upload/v1646753371/carpadi-website/wallet_icon_fg1vos.svg" alt="offers_icon"/>
 <h6>{sweatText}</h6>
</div>

</div>
  </Stocks>
  <div style={{width: '100%', margin: '0 auto'}}>
  <h2 style={{fontWeight: '900',
    margin: '40px 20px 20px',
    fontSize: '32px',
    lineHeight: '38px',
    textAlign: 'left',
    color: '#56A0D7',
    background: '#E7F4FB',
    borderRadius: "12px",
    padding: '40px 20px',
}}>Reimagining <br />
                  car trading</h2>
  <Instruction imageSource="https://res.cloudinary.com/grootretro/image/upload/v1646830149/carpadi-website/car_listing_oagupv.png"  headerText={carListingTitle} pText={carListingContent}/>
  <div style={{backgroundColor: '#BCFFDB'}}>
  <Instruction imageSource="https://res.cloudinary.com/grootretro/image/upload/v1646830151/carpadi-website/share_p6fjff.png" headerText={shareTitle} pText={shareContent}/>
  </div>
  <Instruction imageSource="https://res.cloudinary.com/grootretro/image/upload/v1646830150/carpadi-website/earn_iucvky.png"  headerText={earnTitle} pText={earnContent}/>
  </div>

<div style={{padding: '20px 40px'}}>
  <PassiveIncome>
    <h3>{passiveIncome}</h3>
    <div className="img-right">
    <img style={{width: '249px', height: '174px'}} src="https://res.cloudinary.com/grootretro/image/upload/v1646753369/carpadi-website/people_talking_sflpkw.svg" alt="people talking"/>
    </div>
    
  </PassiveIncome>
  </div>

<EarlyAdopters>
   <h2>{reviewHeader}</h2>
   <div className="scroll-reviews">
   <Review userImg="https://res.cloudinary.com/grootretro/image/upload/v1646752864/carpadi-website/jane_review_w35az8.png" userName={firstReviewUserName} userComment={firstReviewComment}/>
   <Review userImg="https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/antony_review_vlsq9u.png" userName={secondReviewUserName} userComment={secondReviewComment}/>
   <Review userImg="https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/alex_review_h4axgw.png" userName={thirdReviewUserName} userComment={thirdReviewComment}/>
   <Review userImg="https://res.cloudinary.com/grootretro/image/upload/v1646752854/carpadi-website/doon_review_lyszrn.png" userName={fourthReviewUserName} userComment={fourthReviewComment}/>
   </div>
</EarlyAdopters>

<CarCompanies>
<img style={{width: '315px', height:'91px'}} src="https://res.cloudinary.com/grootretro/image/upload/v1646753365/carpadi-website/car_group_hero_vlorb1.svg" alt="car brands"/>
</CarCompanies>

<Secure>
  <img style={{width: '40px'}} src="https://res.cloudinary.com/grootretro/image/upload/v1646753369/carpadi-website/shield_icon_mkiw7q.svg" alt="shield"/>
  <h2>{secureHeader}</h2>
  <p>{secureBody}</p>
</Secure>


<Waitlist handleClick={handleClick} />

<div style={{display: `${openAlert === false ? 'none' : 'block' }`}}>

<SuccessAlert closeAlert={closeAlert}/>
</div>
</div>








{/* for Desktop */}

<div className="d-none d-lg-block">
  <Row style={{margin: '0'}}>
    <Col style={{padding: '40px'}}>
    <ExtraIncome>
    <h1>{extraIncomeHeader}</h1>
    <p>{extraIncomeBody}</p>
    <div className="stores">
  <div className="appstore_icons">
    <a href="#playstore">
    <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753366/carpadi-website/google_play_cylzg0.svg" alt="google icon"/>
    </a>
  </div>
  <div className="appstore_icons">
    <a href="#appstore">
    <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753364/carpadi-website/appstore_o2hrwn.svg" alt="appstore icon"/>
    </a>
  </div>
  </div>
  </ExtraIncome>
  <TradeCars>
  <p>Trade Nigerian-used cars, such as</p>
  <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753365/carpadi-website/car_group_hero_vlorb1.svg" alt="car brands"/>

  </TradeCars>
    </Col>


  <Col style={{padding: '0'}}>
    <FirstPhoneAd>

 <img className="phone-over" src="https://res.cloudinary.com/grootretro/image/upload/v1646764903/carpadi-website/desktop_phone_hero_xtzn7j.svg" alt="iphone"/>
  </FirstPhoneAd>
    </Col>
  </Row>

  <Stocks>
  <p>{tradeCarsHeader}
    <br />
<span>({tradeCarsTitle})</span>
</p>

<div className="offers">
 <div className="offers-item">
 <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753364/carpadi-website/car_icon_a0iaf8.svg" alt="offers_icon"/>
 <h6>{unlimitedText}</h6>
</div>

 <div className="offers-item">
 <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753370/carpadi-website/smiley_emoji_ohg0av.svg" alt="offers_icon"/>
 <h6>{capitalText}</h6>
</div>

 <div className="offers-item">
 <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753371/carpadi-website/wallet_icon_fg1vos.svg" alt="offers_icon"/>
 <h6>{sweatText}</h6>
</div>

</div>
  </Stocks>

  <div style={{width: '100%', margin: '0 auto'}}>
  <h2 style={{fontWeight: '900',
    margin: '40px 40px 20px',
    fontSize: '56px',
    lineHeight: '66px',
    textAlign: 'left',
    color: '#56A0D7',
    background: '#E7F4FB',
    borderRadius: "12px",
    padding: '40px 30px',
}}>Reimagining <br />
                  car trading</h2>

<Instruction 
DesktopImageSource="https://res.cloudinary.com/grootretro/image/upload/v1646830147/carpadi-website/desktop_car_listing_kse3oo.png" 
align="left"  
headerText={carListingTitle} 
pText={carListingContent} 
Parapadding="20px 185px 0 0" 
HeaderPadding="0 100px 0 0"
/>

<div style={{backgroundColor: '#BCFFDB'}}>
<Instruction 
DesktopImageSource="https://res.cloudinary.com/grootretro/image/upload/v1646830148/carpadi-website/desktop_share_allgbm.png"
order="last" 
HeaderPadding="0" 
align="right"  
Parapadding="20px 0 0 185px"  
headerText={shareTitle} 
pText={shareContent}
/>
</div>

  <div style={{
          height: '766px',
          background: '#FCFCFC',
          borderRadius: '12px',
          margin: '40px',
}}>
  <Instruction  
  DesktopImageSource="https://res.cloudinary.com/grootretro/image/upload/v1646830149/carpadi-website/desktop_earn_h1363u.png"
  align="left" 
  HeaderPadding="0 100px 0 0" 
  Parapadding="20px 120px 0 0" 
  headerText={earnTitle} 
  pText={earnContent}
  />
  </div>


  </div>

  <div style={{padding: '20px 40px'}}>
  <PassiveIncome>
    <div className="desktop-passive-income">
    <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753369/carpadi-website/people_talking_sflpkw.svg" alt="people talking"/>
    <h3>{passiveIncome}</h3>
    </div>
    
  </PassiveIncome>
  </div>

  <EarlyAdopters>
  <h2>{reviewHeader}</h2>
  <div className="scroll-reviews">
   <Review userImg="https://res.cloudinary.com/grootretro/image/upload/v1646752864/carpadi-website/jane_review_w35az8.png" userName={firstReviewUserName} userComment={firstReviewComment}/>
   <Review userImg="https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/antony_review_vlsq9u.png" userName={secondReviewUserName} userComment={secondReviewComment}/>
   <Review userImg="https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/alex_review_h4axgw.png" userName={thirdReviewUserName} userComment={thirdReviewComment}/>
   <Review userImg="https://res.cloudinary.com/grootretro/image/upload/v1646752854/carpadi-website/doon_review_lyszrn.png" userName={fourthReviewUserName} userComment={fourthReviewComment}/>
   </div>
</EarlyAdopters>

<CarCompanies>
<img src="https://res.cloudinary.com/grootretro/image/upload/v1646753365/carpadi-website/car_group_below_kfjgq7.svg" alt="car brands"/>
</CarCompanies>

<Secure>
  <img src="https://res.cloudinary.com/grootretro/image/upload/v1646753369/carpadi-website/shield_icon_mkiw7q.svg" alt="shield"/>
  <h2>{desktopSecureHeader}</h2>
  <p>{secureBody}</p>
</Secure>

<Waitlist handleClick={handleClick}/>
<div style={{display: `${openAlert === false ? 'none' : 'block' }`}}>

<SuccessAlert closeAlert={closeAlert}/>
</div>
</div>



</Layout>    
)
}


export const query =  graphql`
query HomeData {
  home:site {
    siteMetadata {
      extraIncomeBody
      extraIncomeHeader
      passiveIncome
      reviewHeader
      secureBody
      secureHeader
      tradeCarsHeader
      tradeCarsTitle
      desktopSecureHeader
      firstReviewUserName
      secondReviewUserName
      thirdReviewUserName
      fourthReviewUserName
      firstReviewComment
      secondReviewComment
      thirdReviewComment
      fourthReviewComment
      carListingTitle
      carListingContent
      shareTitle
      shareContent
      earnTitle
      earnContent
      unlimitedText
      capitalText
      sweatText

    }
  }
 
}

`