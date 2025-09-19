import { useEffect, useState } from "react";

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

interface props {
    id: number;
}

export const usePokemon = ({ id }: props) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const getPokemonById = async (id: number) => {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        const pokemon: Pokemon = {
            id: id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
        };

        setPokemon(pokemon);
    }

    useEffect(() => {
        getPokemonById(id);
    }, [id]);

    return {pokemon};
}
