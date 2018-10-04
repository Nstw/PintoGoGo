import React, { Component } from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";

import DemoMenu from "./component/demomenu";
import Addmenu from "./component/demoaddmenu";
import Navbar from "./component/navbar/navbar";
import Carousel from "./component/carousel/carousel";
import Choice from "./component/choice/choice";
import Recommend from "./component/recommend/recommend";

const Home = () => <h1>Home</h1>;

{
  /*-------------Add path of page---------------*/
}
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <Recommend />
        {/* <Choice /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/demomenu" component={DemoMenu} />
          <Route path="/demoaddmenu" component={Addmenu} />
        </Switch>
      </div>
    );
  }
}
