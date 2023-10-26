import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coidId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
