import React, { useState, createContext } from 'react';
import Container from './Container';

export const Mode = createContext();

const App = () => {
  const [show, setShow] = useState('light');

  const toggleTheme = () => {
    setShow(prevShow => (prevShow === 'light' ? 'dark' : 'light'));
  };

  return (
    <Mode.Provider value={{ show }}>
      <Container />
      <button onClick={toggleTheme}>Toggle Mode</button>
    </Mode.Provider>
  );
};

export default App;
