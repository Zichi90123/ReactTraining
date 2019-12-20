import React, { Component } from 'react'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

export default class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={imgSrc} />
            </div>
        )
    }
}
