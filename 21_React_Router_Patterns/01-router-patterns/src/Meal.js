import React, { Component } from 'react'

export default class Meal extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const foodName = this.props.match.params.foodName
    const drinkName = this.props.match.params.drinkName
    const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
    const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`;
    return (
      <div>
        <h1>THIS IS A MEAL OF {foodName} + {drinkName}</h1>
        <img src={foodUrl} alt={foodName} />
        <img src={drinkUrl} alt={drinkName} />
      </div>
    )
  }
}
