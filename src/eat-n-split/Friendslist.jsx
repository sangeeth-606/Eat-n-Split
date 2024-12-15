// import React from 'react';
import Friend from './Friend.jsx';

function Friendslist({ friends }) {
  return (
    <div>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}

export default Friendslist;