import React from "react";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import ButtonPage from "./ButtonPage";
import ColorPage from "./ColorPage";
import InputPage from "./InputPage";
import GridPage from "./GridPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={ButtonPage} />
        <Route path="/colors" component={ColorPage} />
        <Route path="/buttons" component={ButtonPage} />
        <Route path="/inputs" component={InputPage} />
        <Route path="/grid" component={GridPage} />
      </Switch>
    </>
  );
}

export default App;
