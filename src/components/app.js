import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/portfolio-container'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Cory Herdrich REACT Portfolio</h1>
        <h1>Started May 11th 2023</h1>   
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div> <PortfolioContainer />
      </div>
    );
  }
}
