import React, { useContext } from 'react';
import { Mode } from './App'; // Make sure to import Mode from the correct path

const User = () => {
  const { show } = useContext(Mode);

  const style = {
    backgroundColor: show === 'light' ? 'red' : 'black',
    color: show === 'light' ? 'yellow' : 'red',
  };

  return (
    <div>
      <h1 style={style}>Users</h1>
    </div>
  );
};

export default User;
