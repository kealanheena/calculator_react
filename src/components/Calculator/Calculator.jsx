import React, { Component } from 'react';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import './Calculator.css';

class Calculator extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: '0',
    // values to be displayed in number <Keys />
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'ce'],
    // values to be displayed in operator <Keys />
    operators: ['/', 'x', '-', '+'],
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
    const { displayValue, numbers, operators } = this.state;
    
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue}/>
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;
