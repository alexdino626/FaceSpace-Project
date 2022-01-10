import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            Homepage
          </Route>
          <Route path="/page-1">Page 1</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
