import React, { Component } from 'react'
import ButtonHandler from './buttonHandler';

class Counters extends Component{
    render(){
        return (
            <div>
                {/* map will run 3 times and
                make 3 ButtonHandlers */}
                {this.props.counters.map(counter => (
                    <ButtonHandler
                    key={counter.id}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    counter={counter}
                    />
                ))}
            </div>
        )
    }
}

export default Counters;