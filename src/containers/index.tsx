import Clear from "./pages/clear";
import Last from "./pages/last";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Question from "./pages/question";
import Pages from "./pages";

function Containers(): JSX.Element {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Pages />
      </Route>
      <Route exact={true} path="/question">
        <Question />
      </Route>
      <Route exact={true} path="/last">
        <Last />
      </Route>
      <Route exact={true} path="/clear">
        <Clear />
      </Route>
    </Switch>
  );
}

export default Containers;
