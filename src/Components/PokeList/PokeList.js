import React, { Component } from 'react';
import PokeCard from '../PokeCard/PokeCard';
import ApiService from '../../Service/ApiService';

class PokeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousPageUrl: null,
            nextPageUrl: 'https://pokeapi.co/api/v2/pokemon/',
            pokemonList: [],
            count: 0
        };
    }

    componentDidMount() {
        ApiService.getPagina(this.state.nextPageUrl)
                .then(data => this.setState(data));
    }

    render() {

        const cards = this.state.pokemonList.map(poke => {
            return <PokeCard key={poke.id} pokemon={poke} />
        });

        return (
            <div className="row">
                {cards}
            </div>
        );
    }

}
export default PokeList;
