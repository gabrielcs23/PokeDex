import axios from 'axios'

const ApiService = {

    getPagina: async (url) => {
        const res = await axios.get(url);
        return { count: res.data.count, nextPageUrl: res.data.next, previousPageUrl: res.data.previous, pokemonList: res.data.results };
    },

    getPokemon: async (url) => {
        const res = await axios.get(url);
        const { height, weight, id, name, sprites, stats, types} = res.data;
        return { altura: height/10, peso: weight/10, id: id, name: name, spriteUrl: sprites.front_default, stats: stats, types: types }
    }

}

export default ApiService;