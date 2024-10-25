import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Config from '../img/Config.png'

const ObservacaoDosProfessores = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleModal2 = () => {
    setModalVisible2(!modalVisible2);
  };

  const voltarParaPaginaInicial = () => {
    navigation.goBack(); // Volta para a página inicial
  };

  return (
    <View style={styles.container}>

      {/* Botão de Voltar (com ícone, nome e X) */}
      <View style={styles.voltarBox}>
        <View style={styles.voltarButton}>
          <View >
          <Image style={styles.iconImage} source={Config}/>
          </View>
          <Text style={styles.voltarText}>Configurações</Text>
          <TouchableOpacity onPress={voltarParaPaginaInicial}>
            <View style={styles.fecharIcon}>
              <Text style={styles.fecharIconText}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    paddingTop: 70
  },
  voltarBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  voltarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  voltarIcon: {
    backgroundColor: '#FF3B30',
    borderRadius: 20,
    padding: 10,
  },
  voltarIconText: {
    fontSize: 16,
    color: '#FFF',
  },
  voltarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingRight: 100
  },
  fecharIcon: {
    backgroundColor: '#00FFAB',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 16
  },
  fecharIconText: {
    fontSize: 16,
    color: '#FFF',
  },
  iconImage: {
    width: 45,
    height: 45
  }
});
export default ObservacaoDosProfessores;
