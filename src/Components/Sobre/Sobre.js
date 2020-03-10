import React, { Fragment } from 'react';
import Header from '../Header/Header';

const Sobre = () => {
    return (
        <Fragment>
            <Header />
            <div className="ml-3">
                <p>
                    Projeto proposto como desafio de implementar um catálogo de Pokémon, como a 
                    <a href="https://www.pokemon.com/br/pokedex/"> PokéDex </a>
                    em React utilizando a API
                    <a href="http://pokeapi.co"> PokeApi</a>
                </p>
                <p>
                    Desenvolvido por <a href="https://github.com/gabrielcs23"> Gabriel Costa</a>
                </p>
            </div>
        </Fragment>
    );
}
export default Sobre;
