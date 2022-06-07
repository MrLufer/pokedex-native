import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const StyleDetails = StyleSheet.create({
  progressBar: {
    height: windowWidth * 0.025,
    borderRadius: windowWidth * 0.0125,
  },
  nameStat: {
    color: 'black',
    fontSize: 16,
  },
  imgStyle: {width: 300, height: 300},
});

export default StyleDetails;
