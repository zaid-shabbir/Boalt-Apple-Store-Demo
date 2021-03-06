import React from "react";
//  Where we import the router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//  Where we import SASS
import "./App.scss";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
//  Where we import counter animation
import PreHome from "./components/PreHome";
import Home from "./components/Home";
import Iphone from "./components/Iphone";
import Macbook from "./components/Macbook";
import Watch from "./components/Watch";
import Navbar from "./components/Navbar";

//  funtion to Protect non authenticated routes and redirect to login page if unauthorized and to maintain session
function isAuth() {
  if (!localStorage.getItem("apple-token")) return false;
  else return true;
}

//  funtion to encapsulate the entire APP.
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/prehome"
            render={() =>
              isAuth() ? (
                <div>
                  <PreHome />
                </div>
              ) : (
                <Redirect to="/?error403" />
              )
            }
          />
          <Route
            exact
            path="/home"
            render={() => (isAuth() ? <Home /> : <Redirect to="/?error403" />)}
          />
          <Route
            exact
            path="/iphone"
            render={() =>
              isAuth() ? <Iphone /> : <Redirect to="/?error403" />
            }
          />
          <Route
            exact
            path="/macbook"
            render={() =>
              isAuth() ? <Macbook /> : <Redirect to="/?error403" />
            }
          />
          <Route
            exact
            path="/watch"
            render={() => (isAuth() ? <Watch /> : <Redirect to="/?error403" />)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
