import axios from 'axios'

const ApiService = {

    getPagina: async (url) => {
        const res = await axios.get(url);
        const data = { count: res.data.count, nextPageUrl: res.data.next, previousPageUrl: res.data.previous, pokemonList: res.data.results };
        data.pokemonList = data.pokemonList.map(poke => {
            const id = poke.url.match(/\/(\d+)/)[1];
            return { ...poke, id };
        });
        return data;
    },

    getSpriteUrl: (id) => `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`

}

export default ApiService;