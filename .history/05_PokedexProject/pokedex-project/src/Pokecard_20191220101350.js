import React, { Component } from 'react'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

export default class Pokecard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
