import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import UserProfile from "./pages/profile/UserProfile";
import SignUpPage from "./pages/signUpPage/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/users/profile" exact component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
