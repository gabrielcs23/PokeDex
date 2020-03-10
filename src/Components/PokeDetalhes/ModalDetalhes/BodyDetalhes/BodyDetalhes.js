import React, { Component } from 'react';
import Stats from './Stats/Stats';
import Types from './Types/Types';
import ApiService from '../../../../Service/ApiService';
import Evolution from './Evolution/Evolution';

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
                    <div className="card-body pb-2">
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
                        <h6 className="mt-4 text-center">
                            {this.state.species.descricao}
                        </h6>
                    </div>
                    <hr className="mb-2 mt-2"/>
                    <div className="card-body pt-2">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-6">
                                        <h6 className="float-right">
                                            Height:
                                        </h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-left">
                                            {this.state.pokemon.altura} m
                                        </h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <h6 className="float-right">
                                            Weight:
                                        </h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="float-left">
                                            {this.state.pokemon.peso} kg
                                        </h6>
                                    </div>
                                </div>
                                {this.state.species.captureRate ?
                                    <div className="row">
                                        <div className="col-6">
                                            <h6 className="float-right">
                                                Capture rate:
                                            </h6>
                                        </div>
                                        <div className="col-6">
                                            <h6 className="float-left">
                                                {Math.round((this.state.species.captureRate / 255) * 100)}%
                                            </h6>
                                        </div>
                                    </div>
                                : ''}
                            </div>
                            <div className="col-12 col-md-6">
                                {this.state.species.evolvesFrom ? <Evolution evolvesFrom={this.state.species.evolvesFrom} />
                                : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    
}
export default BodyDetalhes;