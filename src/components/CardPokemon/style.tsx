import {StyleSheet} from 'react-native';

const StyleCardPokemon = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 20,
  },
  textId: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.5,
  },
  namePokemon: {fontSize: 24, fontWeight: 'bold', color: 'white'},
  flex: {flex: 1},
  pictureStyle: {width: 100, height: 100},
});
export default StyleCardPokemon;
