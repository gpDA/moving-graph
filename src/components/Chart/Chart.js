import React from 'react';
import './Chart.css';
import { Line } from 'react-chartjs-2';

// {data}
const Chart = () => {

    const chart_data = {
        labels: [undefined,null,null,10],
        datasets: [{
            label: "bytes_ts",
            lineTension: 0.1,
            fill: false,
            pointHoverBackgroundColor: "yellow", 
            borderColor: "purple",
            pointRadius: 4,
            pointHitRadius: 10,                       
            data: [1,2,3,4,5,6,7,8,9,10],
            
        },{
        label: "bytes_fs",
        lineTension: 0.1,
        fill: false,
        pointHoverBackgroundColor: "brown",  
        borderColor: "green",
        pointRadius: 4,
        pointHitRadius: 10,              
        data: [1,2,3,4,5,6,7,8,9,10]
    }

    ]
    }

    const options = {
        title: {
            display: true,
            text: 'chart.js line Chart'
        }
    }    

    return(
        <Line data={chart_data} options={options} />        
    )
}

export default Chart;