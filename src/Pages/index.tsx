import Clear from "Clear";
import Last from "Last";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OpeningPopUp from "Top/OpeningPopUp";
import Question from "Top/Question";

function Pages(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={OpeningPopUp} exact={true} path="/" />
        <Route component={Question} exact={true} path="/question" />
        <Route component={Last} exact={true} path="/last" />
        <Route component={Clear} exact={true} path="/clear" />
      </Switch>
    </BrowserRouter>
  );
}

export default Pages;
