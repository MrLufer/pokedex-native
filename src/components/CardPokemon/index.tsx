import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';

import pokeball from '../../../assets/images/pokeball.png';
import StyleCardPokemon from './style';

interface ICardPokemon {
  id: number;
  name: string;
  picture: string;
}

const CardPokemon = ({name, picture, id}: ICardPokemon) => {
  const [color, setcolor] = useState({dominant: '#fff'});
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  useEffect(() => {
    getColor();
  }, []);

  const getColor = async () => {
    const colors = await ImageColors.getColors(picture);
    setcolor(colors);
  };

  const firsLetterUpperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PokeDetails', {id, color, name});
      }}>
      <View
        style={[
          {
            backgroundColor: color.dominant,
          },
          StyleCardPokemon.container,
        ]}>
        <ImageBackground
          source={pokeball}
          imageStyle={{
            width: 100,
            height: 100,
            opacity: 0.3,
            left: width - 150,
          }}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{padding: 10}}>
              <Image
                source={{
                  uri: picture,
                }}
                style={StyleCardPokemon.pictureStyle}
              />
            </View>
            <View style={StyleCardPokemon.flex}>
              <View style={StyleCardPokemon.flex}>
                <Text style={StyleCardPokemon.namePokemon}>
                  {firsLetterUpperCase(name)}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row-reverse', marginHorizontal: 20}}>
                <Text style={StyleCardPokemon.textId}>#{id}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default CardPokemon;
