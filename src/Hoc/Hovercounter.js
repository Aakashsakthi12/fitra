import React, { Component } from 'react'

export default class Hovercounter extends Component {constructor(props) {
    super(props)
  
    this.state = {count:0}
  } 
 render() {
   return (
     <h1 onMouseEnter={this.inc}>Click{this.state.count}</h1>
   )
 }
 inc=()=>{this.setState({count:this.state.count+1})}
} 
