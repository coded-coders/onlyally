import React, { Component } from "react";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import ReadersPortfolio from "./ReadersPortfolio/ReadersPortfolio";
import WritersPortfolio from "./WritersPortfolio/WritersPortfolio";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <HomePage />
        <ReadersPortfolio />
        <WritersPortfolio />
      </div>
    );
  }
}

export default App;
