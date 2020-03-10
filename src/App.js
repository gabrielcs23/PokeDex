import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Sobre from './Components/Sobre/Sobre';
import NotFound from './Components/NotFound/NotFound';

function App() {
    return (
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
