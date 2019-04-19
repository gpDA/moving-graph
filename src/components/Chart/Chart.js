import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Moment from 'moment';
import { extendMoment } from 'moment-range';


class Chart extends Component{
    constructor() {
        super();
        // initialize array with default value (1,2,3) respectively
        let inital_line_1 = new Array(31).fill(1);
        let inital_line_2 = new Array(31).fill(2);
        let inital_line_3 = new Array(31).fill(3);
        this.state = {
            inital_line_1: inital_line_1,
            inital_line_2: inital_line_2,
            inital_line_3: inital_line_3,
            counter: 0,
        }
        //update the function for 30 seconds
        setInterval(this.updateArray.bind(this), 30 * 1000);
    }

    // updateArray with updated values
    updateArray(){
        this.setState({
            inital_line_1: [
                ...this.state.inital_line_1,
                this.props.counters[0].value
                ],
            inital_line_2: [
                ...this.state.inital_line_2,
                this.props.counters[1].value
                ],   
            inital_line_3: [
                ...this.state.inital_line_3,
                this.props.counters[2].value
                ],                                  
            counter: this.state.counter + 1
        })
    }

    render(){
        // moment.js + moment-range
        const moment = extendMoment(Moment);
        let now = moment(new Date());
        // var formatted_now = now.format('HH:mm:ss');
        let five_min_ago = moment(now).subtract(5, 'minutes');
        // let formatted_then = five_min_ago.format('HH:mm:ss');
    
        // get the range from now to five minutes ago with steps of 10 seconds
        // and initialize array for x_axis in the LINE chart
        const range1 = moment.range(five_min_ago, now);
        let acc = Array.from(range1.by('second', { step: 10 }));
        var x_axis = Array.from(acc.map(m => m.format('HH:mm:ss')));
    
    
        // for moving window... i slice with the counter (state) to the end.

        // line1
        let inital_line_1 = this.state.inital_line_1;
        let line_line1 = inital_line_1.slice(this.state.counter, inital_line_1.length)
        // line2
        let inital_line_2 = this.state.inital_line_2;
        let line_line2 = inital_line_2.slice(this.state.counter, inital_line_2.length)
        // line3
        let inital_line_3 = this.state.inital_line_3;
        let line_line3 = inital_line_3.slice(this.state.counter, inital_line_3.length)
        
        
        // data for LINE
        const chart_data = {
            // x_axis (time range)
            labels: x_axis,
            // dataset LINE1
            datasets: [{
                label: "line1",
                lineTension: 0.1,
                fill: false,
                pointHoverBackgroundColor: "yellow", 
                borderColor: "purple",
                pointRadius: 4,
                pointHitRadius: 10,                       
                data: line_line1,
                
                },
                // dataset LINE2
                {
                label: "line2",
                lineTension: 0.1,
                fill: false,
                pointHoverBackgroundColor: "brown",  
                borderColor: "green",
                pointRadius: 4,
                pointHitRadius: 10,              
                data: line_line2
                },
                // dataset LINE3
                {
                label: "line3",
                lineTension: 0.1,
                fill: false,
                pointHoverBackgroundColor: "brown",  
                borderColor: "red",
                pointRadius: 4,
                pointHitRadius: 10,              
                data: line_line3
                }
            ]
            }
    
        // LINE options
        const options = {
            scales: {
                yAxes: [{
                  display: true,
                  ticks: {
                    beginAtZero:true,
                    min: -2,
                    max: 5 
                  }
                }]
              }        
        }  
        return(
                <Line 
                data={chart_data} 
                options={options}   
                />  
        )                        

    }

}


export default Chart;