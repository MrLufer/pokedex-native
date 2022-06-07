import {StyleSheet, Dimensions} from 'react-native';
export const {height} = Dimensions.get('window');
const StyleModal = StyleSheet.create({
  content: {
    overflow: 'hidden',
    paddingTop: 30,
    paddingBottom: 60,
    paddingHorizontal: 14,
    backgroundColor: 'white',
  },
  containerStyle: {backgroundColor: 'white', padding: 20},
  wrapper: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  transparent: {backgroundColor: 'rgba(0, 0, 0, 0)'},
  flex: {flex: 1},
  modalContent: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 14,
    height: height * 0.8,
  },
  title: {fontWeight: 'bold', fontSize: 18, marginBottom: 15},
  textType: {alignItems: 'center', justifyContent: 'center'},
});

export default StyleModal;
