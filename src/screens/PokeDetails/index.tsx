import React from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import usePokemon from '../../hooks/usePokemon';
import StyleDetails from './style';
import useFavorite from '../../hooks/useFavorite';

const PokeDetails = () => {
  const route = useRoute();
  const {id, color, name} = route.params;
  const navigation = useNavigation();
  const {pokemon} = usePokemon(id);
  const {addFavorite} = useFavorite();

  const formatStat = (str: string) => {
    const stat = str.charAt(0).toUpperCase() + str.slice(1);
    return stat.replace('-', ' ');
  };

  return (
    <SafeAreaView>
      <View
        style={{
          position: 'absolute',
          height: 380,
          width: '100%',
          backgroundColor: color.dominant,
          paddingHorizontal: 15,
          borderBottomStartRadius: 200,
          borderBottomEndRadius: 200,
          transform: [{scaleX: 2}],
        }}
      />
      <IconButton
        icon="arrow-left"
        color="#fff"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{paddingHorizontal: 15}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            opacity: 0.5,
            fontSize: 24,
          }}>
          #{id}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
            {formatStat(name)}
          </Text>
          <IconButton
            icon="heart"
            color="white"
            onPress={() => {
              addFavorite({
                id,
                picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                name,
              });
            }}
          />
        </View>

        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
          style={StyleDetails.imgStyle}
        />
      </View>
      <View style={{paddingHorizontal: 15, marginTop: 20}}>
        <Text
          style={{color: color.darkVibrant, fontWeight: 'bold', fontSize: 20}}>
          Base Stats
        </Text>
        {pokemon?.stats?.map(item => (
          <View key={item.stat.name} style={{flexDirection: 'row'}}>
            <View style={{flex: 3}}>
              <Text style={StyleDetails.nameStat}>
                {formatStat(item?.stat?.name)}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text>{item.base_stat}</Text>
            </View>
            <View style={{flex: 6}}>
              <View
                style={[
                  StyleDetails.progressBar,
                  {
                    width: item.base_stat + '%',
                    backgroundColor: color.darkVibrant,
                  },
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default PokeDetails;
