import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
// import Image from "./components/buttonImage";
// import Pictogrid from "./components/pictogrid";
import Jumbotron from "./components/jumbotron";
import FourEvenColumns from "./components/fourEvenColumns";
import Image from "./components/buttonImage";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar>
      </Navbar>
        <Image></Image>
      <Jumbotron>
        
      </Jumbotron>
        
      </div>
    );
  }
}

export default App;
