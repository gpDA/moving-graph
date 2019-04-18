import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Chart from './Chart/Chart';


class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Chart} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;