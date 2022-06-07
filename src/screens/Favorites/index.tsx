import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import CardPokemon from '../../components/CardPokemon';
import useFavorite from '../../hooks/useFavorite';
import StyleFavorites from './style';

const Favorites = () => {
  const {favorites} = useFavorite();
  const navigation = useNavigation();

  const renderItem = ({item}: any) => (
    <CardPokemon id={item.id} name={item.name} picture={item.picture} />
  );

  return (
    <SafeAreaView>
      <IconButton
        icon="arrow-left"
        color="grey"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={StyleFavorites.container}>
        <Text style={StyleFavorites.title}>
          Your favorite pokemons will be here
        </Text>
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
