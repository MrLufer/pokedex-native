import React, {useEffect, useState} from 'react';
import pokeApi from '../api/pokeApi';

const usePokemon = (id: string) => {
  const [pokemon, setPokemon] = useState({stats: []});
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    let response = await pokeApi.get(`/pokemon/${id}`);
    if (response.status === 200) {
      setPokemon(response.data);
    }
  };

  return {pokemon};
};

export default usePokemon;
