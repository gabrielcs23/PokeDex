import React, { Component } from 'react';
import Stats from './Stats';
import Types from './Types';
import ApiService from '../../../Service/ApiService';

class BodyDetalhes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: props.pokemon,
            species: {}
        }
    }

    componentDidMount() {
        ApiService.getPokemonSpecies(this.state.pokemon.id)
                .then(species => {
                    this.setState({
                        pokemon: this.state.pokemon,
                        species: species
                    });
                });
    }

    render() {
        return (
            <div className="modal-body">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img className="img-detalhe" src={this.state.pokemon.spriteUrl} alt={""} />
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-12">
                                        <Types types={this.state.pokemon.types}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <Stats color={this.state.species.color} stats={this.state.pokemon.stats}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="card-body">
                        <div>
                            <span>{this.state.pokemon.altura} m</span>
                        </div>
                        <div>
                            <span>{this.state.pokemon.peso} kg</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    
}
export default BodyDetalhes;