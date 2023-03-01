import React from 'react';
import './Home.scss'
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import {cards, projects} from "../../data";
import CatCard from "../../components/catCard/CatCard";
import video from '../../img/VID_20211117_174822.mp4'
import check from '../../img/check.png'
import ProjectCard from "../../components/projectCard/ProjectCard";


const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => <CatCard item={card} key={card.id}/>)}
      </Slide>
      <div className="features ">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={check} alt=""/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt=""/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt=""/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt=""/>
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src={video} controls>

            </video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benefits,dedicated to businesses</p>
            <div className="title">
              <img src={check} alt=""/>
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={check} alt=""/>
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={check} alt=""/>
              Connect to freelancers with proven business experience
            </div>
          <button>
            Explore Fiveer Business
          </button>
          </div>
          <div className="item">
            <img className='darkImg'
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png'
              alt=''/>
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(project => <ProjectCard item={project} key={project.id}/>)}
      </Slide>
    </div>
  );
};

export default Home;
