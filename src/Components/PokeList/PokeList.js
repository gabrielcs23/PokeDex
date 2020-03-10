import React, { Component, Fragment } from 'react';
import PokeCard from '../PokeCard/PokeCard';
import ApiService from '../../Service/ApiService';
import Nav from './Nav/Nav';

class PokeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            currPage: 1,
            pokemonList: []
        }
        this.pageSize = 20;
    }

    componentDidMount() {
        this.navigateToPage(1);
    }

    navigateToPage(page) {
        const offset = (page - 1) * 20
        ApiService.getPage(offset)
                .then(data => this.setState({...data, currPage: page}));
    }

    render() {

        const cards = this.state.pokemonList.map(poke => {
            return <PokeCard key={poke.url} pokemonUrl={poke.url} />
        });

        return (
            <Fragment>
                <Nav
                    count={this.state.count}
                    currPage={this.state.currPage}
                    pageSize={this.pageSize}
                    navigateToPage={(page) => this.navigateToPage(page)}
                />
                <div className="row">
                    {cards}
                </div>
            </Fragment>
        );
    }

}
export default PokeList;
