import React, { Component } from 'react'

export default class StateEx extends Component {
  constructor(props) {
    super(props)
    
      this.state ={
        count:0,
        name:"aakash"
      }
    }
    render() {
      return(
  
        <button ><h1>Click{this.state.count}</h1></button>
  
    )
      }
}
