import React, { Component } from 'react'
import { Link } from "react-router-dom";
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
                <MiniPalette />
                {palettes.map(p => (
                    <p>
                        <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
                    </p>
                ))}
            </div>
        )
    }
}
