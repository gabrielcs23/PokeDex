import React, { Component } from 'react';
import PokeCard from '../PokeCard/PokeCard';

class PokeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previousPageUrl: '',
            nextPageUrl: '',
            pokemonList: []
        };
    }

    render() {

        const mockPokeImg = [
            {id: 1, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'},
            {id: 2, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'},
            {id: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'},
            {id: 4, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
        ];

        const cards = mockPokeImg.map(poke => {
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
