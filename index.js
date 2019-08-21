import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

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

  const Button = ({ text, kind, rad, ...buttonProps}) => (
      <button className = {"btn " + kind} 
      style={{ borderRadius: "" + rad}}
      {...buttonProps}>
        {text}
      </button>
  );

  const buttons = (

    <div>
      <Button kind = "success" text = "success" rad = {2}/>
      <Button kind = "info" text = "info" rad = {4}/>
      <Button kind = "warning" text = "warning" rad = {8}/>
      <Button kind = "danger" text = "danger" rad = {12}/>
      <Button kind = "default" text = "default" rad = {"50%"}/>
    </div>

  );

ReactDOM.buttons(<App />, document.getElementById('root'));























