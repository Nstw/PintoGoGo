import React, { Component } from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";

import DemoMenu from "./component/demomenu";
import Addmenu from "./component/demoaddmenu";
// import Navbar from "./component/navbar/navbar";
import Navbar from "./component/navbar/navbar2";
import Carousel from "./component/carousel/carousel";
import Choice from "./component/choice/choice";
import Recommend from "./component/recommend/recommend";

const Home = () => {
  return [<Navbar />, <Carousel />, <Recommend />, <Choice />];
};

{
  /*-------------Add path of page---------------*/
}
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/demomenu" component={DemoMenu} />
          <Route path="/demoaddmenu" component={Addmenu} />
        </Switch>
      </div>
    );
  }
}
