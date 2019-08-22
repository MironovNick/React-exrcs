import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import './loader.jsx';

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

  const Button = ({ text, kind, rad, icon, loader, ...buttonProps}) => (
      <button className = {"btn " + kind} 
      style={{ borderRadius: + rad}}
      {...buttonProps}>
      <i className = {"fa fa-" + loader + " fa-spin"} >
      </i>
      <i className = {"fa fa-" + icon} >
      </i>
        {text}
      </button>
  );

  const buttons = (

    <div>
      <Button kind = "success" text = "success" rad = {2} icon = "home" loader = "spinner"/>
      <Button kind = "info" text = "info" rad = {4} icon = "bars" loader = "circle-o-notch"/>
      <Button kind = "warning" text = "warning" rad = {8} icon = "trash" loader = "refresh fa-spin"/>
      <Button kind = "danger" text = "danger" rad = {12} icon = "close" loader = "spinner"/>
      <Button kind = "default" text = "default" rad = {50} icon = "folder" loader = "refresh fa-spin"/>
    </div>

  );

render(buttons, document.getElementById('root'));

