import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Loader } from './loader.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  //render() {
   // return(
     // <div>
      // <Hello name={this.state.name} />
      // <p>
       //  Start editing to see some magic happen :)
       //</p>
    // </div>
    //);
  //}
}

  const Icon = ({icon}) => (
    <i className = {"fa fa-" + icon} >
    </i>
  );


  const Button = ({ text, kind, rad, ...buttonProps}) => (
      <button className = {"btn " + kind} 
      style={{ borderRadius: + rad}}
      {...buttonProps}>
      <Loader loader_icon = "spinner" />
      <Icon icon = "home" />
        {text}
      </button>
  );

  const buttons = (

    <div>
      <Button kind = "success" text = "success" rad = {2} />
      <Button kind = "info" text = "info" rad = {4} />
      <Button kind = "warning" text = "warning" rad = {8} />
      <Button kind = "danger" text = "danger" rad = {12} />
      <Button kind = "default" text = "default" rad = {50} />
    </div>

  );

  render(buttons, document.getElementById('root'));

