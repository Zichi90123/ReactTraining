import React, { Component } from 'react'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

export default class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
