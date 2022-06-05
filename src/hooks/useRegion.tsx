import React, {useEffect, useState} from 'react';
import pokeApi from '../api/pokeApi';

const useRegion = () => {
  const [pokemon, setRegion] = useState(null);

  useEffect(() => {
    getRegion();
  }, []);

  const getRegion = async () => {
    const response = await pokeApi.get('/generation/4/');
    if (response.status === 200) {
      const pokemonFormat = response.data.pokemon_species.map(
        (pokemon: any) => ({
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

  console.log(pokemon);

  return [pokemon];
};

export default useRegion;
