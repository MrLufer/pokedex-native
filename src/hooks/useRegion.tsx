import React, {useEffect, useState} from 'react';
import pokeApi from '../api/pokeApi';

interface IPokemon {
  name: string;
  url: string;
}

const useRegion = () => {
  const [pokemons, setRegion] = useState([]);

  useEffect(() => {
    getRegion();
  }, []);

  const getRegion = async () => {
    const response = await pokeApi.get('/generation/4/');
    if (response.status === 200) {
      const pokemonFormat = response.data.pokemon_species.map(
        (pokemon: IPokemon) => ({
          id: Number(pokemon.url.split('/')[6]),
          name: pokemon.name,
          picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            pokemon.url.split('/')[6]
          }.png`,
        }),
      );
      setRegion(pokemonFormat);
    }
  };

  return [pokemons];
};

export default useRegion;
