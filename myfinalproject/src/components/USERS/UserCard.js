import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bloger">
      <div className="info">
        <img src={user.avatarUrl} alt={`${user.name} ${user.surname}`} />
        <div className="about">
            <h4 className="fullname">{`${user.name} ${user.surname}`}</h4>
            <p>{user.about}</p>
      </div>
  </div>
  <button className="delete-bloger">
        <img src="/img/delete.png" alt="Delete Blogger" />
      </button>
    </div>
  );
};

export default UserCard;
