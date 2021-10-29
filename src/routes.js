import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import appConversaoMoeda from "./pages/appConversaoMoeda";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={appConversaoMoeda} path="/appConversaoMoeda" />
    </BrowserRouter>
  );
};

export default Routes;
