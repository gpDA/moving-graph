import React, { Component } from 'react';
import Chart from './Chart/Chart';
import PageTemplate from './PageTemplate/PageTemplate';
import Counters from "./ButtonElement/counters";


class App extends Component{
    // initial state
    // id:1 -> line1 / id:2 -> line2 / id:3 -> line3
    state = {
        // counters array comprised of Object key / value pair
        counters: [
            { id: 1, value: 1},
            { id: 2, value: 2},
            { id: 3, value: 3}
        ]
    }

    // decrement function
    handleIncrement = counter => {
        // copy the `counters`
        const counters = [...this.state.counters];
        // indexOf corresponding eventActions
        const index = counters.indexOf(counter);
        // update the `counters` Object using new `counter`
        counters[index] = {...counter};
        counters[index].value++;
        // setState at last
        this.setState({ counters });
    }

    // increment function
    handleDecrement = counter => {
        // copy the `counters`
        const counters = [...this.state.counters];
        // indexOf corresponding eventActions
        const index = counters.indexOf(counter);
        // update the `counters` Object using new `counter`
        counters[index] = {...counter};
        counters[index].value--;
        // setState at last
        this.setState({ counters });
    }

    render(){
        return(
            <PageTemplate>
                {/* pass in 1. data `counters` 2. increment function `handleIncrement` 3. decrement function `handleDecrement` */}
                <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
                {/* pass in data `counters` */}
                <Chart counters={this.state.counters} />
            </PageTemplate>
        )
    }
}

export default App;