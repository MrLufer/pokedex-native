import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import CardPokemon from '../../components/CardPokemon';
import useRegion from '../../hooks/useRegion';

const Home = () => {
  const [pokemon] = useRegion();

  const renderItem = ({item}) => (
    <CardPokemon id={item.id} name={item.name} picture={item.picture} />
  );

  return (
    <SafeAreaView style={{paddingHorizontal: 15}}>
      <Text style={{color: '#e73134', fontSize: 26, fontWeight: 'bold'}}>
        Pokédex
      </Text>
      <View style={{paddingVertical: 10}}>
        <Text>
          The Pokédex contains detailed stats for every creature from the
          Pokémon games.
        </Text>
      </View>
      <FlatList
        data={pokemon}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default Home;
