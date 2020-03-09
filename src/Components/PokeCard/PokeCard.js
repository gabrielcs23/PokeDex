import React, { Component } from 'react';
import './PokeCard.css'
import ApiService from '../../Service/ApiService';
import Card from './Card';

class PokeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {
                altura: '',
                peso: '',
                id: '',
                name: '',
                spriteUrl: '',
                stats: '',
                types: ''
            },
        }
        this.pokemonUrl = props.pokemonUrl;
    }

    componentDidMount() {
        ApiService.getPokemon(this.pokemonUrl)
            .then(data => this.setState({ pokemon: data }));
    }

    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <Card pokemon={this.state.pokemon} />
            </div>
        );
    }

}
export default PokeCard;