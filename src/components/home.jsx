import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Navbar from "./header/Navbar";
import NavbarFooter from "./footer/NavbarFooter";






class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>Welcome to Farming Assistant System !</h1>
          <br></br>
          <img src={require('./images/farmer1.jpg')} />

         
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <NavbarFooter/>
       
      </div>
    );
  }
}



export default Home;