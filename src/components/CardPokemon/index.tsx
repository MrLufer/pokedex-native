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

const CardPokemon = ({name, picture, id}: any) => {
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
        style={{
          backgroundColor: color.dominant,
          marginBottom: 20,
          borderRadius: 20,
        }}>
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
                style={{width: 100, height: 100}}
              />
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 1}}>
                <Text
                  style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
                  {firsLetterUpperCase(name)}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row-reverse', marginHorizontal: 20}}>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: 'white',
                    opacity: 0.5,
                  }}>
                  #{id}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default CardPokemon;
