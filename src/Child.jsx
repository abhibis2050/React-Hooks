import React from 'react'
import { useContext } from 'react'
import { AppContext } from './components/useContext/userContext'

const Child = () => {
    const userData = useContext( AppContext);
    console.log(userData,"<-----userData");
  return (
    <div>
      NAME:{userData.name}  
      AGE:{userData.age}
    </div>
  )
}

export default Child
