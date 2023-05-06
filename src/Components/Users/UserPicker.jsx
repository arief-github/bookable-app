import React, { useState } from 'react';
import { users } from '../../data/static.json';

export default function UserPicker() {

  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  
  return (
      <select value={value} onChange={handleChange}>
        {
          users.map((value, index) => (
            <option key={index} value={value.name}>{value.name}</option>
          ))
        }
      </select>
  );
  }
  