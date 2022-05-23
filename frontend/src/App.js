import "./App.css";
import React, { useState, useLayoutEffect } from "react";
import { LoginStateContext } from "./Components/Context";
import { RouteStack, LoginRouteStack } from "./Components/Auth/RouteStack";
import MainHeader from "./Components/UI/Header/MainHeader";
import { useNavigate } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    var time = JSON.parse(localStorage.getItem("starttime"));
    var user = JSON.parse(localStorage.getItem("user"));
    if(user){
      setIsLoggedIn(true)
    }
    if ((new Date() - new Date(time)) / 1000 > 3600) {
      localStorage.clear();
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div>
      <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <MainHeader />
        {console.log(isLoggedIn)}
        {!isLoggedIn ? RouteStack() : LoginRouteStack()}
      </LoginStateContext.Provider>
    </div>
  );
}

export default App;
