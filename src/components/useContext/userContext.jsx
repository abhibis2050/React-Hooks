import { useContext,createContext } from "react";

const AppContext = createContext();


const AppProvider = ({ children }) => {
  const userData ={
    name:"Abhisek",
    age:27
  }
  return (
  <AppContext.Provider value={userData}>{children}</AppContext.Provider>
  )
};

// const AppState = ()=>{
//     return useContext(AppContext)
// } 



export {AppProvider,AppContext }; 