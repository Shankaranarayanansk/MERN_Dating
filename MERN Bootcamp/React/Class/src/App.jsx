
import React, { useState } from 'react';
import './App.css'; 
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={toggleTheme}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☽</span>
        </div>
      </nav>
      <main>
        <h1>{darkMode ? "Dark" : "Light"} Mode</h1>
        <p>Toggle the switch to change the theme.</p>
      </main>
    </div>
  );
};
export default App;


// import React from 'react'
// import { AiOutlineLike } from "react-icons/ai";
// import { useState } from 'react';
// import { AiOutlineDislike } from "react-icons/ai";

// const App = () => {
//   const [like, setLike] = useState(0);
//   return (
//     <div>

// <AiOutlineLike onClick={() => setLike(like + 1)} />
// <p>{like}</p>

// <AiOutlineDislike onClick={() => setLike(like - 1)} />
// {/* <p>{like}</p> */}


//     </div>
//   )
// }

// export default App


/*
import { Component } from "react"

class Demo extends Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0}
    }
    increment=()=>{
        this.setState(prevstate=>({count:prevstate.count+1}))
    }
    render()
    {
        return(
            <div>
                This is from class component
                <button onClick={this.increment}>Increment</button>
                {this.state.count}
            </div>
        )
    }
}
export default Demo
*/
