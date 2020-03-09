import React, { Component, Fragment } from 'react';
import PokeCard from '../PokeCard/PokeCard';
import ApiService from '../../Service/ApiService';
import Nav from './Nav/Nav';

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
        this.gotoNextPage();
    }

    gotoNextPage() {
        ApiService.getPagina(this.state.nextPageUrl)
                .then(data => this.setState(data));
    }

    gotoPreviousPage() {
        ApiService.getPagina(this.state.previousPageUrl)
                .then(data => this.setState(data));
    }

    render() {

        const cards = this.state.pokemonList.map(poke => {
            return <PokeCard key={poke.url} pokemonUrl={poke.url} />
        });

        return (
            <Fragment>
                <Nav
                    previousDisabled={this.state.previousPageUrl == null}
                    nextDisabled={this.state.nextPageUrl == null}
                    onPreviousNav={() => this.gotoPreviousPage()}
                    onNextNav={() => this.gotoNextPage()}
                     />
                <div className="row">
                    {cards}
                </div>
            </Fragment>
        );
    }

}
export default PokeList;
