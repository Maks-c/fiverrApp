import React, {useState} from 'react';
import './Gigs.scss'
import down from 'img/down.png'
import GigCard from "../../components/gigCard/GigCard";
import {gigs} from "../../data";

const Gigs = () => {


  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState('sales')


  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>FIVERR > GRAPHICS > DESIGN</span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fivver's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button> Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy:</span>
            <div className="sortType">{sort === 'sales' ? 'Best Selling ' : 'Newest'}</div>
            <img src={down} alt="" onClick={() => setOpen( !open)}/>
            {open && <div className="rightMenu">
              {sort === 'sales' ? (<span onClick={() => reSort('createdAt')}>Newest</span>) :
                (<span onClick={() => reSort('sales ')}>Best Selling</span>)}
            </div>}
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig => (
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;