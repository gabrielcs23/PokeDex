import axios from 'axios'

const ApiService = {

    getPage: async (offset) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
        return { count: res.data.count, pokemonList: res.data.results }
    },

    getPokemon: async (url) => {
        const res = await axios.get(url);
        const { height, weight, id, name, sprites, stats, types} = res.data;
        return { altura: height/10, peso: weight/10, id: id, name: name, spriteUrl: sprites.front_default, stats: stats, types: types }
    },

    getPokemonSpecies: async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const { capture_rate, color, flavor_text_entries, evolves_from_species } = res.data;
        const descricao = flavor_text_entries.find(desc => {
            return desc.language.name === 'en' && desc.version.name === "x";
        });
        return { captureRate: capture_rate, color: color.name, descricao: descricao.flavor_text, evolvesFrom: evolves_from_species};
    },

    getSpriteUrlAndIdFromSpecies: async (url) => {
        const speciesRes = await axios.get(url);
        const { id } = speciesRes.data;
        const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const { sprites } = pokemonRes.data;
        return { spriteUrl: sprites.front_default, id: id};
    }

}

export default ApiService;