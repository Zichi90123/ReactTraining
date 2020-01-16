import React, { Component } from 'react'
import Coin from './Coin'

class CoinContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
           sumFlips: 0,
           totHeads: 0,
           totTails: 0,
           url: ""      
        }

        this.handleClick = this.handleClick.bind(this)
    }

    isHead() {
        this.setState({totHeads: this.state.totHeads + 1})
        this.setState({url: "https://tinyurl.com/react-coin-heads-jpg"})
    }

    isTail() {
        this.setState({totTails: this.state.totTails + 1})
        this.setState({url: "https://tinyurl.com/react-coin-tails-jpg"})
    }

    flipCoin(){
        Math.floor(Math.random()* 2) ? this.isHead() : this.isTail()
        this.setState({sumFlips: this.state.sumFlips + 1})
    }

    handleClick() {
        this.flipCoin()
    }

    render() {
        return (
            <div>
               <h1>Let's flip a coin</h1>
               {this.state.sumFlips !== 0 && <Coin url={this.state.url} />}
               <button onClick= {this.handleClick}>Flip me</button> 
               <p>Out of {this.state.sumFlips}, there have been {this.state.totHeads} heads and {this.state.totTails} tails</p>
            </div>
        )
    }
}

export default CoinContainer
