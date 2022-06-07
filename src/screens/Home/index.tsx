import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import CardPokemon from '../../components/CardPokemon';
import useRegion from '../../hooks/useRegion';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ModalType from '../../components/ModalType';
import useTypes from '../../hooks/useTypes';

const Home = () => {
  const [pokemon] = useRegion();
  const [filterTypes, setFilterTypes] = useState([]);
  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();
  const {pokeTypes} = useTypes(filterTypes);

  const pokemonsList = pokemon.filter(poke =>
    pokeTypes.some(type => type.pokemon.name === poke.name),
  );

  const renderItem = ({item}: any) => (
    <CardPokemon id={item.id} name={item.name} picture={item.picture} />
  );

  return (
    <SafeAreaView style={{paddingHorizontal: 15, marginBottom: 50}}>
      <Text style={{color: '#e73134', fontSize: 26, fontWeight: 'bold'}}>
        Pokédex
      </Text>

      <View style={{paddingVertical: 10, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text>
            The Pokédex contains detailed stats for every creature from the
            Pokémon games.
          </Text>
        </View>
        <IconButton
          icon="heart-outline"
          onPress={() => {
            navigation.navigate('Favorites');
          }}
        />
        <IconButton
          icon="filter-variant"
          onPress={() => {
            setVisible(true);
          }}
        />
      </View>
      <View style={{marginBottom: 50}}>
        <FlatList
          data={pokemonsList}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          contentContainerStyle={{paddingBottom: 100}}
        />
      </View>
      <ModalType
        visible={visible}
        onClose={() => setVisible(false)}
        filterTypes={filterTypes}
        setFilterTypes={setFilterTypes}
      />
    </SafeAreaView>
  );
};

export default Home;
