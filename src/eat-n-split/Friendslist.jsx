/* eslint-disable react/prop-types */
// import React from 'react';
import Friend from './Friend.jsx';

// eslint-disable-next-line react/prop-types
function Friendslist({ friends,onSelection }) {
  return (
    <div>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} onSelection
        ={onSelection} />
      ))}
    </div>
  );
}

export default Friendslist;