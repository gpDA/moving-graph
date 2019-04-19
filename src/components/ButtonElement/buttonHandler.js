import React, { Component } from 'react';
import './ButtonStyle.css';

export default class ButtonHandler extends Component {

    count() {
        const { value } = this.props.counter;
        return value;
    }

  render() {
    return (
      <div>
        {/* show counter for each state change */}
        <span>{this.count()}</span>
        <button className="buttonStyle" onClick={() => this.props.onIncrement(this.props.counter)}>line{this.props.counter.id}+</button>
        <button className="buttonStyle" onClick={() =>this.props.onDecrement(this.props.counter)}>line{this.props.counter.id}-</button>
      </div>
    )
  }
}
