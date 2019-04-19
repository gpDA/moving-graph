import React, { Component } from 'react';
import Chart from './Chart/Chart';
// import ButtonIncrement from './ButtonElement/ButtonIncrement';
// import ButtonDecrement from './ButtonElement/ButtonDecrement';
import PageTemplate from './PageTemplate/PageTemplate';
import Counters from "./ButtonElement/counters";


class App extends Component{
    // constructor(props){
    //     super(props);
    // }
    state = {
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 0},
            { id: 3, value: 0}
        ]
    }

    handleIncrement = counter => {
        // console.log(this.state.line1)
        // const key = e.target.id;
        // console.log(key, e.target.id);
        // this.setState({
        //     [key]: this.state.line1 + 1
        // })
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({ counters });
    }

    // handlePlusClick = (e) => {
    //     this.setState(prevState => ({
    //         // [e.target.id] : prevState.e.target.id + 1
    //     }))
    // }

    render(){
        // state 1 2 3
        // const { handleMinusClick, handlePlusClick} = this;
        return(
            <PageTemplate>
                {/* <ButtonDecrement onDecrement={this.handleMinusClick} /> */}
                <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
                {/* <ButtonIncrement onClick={(e) => handleMinusClick(e)} /> */}
                <Chart />
            </PageTemplate>
        )
    }
}

export default App;