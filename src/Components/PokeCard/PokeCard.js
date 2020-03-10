import React, { Component, Fragment } from 'react';
import './PokeCard.css'
import ApiService from '../../Service/ApiService';
import Card from './Card';
import PokeDetalhes from '../PokeDetalhes/PokeDetalhes';
import StringFormatter from '../../Utils/StringFormatter'

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
            showDetalhes: false
        }
        this.pokemonUrl = props.pokemonUrl;
    }

    componentDidMount() {
        ApiService.getPokemon(this.pokemonUrl)
            .then(poke => {
                poke.name = StringFormatter.capitalize(poke.name);
                return poke;
            })
            .then(poke => this.setState({ pokemon: poke }));
    }

    toggleDetalhes(e) {
        if(e) {
            e.preventDefault();
        }
        this.setState(
            {pokemon: this.state.pokemon, showDetalhes: !this.state.showDetalhes}
        )
    }

    render() {
        return (
            <Fragment>
                <a className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" href="/" onClick={e => this.toggleDetalhes(e)}>
                    <div>
                        <Card pokemon={this.state.pokemon} />
                    </div>
                </a>
                {this.state.showDetalhes ? 
                    <PokeDetalhes
                        showModal={this.state.showDetalhes}
                        pokemon={this.state.pokemon}
                        onClose={() => this.toggleDetalhes()}
                    />
                    :
                    ''
                }
            </Fragment>
        );
    }

}
export default PokeCard;
