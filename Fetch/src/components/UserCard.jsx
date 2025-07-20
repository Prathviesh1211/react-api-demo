import React from 'react';
import './UserCard.css';

const UserCard = ({ data,onRefresh }) => {
  return (
    <div className='cont'>
        <div className="user-card">
      <img
        src={data.picture.medium}
        alt="User"
        className="user-image"
      />
      <div className="user-info">
        <h2>{data.name.first} {data.name.last}</h2>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Location:</strong> {data.location.city}, {data.location.state}</p>
      </div>
      <button onClick={()=>onRefresh()}>Refresh</button>
    </div>


    </div>
  );
};

export default UserCard;
