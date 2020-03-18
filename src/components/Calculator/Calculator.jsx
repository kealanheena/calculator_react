import React, { Component } from 'react';
import Display from '../Display/Display';
import './Calculator.css';

class Calculator extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: '0',
    // values to be displayed in number <Keys />
    numbers: [],
    // values to be displayed in operator <Keys />
    opperators: [],
    // operator selected for math operation
    selectedOperator: '',
    // stored value to use for math operation
    storedValue: ''
  }

  callOperator = () => {
    console.log('Call Operator!');
  }

  setOperator = () => {
    console.log('Set Operator!');
  }

  updateDisplay = () => {
    console.log('Update Display!');
  }

  render = () => {
    // unpack the component state by using Object Destructuring
    const { displayValue } = this.state;
    
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue}/>
      </div>
    );
  }
}

export default Calculator;
