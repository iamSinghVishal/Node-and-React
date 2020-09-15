import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Decrement from './decrement';
import ButtonDec from './ButtonDec';
import Button from './Button';
import TextBox from './TextBox';

/*class App extends Component{
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  handleClick = ()=>{
    console.log("clicked");
    this.setState({count:this.state.count+1})
  }
  handleDec =()=>{
    console.log("Dec")
    this.setState({count:this.state.count-1})
  }
  render(){
    return(
      <div className="App">
        <Decrement count={this.state.count}></Decrement>
        <Button clickButton = {this.handleClick}></Button>
        <ButtonDec clickButton = {this.handleDec}></ButtonDec>
        <TextBox/>
      </div>
    )
  }
}*/


const ThemeContext = React.createContext('light');
class App extends Component{
  render(){
    return(
      <ThemeContext.Provider value="Yellow">

      <Toolbar />

      </ThemeContext.Provider>
    );
  }
}

function Toolbar(){
  return(
    <div>
      <ThemeButton />
    </div>
  );
  
}


class ThemeButton extends Component {
  static contextType = ThemeContext;
  render() {
  return <button>{this.context}</button>;
  }
}

export default App;
