import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

const useFavorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    const data = await AsyncStorage.getItem('@favorites');
    if (data) {
      setFavorites(JSON.parse(data));
    }
  };

  const addFavorite = async (pokemon: any) => {
    let foundPokemon = favorites.find((item: any) => item.id === pokemon.id);
    if (!foundPokemon) {
      const pokemons = [pokemon, ...favorites];
      await AsyncStorage.setItem('@favorites', JSON.stringify(pokemons));
      setFavorites(pokemons);
    }
  };

  return {favorites, addFavorite};
};

export default useFavorite;
