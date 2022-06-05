import React from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import usePokemon from '../../hooks/usePokemon';
import StyleDetails from './style';

const PokeDetails = () => {
  const route = useRoute();
  const {id, color, name} = route.params;

  const {pokemon} = usePokemon(id);

  console.log(pokemon);

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
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
          {formatStat(name)}
        </Text>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
          style={{width: 300, height: 300}}
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
