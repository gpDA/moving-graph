import React, { Component } from 'react';
import './ButtonStyle.css';

export default class ButtonHandler extends Component {

    // props of counter
    count() {
        const { value } = this.props.counter;
        return value;
    }

  render() {
    return (
      <div>
        {/* show counter for each state change */}
        <span>{this.count()}</span>
        {/* increment button with value of counters `id` */}
        <button className="buttonStyle" onClick={() => this.props.onIncrement(this.props.counter)}>line{this.props.counter.id}+</button>
        {/* decrement button with value of counters `id` */}
        <button className="buttonStyle" onClick={() =>this.props.onDecrement(this.props.counter)}>line{this.props.counter.id}-</button>
      </div>
    )
  }
}
