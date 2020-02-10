import React, { Component } from 'react'
import './PaletteList.css'
import MiniPalette from './MiniPalette';

export default class PaletteList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>React Colors</h1>
                {palettes.map(palette => (
                    <MiniPalette {...palette} />
                ))}
            </div>
        )
    }
}
