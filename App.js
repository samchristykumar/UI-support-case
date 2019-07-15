import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SupportCase from './components/SupportCase';
import Casereference from './components/Submit';
import Submit from './components/FinalSubmit';

//import axios from'/.components/axios';
import { file } from '@babel/types';
///import register from './components/serviceWorker';
//import Accordion from './component/Accordion';
//import Header from './components/Header';
//import ComponentOne from './components/ComponentOne';
//import '/.components/Casereference.css';


class App extends Component {



  render() {

    return (

      <div className="App">


        <BrowserRouter>
          <Navigation />

          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Login/:username" component={SupportCase} />
            <Route path="/Submit" component={Submit} />
    {/*<Route path="/FinalSubmit" component={FinalSubmit} />*/}

          </Switch>
        </BrowserRouter>

      </div>


    );
  }
}

export default App;
