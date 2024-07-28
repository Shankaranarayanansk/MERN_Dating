import React, { useRef, useState } from "react";

const App = () => {
  const inputRef = useRef();
  const [data, setData] = useState();
  // console.log("render");
  const handleClick=()=>{
    console.log(inputRef.current.value);
    setData(inputRef.current.value);
  }
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        // value={date}
        // onChange={(event) => setData(event.target.value)}
      /> 
      {/* <p>Hi {data}</p> */}
      <p>Hi {inputRef.current.value}</p> 
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
