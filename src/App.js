import React, { createContext } from "react";
import  "./App.css";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Ashok"}>
        <LastName.Provider value={"Singh"}>
        <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
export { FirstName, LastName };
