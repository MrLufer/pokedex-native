import React, {useEffect, useState} from 'react';
import pokeApi from '../api/pokeApi';

interface IType {
  name: string;
  url: string;
}

interface IPokeType {
  slot: number;
  pokemon: {
    name: string;
    url: string;
  };
}

const useTypes = (types: IType) => {
  const [pokeTypes, setPokeTypes] = useState([]);

  useEffect(() => {
    getPokemonFromType();
  }, [types]);

  const getPokemonFromType = async () => {
    let pokemons: IPokeType[] = [];
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
