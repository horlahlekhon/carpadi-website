import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Waitlist from '../components/Waitlist';
import SuccessAlert from '../components/SuccessAlert';
export default function Faq() {

  const [openAlert, setOpenAlert] = useState(false)
  const [email, setEmail] = useState(null)

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

  const AccordionIteration = [
    {
      'id': 1,
      'header': 'What is Carpadi?',
      'title': 'What is Carpadi?',
      'paraone': 'Carpadi is a Locally-used car trading platform, that gives users access to profit from car sales via collaborative investments.',
      // 'paratwo': 'Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.'
    },
    {
      'id': 2,
      'header': 'How does the investment work?',
      'title': 'How does the investment work?',
      'paraone': 'Our platform operates on a crowdfunding model where multiple investors pool their money together to purchase a vehicle.',
      'paratwo': 'The car is then put in perfect shape and displayed for sale on our car selling platform and the profits are distributed among the investors based on their percentage of ownership.'
    },
    {
      'id': 3,
      'header': 'How do I join the platform?',
      'title': 'How do I join the platform?',
      'paraone': 'You can sign up on our mobile by providing your personal details and agreeing to our terms and conditions',
      'paratwo': 'Once registered, you can browse available investment opportunities and choose the car(s) you want to invest in.'
    },
    {
      'id': 4,
      'header': 'Is there a minimum investment amount?',
      'title': 'Is there a minimum investment amount?',
      'paraone': 'Yes, the minimum investment amount is 500,000 Naira. This is to ensure that each investor has a meaningful ownership stake in the car.'
    },
    {
      'id': 5,
      'header': 'How do I know my investment is safe?',
      'title': 'How do I know my investment is safe?',
      'paraone': 'We take the security of our investors money very seriously. All funds are held in a secure escrow account until the full amount required to purchase the car is reached.',
      'paratwo': 'Additionally, we only invest in high-quality vehicles that are in good condition and have a proven track record of being profitable in the Nigerian-used car industry'
    },
    {
      'id': 6,
      'header': 'What happens if the car is damaged or involved in an accident?',
      'title': 'What happens if the car is damaged or involved in an accident?',
      'paraone': 'We have comprehensive insurance coverage for all vehicles in our portfolio. If a car is damaged or involved in an accident, our insurance will cover the costs of repair or replacement.'
    },
    {
      'id': 7,
      'header': 'How long does deposit takes to reflect?',
      'title': 'How long does deposit takes to reflect?',
      'paraone': 'Deposits typically reflects instantly, however it make take up to an hour.'
    },
    {
      'id': 8,
      'header': 'How do i deposit money?',
      'title': 'How do i deposit money?',
      'paraone': 'You can deposit money using any Nigerian Naira debit card.'
    },
    {
      'id': 9,
      'header': 'How do Carpadi make money ?',
      'title': 'How do Carpadi make money ?',
      'paraone': 'Carpadi make money via commissions on the profits made by the investors after the car has been sold.'},
    {
      'id': 10,
      'header': 'How does withdrawal work?',
      'title': 'How does withdrawal work?',
      'paraone': 'Money invested in cars cannot be withdrawn until the car is sold, after sale it takes two business days for transactions to be settled and the funds from sale including the capital to become available for withdrawal to any local bank.'
    },
    {
      'id': 10,
      'header': 'How are profits distributed?',
      'title': 'How are profits distributed?',
      'paraone': "Profits are distributed once the car is sold based on each investor's percentage of ownership in the car. You can choose to have your profits reinvested or paid out to your bank account.",
      'paratwo': 'If you have any other questions, please do not hesitate to contact our customer support team. We are here to help!'
    },
  ]

  
  const [currentActiveKey, setCurrentActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.1rem', }} />}
      {...props}
    />
  ))(({ theme }) => ({
   
    
    
    '& .MuiAccordionSummary-root[aria-expanded="true"]': {
      backgroundColor:
         '#FAFBFF'
    },
    flexDirection: 'reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(270deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const accordionHeader = {
    display: 'flex',
    padding: '10px 120px 10px 0', 
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
  }

  const accordionBody = {
    backgroundColor: '#FAFBFF',
    padding: '20px', 
  }

  const H1 = {
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '28px',
    padding: '0 100px 0 0'
  }

  const P = {
    padding: '10px 70px 0 0',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '24px',
  }

  const SearchForm = {
    width: '100%',
    height: '64px',
    background: '#F3F3F3',
    border: '1px solid #DEDEDE',
    borderRadius: '12px',
    padding: '10px',
    display: 'flex',
    margin: '40px auto 50px',
    alignItems: 'center',
  }

  const DesktopSearchForm = {
    width: '50%',
    height: '64px',
    background: '#F3F3F3',
    border: '1px solid #DEDEDE',
    borderRadius: '12px',
    padding: '10px',
    display: 'flex',
    margin: '40px auto 50px',
    alignItems: 'center',
  }

  const MobileSearchInput = {
    width: '100%',
    background: 'transparent',
    padding: '10px',
    outline: 'none',
    border: 'none',
    fontWeight: '300',
    fontSize: '14px',
  }

  const Search = {
   display: 'block',
  }

  return (
    <Layout>
<div style={{margin: '100px 40px 50px'}} className="d-block d-lg-none">
  <h1 style={{fontWeight: '600',
  fontSize: '32px',
  lineHeight: '37px',
  textAlign: 'center'
  }}>
Frequently
<br />
Asked Questions
  </h1>

<form style={SearchForm}>
<input type="text" name="search" style={MobileSearchInput} placeholder="Search for a question"/>
<div style={Search}>
<img src="https://res.cloudinary.com/grootretro/image/upload/v1646752882/carpadi-website/search_icon_pgeaby.png" alt="search icon"/>
</div>
</form>
<div>
  {
    AccordionIteration.map((item, index) => (
      <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon style={{width: '18px'}}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
        eventKey={item.id}
        style={currentActiveKey === item.id ? { backgroundColor: "#FAFBFF" } : null}
        onClick={() => {
          toggleActiveKey(item.id);
        }}

      >
        <Typography style={accordionHeader}>
          <div>
          <img style={{marginRight: '10px'}}src={currentActiveKey === item.id ? "https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/accordion-open-circle_o5oinf.png" : "https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/accordion-close-circle_ge9cwl.png"} alt="blue circle"/>
          </div>
         {item.header}
          </Typography>
      </AccordionSummary>
      <AccordionDetails style={{padding: '0'}}>
        <Typography style={accordionBody}>
         <h1 style={H1}>{item.title}</h1>
         <p style={P}>{item.paraone}</p>
     <p style={P}>{item.paratwo}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
    ))
  }
</div>


      <Waitlist handleClick={handleClick} />

<div style={{display: `${openAlert === false ? 'none' : 'block' }`}}>

<SuccessAlert closeAlert={closeAlert}/>
</div>
   
    </div>



    {/* for Desktop */}
<div style={{margin: '200px 40px 50px'}} className="d-none d-lg-block">
  <h1 style={{fontWeight: '6900',
  fontSize: '56px',
  lineHeight: '66px',
  textAlign: 'center'
  }}>
Frequently
Asked Questions
  </h1>

<form style={DesktopSearchForm}>
<input type="text" name="search" style={MobileSearchInput} placeholder="Search for a question"/>
<div  style={Search}>
<img src="https://res.cloudinary.com/grootretro/image/upload/v1646752882/carpadi-website/search_icon_pgeaby.png" alt="search icon"/>
</div>
</form>
<div>
  {
    AccordionIteration.map((item, index) => (
      <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon style={{width: '18px'}}/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
        eventKey={item.id}
        style={currentActiveKey === item.id ? { backgroundColor: "#FAFBFF" } : null}
        onClick={() => {
          toggleActiveKey(item.id);
        }}

      >
        <Typography style={accordionHeader}>
          <div>
          <img style={{marginRight: '10px'}}src={currentActiveKey === item.id ? "https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/accordion-open-circle_o5oinf.png" : "https://res.cloudinary.com/grootretro/image/upload/v1646244420/carpadi-website/accordion-close-circle_ge9cwl.png"} alt="blue circle"/>
          </div>
         {item.header}
          </Typography>
      </AccordionSummary>
      <AccordionDetails style={{padding: '0'}}>
        <Typography style={accordionBody}>
         <h1 style={H1}>{item.title}</h1>
         <p style={P}>{item.paraone}</p>
     <p style={P}>{item.paratwo}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
    ))
  }
</div>
      <Waitlist handleClick={handleClick} />

<div style={{display: `${openAlert === false ? 'none' : 'block' }`}}>

<SuccessAlert closeAlert={closeAlert}/>
</div>
    </div>

    </Layout>
  )
}
