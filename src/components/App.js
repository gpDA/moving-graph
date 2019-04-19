import React, { Component } from 'react';
import Chart from './Chart/Chart';
import PageTemplate from './PageTemplate/PageTemplate';
import Counters from "./ButtonElement/counters";


class App extends Component{
    // initial state
    // id:1 -> line1 / id:2 -> line2 / id:3 -> line3
    state = {
        counters: [
            { id: 1, value: 1},
            { id: 2, value: 2},
            { id: 3, value: 3}
        ]
    }

    // decrement function
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    }

    // increment function
    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({ counters });
    }

    render(){
        return(
            <PageTemplate>
                <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
                <Chart counters={this.state.counters} />
            </PageTemplate>
        )
    }
}

export default App;