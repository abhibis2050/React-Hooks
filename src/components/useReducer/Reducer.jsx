import React from "react";



const Reducer = (state, action) => {
  console.log(state);
  if (action.type === "INC") {
    return (state += 1);
  }
  if (action.type === "DEC") {
    return(state-=1)
   // 
  }
};

export default Reducer;
