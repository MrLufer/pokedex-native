import React, {useEffect, useState} from 'react';
import {Checkbox, Modal, Portal, IconButton} from 'react-native-paper';
import pokeApi from '../../api/pokeApi';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import StyleModal from './style';
export const {height} = Dimensions.get('window');

interface typeProps {
  name: string;
  url: string;
}

const ModalType = ({visible, onClose, filterTypes, setFilterTypes}: any) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes();
  }, []);

  const getTypes = async () => {
    const response = await pokeApi.get('/type');
    if (response.status === 200) {
      setTypes(response.data.results);
    }
  };
  const addType = (name: typeProps) => {
    if (filterTypes.includes(name)) {
      setFilterTypes(filterTypes.filter(type => type !== name));
    } else {
      setFilterTypes([...filterTypes, name]);
    }
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        style={{
          padding: 20,
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            height: height * 0.9,
            padding: 20,
            top: 0,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={StyleModal.title}>Filtra los tipos de pokemon</Text>
            </View>

            <IconButton
              icon="close"
              style={{margin: 0}}
              onPress={() => {
                onClose();
              }}
            />
          </View>
          <View style={{marginBottom: 30}}>
            <ScrollView>
              {types.map((type: any) => (
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Checkbox
                      status={
                        filterTypes.includes(type) ? 'checked' : 'unchecked'
                      }
                      key={type}
                      onPress={() => {
                        addType(type);
                      }}
                    />
                  </View>
                  <View style={StyleModal.textType}>
                    <Text>{type.name}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ModalType;
