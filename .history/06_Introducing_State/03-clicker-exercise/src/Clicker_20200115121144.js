import React, { Component } from 'react'

export default class Clicker extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         num: 1
      }
    }
    

    render() {
        return (
            <div>
                <h1>Number is: {this.state.num} </h1>
            </div>
        )
    }
}
