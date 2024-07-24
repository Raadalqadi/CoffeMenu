import { Header } from "./shared/Header";
import CoffeMenu from "./pages/CoffeMenu";
import MyContext from "./context/MyContext";
import "./App.css";
import {  useEffect, useState } from "react";


function App() {
  const [state, setState] = useState(false);
  const [Refrch, setRefrch] = useState(false);
  const [Coffee, setCoffee] = useState<any>(JSON.parse(localStorage.getItem("DataCoffee") || "[]"));

  useEffect(()=>{
    setCoffee(JSON.parse(localStorage.getItem("DataCoffee") || "[]"))
  },[Refrch])
  return (
    <>
      <MyContext.Provider value={{ state, setState , Coffee , setCoffee , Refrch, setRefrch}}>
        <Header />
        <CoffeMenu />
      </MyContext.Provider>
    </>
  );
}

export default App;
