import React, {useEffect, useState} from 'react';
import pokeApi from '../api/pokeApi';

const useTypes = (types: any) => {
  const [pokeTypes, setPokeTypes] = useState([]);

  useEffect(() => {
    getPokemonFromType();
  }, [types]);

  const getPokemonFromType = async () => {
    let pokemons: any[] = [];
    for (let type of types) {
      const response = await pokeApi.get(`/type/${type.name}`);
      if (response.status === 200) {
        pokemons = pokemons.concat(response.data.pokemon);
      }
    }
    setPokeTypes(pokemons);
  };

  return {pokeTypes};
};

export default useTypes;
