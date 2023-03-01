import React from 'react';
import './Orders.css'
import {Link} from "react-router-dom";
import message from "../../img/message.png";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: 'John',
    isSeller: true
  }

  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          <Link to='/add'>
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td className='image'>
              <img className='img'
                   src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                   alt=""/>
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src={message} alt=""/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
