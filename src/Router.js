import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./mainComponent/Home.js"
import Demo from "./mainComponent/Demo.js"
import Navbar from "./SmallComponent/Navbar.js"
import Chathome from "./mainComponent/Chat"
import Chatmodel from "./mainComponent/Chatmodeldriven"
export default function MyRoute() {
  return (
    <Router>
   
        <Navbar/> 
        <Switch>
        <Route path="/userdriven">
            <Chathome />
          </Route>
          <Route path="/modeldriven">
            <Chatmodel />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}