import React, { useState, useEffect } from 'react';
import { users } from '../../data/static.json';

export default function UsersList() {
  const usersName = users;
  const [selectedUser, setSelectedUser] = useState(0);
  const user = users[selectedUser];

  useEffect(() => {
    console.table(usersName);
  }, [])

  return (
    <>
      <ul className='users items-list-nav'>
        {
          usersName.map((user, index) => (
            <li key={user.id} className={index === selectedUser ? 'selected' : null}>
              <button className='btn' onClick={() => setSelectedUser(index)}>
                {user?.name}
              </button>
            </li>
          ))
        }
      </ul>
      {
        user && (
          <div className="item user">
            <div className="item-header">
              <h2>{user.name}</h2>
            </div>
            <div className="item-details">
              <h3>{user.title}</h3>
              <div className="bookable-availability">
                <h5>{user.notes}</h5>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
