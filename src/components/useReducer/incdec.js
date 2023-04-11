import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import Reducer from "./Reducer";

const  initialValue = 0;
const UseReducers = () => {
  const [count, dispatch] = useReducer(Reducer, initialValue);
  console.log(count,"<--count");
  return (
    <Wrapper>
      <div className="container">
        <button onClick={() => dispatch({ type: "DEC"})}>
          <FaMinus className="icon" />
        </button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INC" })}>
          <BiPlusMedical className="icon" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;
export default UseReducers;
