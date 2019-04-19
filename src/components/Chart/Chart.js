import React from 'react';
import './Chart.css';
import { Line } from 'react-chartjs-2';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

// {data}
const Chart = ({counters}) => {

    const moment = extendMoment(Moment);
    let now = moment(new Date());
    // var formatted_now = now.format('HH:mm:ss');
    let five_min_ago = moment(now).subtract(5, 'minutes');
    // let formatted_then = five_min_ago.format('HH:mm:ss');

    const range1 = moment.range(five_min_ago, now);
    
    let acc = Array.from(range1.by('second', { step: 10 }));

    // console.log(acc);

    var x_axis = Array.from(acc.map(m => m.format('HH:mm:ss')));

    let arr1 = []
    for (let val of Object.values(counters)){
        arr1.push(val);
    };

    const [val_1,val_2,val_3] = [arr1[0].value, arr1[1].value, arr1[2].value]

    
    let inital_line_1 = new Array(31).fill(1);
    let inital_line_2 = new Array(31).fill(2);
    let inital_line_3 = new Array(31).fill(3);
    
    function updateArray(){

        chart_data.labels.shift();
        let now = moment(new Date());
        let formatted_now = now.format('HH:mm:ss');
        chart_data.labels.push(formatted_now);
        console.log('hi', chart_data.labels);
        // Line.update();
    }


    setInterval(function(){
        updateArray();
    },1000);

    const chart_data = {
        labels: x_axis,
        datasets: [{
            label: "line1",
            lineTension: 0.1,
            fill: false,
            pointHoverBackgroundColor: "yellow", 
            borderColor: "purple",
            pointRadius: 4,
            pointHitRadius: 10,                       
            data: inital_line_1,
            
        },{
        label: "line2",
        lineTension: 0.1,
        fill: false,
        pointHoverBackgroundColor: "brown",  
        borderColor: "green",
        pointRadius: 4,
        pointHitRadius: 10,              
        data: inital_line_2
    },{
        label: "line3",
        lineTension: 0.1,
        fill: false,
        pointHoverBackgroundColor: "brown",  
        borderColor: "red",
        pointRadius: 4,
        pointHitRadius: 10,              
        data: inital_line_3
    }

    ]
    }

    const options = {
        scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero:true,
                min: -5,
                max: 5 
              }
            }]
          }        
    }    

    return(
        // onChange={this.changeHandler.bind(this)}
        <Line data={chart_data} options={options}  />        
    )
}

export default Chart;