import React, { Component } from 'react'

export default class Clicker extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         num: 1
      }
    }

    genRandom(){
        rand = Math.floor(Math.rand() * 10) + 1;
        this.setState( {num: rand})
    }
    

    render() {
        return (
            <div>
                <h1>Number is: { this.state.num } </h1>
                <button onClick={ this.genRandom }>Random Number</button>
            </div>
        )
    }
}
