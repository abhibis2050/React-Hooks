import React, { useState, useEffect, useMemo } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
//   console.log("state Changing");
const [name,setName] = useState("")


  const noRender = useMemo(() => {
    return (  
      <div>
        <h1 style={{ color: "red" }}>No Render Again {count} --{name}</h1>
        <h1 style={{ color: "red" }}>useEffect vs useMemo</h1>
      </div>
    );
  },[name]);


//   const noRender = useEffect(() => {
//     console.log("state Changing");
//     // return (  
//     //   <div>
//     //     <h1 style={{ color: "red" }}>No Render Again {count} --{name}</h1>
//     //     <h1 style={{ color: "red" }}>useEffect vs useMemo</h1>
//     //   </div>
//     // );
//   },[name]);

  

  return (
    <div>
      {/*  */}
      {noRender}
      {/*  */}

      {/*  */}
      <h1> Render It Again and Again {count}</h1>
      <h1>useEffect vs useMemo</h1>
      {/*  */}

      <button onClick={() => setCount(count + 1)}>
        Click to increase count
      </button>
      <button onClick={() => setName("Abhisek")}>
        Click to Change Name
      </button>
    </div>
  );
};

export default UseMemoHook;
