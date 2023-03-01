import React from 'react';
import './GigCard.scss'
import {Link} from "react-router-dom";
import star from 'img/star.png'
import heart from 'img/heart.png'
const GigCard = ({item}) => {
  return (
    <Link to='/gig/123' className='link'>
      <div className='gigCard '>
        <img src={item.img} alt=""/>
        <div className="info">
          <div className="user">
            <img src={item.pp} alt=""/>
            <span>{item.username}</span>
            <p>{item.desc}</p>
            <div className="star">
              <img src={star} alt=""/>
              <span>{item.star}</span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="details">
          <img src={heart} alt=""/>
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default GigCard;
