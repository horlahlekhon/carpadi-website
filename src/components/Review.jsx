import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const ReviewDiv = styled.div`
flex: 0 0 auto;
width: 356px;
height: 380px;
margin: 20px 0px 20px 30px;
padding: 30px 20px;
background: #FFFFFF;
box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.04);
border-radius: 12px;

.profile-pic{
  display: block;
  margin: 0px auto 10px;
}

.stars-rating{
  display: block;
  margin: 20px auto;
}


h1{
font-weight: 600;
font-size: 20px;
line-height: 23px;
text-align: center;

}

p{
margin:10px 0;
font-weight: 300;
font-size: 16px;
line-height: 24px;
text-align: center;

}
`

export default function Review({userName, userComment, userImg}) {
  return (
    <ReviewDiv>
        <img className='profile-pic' src={userImg} alt="review"/>
        <img className='stars-rating' src="https://res.cloudinary.com/grootretro/image/upload/v1646753370/carpadi-website/star_rating_y3ynyi.svg" alt="stars icon" />
        <h1>{userName}</h1>
        <p>{userComment}</p>

    </ReviewDiv>
  )
}


Review.propTypes = {
  userName: PropTypes.string.isRequired,
  userComment: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,

}