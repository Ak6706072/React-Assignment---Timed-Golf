import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.id = 0;
    this.btn = false;
    this.state = { time: 0, x: 0, y: 0};
    this.ballPosition = {
          left:this.state.x+"px",
          top:this.state.y+"px",
    }
  }

  handleClick = (event)=>{
    
    switch(event.keyCode){
      case 37:
        //left arrow key
        // console.log(event.keyCode)
        this.setState(prevState => {
          return {...prevState,x:this.state.x-5};
        })
        // console.log(this.ballPosition,this.state.x)
        break;
      case 38:
        //top arrow key
        this.setState(prevState => {
          return {...prevState,y:this.state.y-5};
        })
        break;
      case 39:
        //right arrow key;
        this.setState(prevState => {
          return {...prevState,x:this.state.x+5};
        })
        break;
      case 40:
        //down arrow key
        this.setState(prevState => {
          return {...prevState,y:this.state.y+5};
        })
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    
    
  }
  componentDidUpdate(prevProp,prevState,ss) {
    // console.log("componentdid update",this.state);
    if(this.state.x===250&&this.state.y===250){
      clearInterval(this.id);
      document.removeEventListener("keydown",this.handleClick);
    }
  }

  componentWillUnmount() {
    
  }

  runTimer = ()=>{

    if(!this.btn){
      this.btn = true;
      document.addEventListener("keydown",this.handleClick);
      this.id = setInterval(()=>{
        this.setState(prevState => {
          return {...prevState,time:this.state.time+1};
        })
      },1000)
      // console.log("hello",this.id)
    }
  }


  render() {
    return (
          <>
            <div style={{
                    left:this.state.x+"px",
                    top:this.state.y+"px",
                 }} className="ball"></div>
            <button onClick={this.runTimer} style={{position:"absolute",top:400,left:300}} className="start">Start</button>
            <div className="heading-timer">Timer: {this.state.time}</div>
            <div className="hole"></div>
          </>
    );
  }
}

export default Timer;
