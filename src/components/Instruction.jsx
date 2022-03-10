import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"
import {Col, Row } from "react-bootstrap"

export default function Instruction({headerText, pText, order, Parapadding, HeaderPadding, align, imageSource, DesktopImageSource}) {


    const Section = styled.section`
       display: block;
        margin: 20px auto;
        padding: 50px;
        white-space: pre-line;
        width: 99%;

        img{
          display: block;
          margin: 0 auto;
          filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.04));
        }

        h2{
          font-weight: bold;
          font-size: 32px;
          line-height: 38px;
          padding: 0 100px 0 0;
        }

        p{
          font-weight: 300;
          font-size: 16px;
          line-height: 28px;
          padding: 0px 10px 0 0;
        
        }
    

        @media (min-width: 500px) { 
          width: 100%;
            
        h2{
          font-weight: bold;
          font-size: 32px;
          line-height: 38px;
          padding: 0 200px 0 0;
        }

        p{
          font-weight: 300;
          font-size: 16px;
          line-height: 28px;
          padding: 0px 60px 0 0;
          width: 420px;
        }

        }


    @media (min-width: 992px) { 
      width: 90%;

      img{
          padding: 0 !important;
        }

     h2{
      padding: ${HeaderPadding};
      font-weight: 900;
      font-size: 56px;
      line-height: 66px;
      text-align: ${align}
     }

     p{
      font-weight: 300;
      font-size: 28px;
      line-height: 38px;
      padding: ${Parapadding};
      width: 100%;
      text-align:  ${align};
     }
        }

      @media (min-width: 1140px) { 
      width: 100%;

        }
    `
    
  return (
    <Section order={order} padding={Parapadding} HeaderPadding={HeaderPadding} align={align}>
      <div className='d-block d-lg-none'>
      <img src={imageSource} alt="phone"/>
      <h2>{headerText}</h2>
      <p>{pText}</p>
      </div>
      <div className='d-none d-lg-block'>
      <Row>
        <Col lg={{ order: `${order}` }}>
          <img src={DesktopImageSource} alt="phone"/>
          </Col>

        <Col style={{display: 'block', margin: 'auto'}}>    
          <h2>{headerText}</h2>
          <p>{pText}</p>
        </Col>
      </Row>
      </div>
    </Section>
  )
}

Instruction.propTypes = {
  headerText: PropTypes.string.isRequired,
  pText: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  DesktopImageSource: PropTypes.string.isRequired,
  
}

