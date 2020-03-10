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
    },

    getPokemonSpecies: async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const { capture_rate, color, flavor_text_entries, evolution_chain } = res.data;
        const descricao = flavor_text_entries.find(desc => {
            return desc.language.name === 'en' && desc.version.name === "x";
        });
        return { captureRate: Math.round((capture_rate / 255) * 100), color: color.name, descricao: descricao.flavor_text, urlEvolucao: evolution_chain.url};
    }

}

export default ApiService;