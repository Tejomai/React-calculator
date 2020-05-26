import React, {Component} from 'react';
import './App.css';
import Keys from './components/Keys.js';
import Result from "./components/Result.js";

class App extends Component{
  constructor(){
    super();
    this.state = {
      result: ""
    };
  }
  onClick = button =>{
    if(button === "="){
      this.Calculate();
    }
    else if(button === "C"){
      this.reset();
    }
    else if(button === "CE"){
      this.backspace();
    }
    else{
      this.setState({result: this.state.result + button});
    }
  }
  Calculate = () => {
    try{
      this.setState({ 
        // eslint-disable-next-line 
        result: eval(this.state.result || "") + ""});
    }
    catch(e){
      this.setState({result: "error"});
    }
  }
  reset = () =>{
    this.setState({result: ""});
  }
  backspace = () =>{
    this.setState({result: this.state.result.slice(0, -1)});
  }
  render(){
    return(
      <div className="calculate-body">
        <h1 class="text-center p-3"> A Simple Calculator</h1>
        <Result result={this.state.result}/>
        <Keys onClick={this.onClick}/>
      </div>
    )
  }
}

export default App;
