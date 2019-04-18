import React, { Component } from 'react';
import Chart from './Chart/Chart';
import ButtonElement from './Button/Button';
import PageTemplate from './PageTemplate/PageTemplate';


class App extends Component{
    render(){
        return(
            <PageTemplate>
                <ButtonElement />
                <Chart />
            </PageTemplate>
        )
    }
}

export default App;