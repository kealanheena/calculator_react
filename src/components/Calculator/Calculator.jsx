import React, { Component } from 'react';
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
    return (
      <div className="calculator-container"/>
    );
  }
}

export default Calculator;
