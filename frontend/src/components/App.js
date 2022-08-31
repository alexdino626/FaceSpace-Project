import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import  Homepage  from "./Home/Homepage";
import  NavBar  from "./Navbar";
import  SignIn  from "./Form/SignIn";
import  ProfilePage  from "./Profile/ProfilePage"

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
              <Homepage />
          </Route>
          <Route exact path="/users/:id">
            <ProfilePage />
          </Route>
          <Route exact path ="/signin">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
