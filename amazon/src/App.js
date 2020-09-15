import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/Header';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';
import ProductList from './components/ProductList';
export class App extends Component{
    constructor(){
        super();
        this.state={
            companyName:"",
            cartCount:0
        }
    }
    render(){
        return <div>
            <Header title={this.state.companyName} cartCount={this.state.cartCount}/>
            <ProductList/>
        </div>
    }
};

export default App;

// this goes in line 13,14
//<LoginComponent/>
//<RegisterComponent/>