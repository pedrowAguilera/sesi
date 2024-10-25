import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Obs from '../img/Obs.png'

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
      {/* Primeira Box de Observação */}
      <View style={styles.observacaoBox}>
        <View style={styles.headerBox}>
          <Text style={styles.professorName}>Professor Brendon</Text>
          <Text style={styles.data}>12/08/24</Text>
        </View>
        <Text style={styles.observacaoTexto}>
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum...
        </Text>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.lerMais}>Ler mais</Text>
        </TouchableOpacity>
      </View>

      {/* Segunda Box de Observação */}
      <View style={styles.observacaoBox}>
        <View style={styles.headerBox}>
          <Text style={styles.professorName}>Professor Ana</Text>
          <Text style={styles.data}>14/09/24</Text>
        </View>
        <Text style={styles.observacaoTexto}>
          Conteúdo da professora Ana. Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum...
        </Text>
        <TouchableOpacity onPress={toggleModal2}>
          <Text style={styles.lerMais}>Ler mais</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para exibir o conteúdo completo da primeira observação */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.professorName}>Professor Brendon</Text>
              <Text style={styles.data}>12/08/24</Text>
            </View>
            <ScrollView>
              <Text style={styles.observacaoCompleta}>
                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.
              </Text>
            </ScrollView>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.fecharModal}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para exibir o conteúdo completo da segunda observação */}
      <Modal visible={modalVisible2} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.professorName}>Professor Ana</Text>
              <Text style={styles.data}>14/09/24</Text>
            </View>
            <ScrollView>
              <Text style={styles.observacaoCompleta}>
                Conteúdo completo da professora Ana. Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.
              </Text>
            </ScrollView>
            <TouchableOpacity onPress={toggleModal2}>
              <Text style={styles.fecharModal}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Botão de Voltar (com ícone, nome e X) */}
      <View style={styles.voltarBox}>
        <View style={styles.voltarButton}>
          <View >
          <Image style={styles.iconImage} source={Obs}/>
          </View>
          <Text style={styles.voltarText}>Obs. dos Professores</Text>
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
  observacaoBox: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30, // Ajuste de espaço entre as boxes
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  professorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  data: {
    color: '#888',
    fontSize: 14,
  },
  observacaoTexto: {
    fontSize: 14,
    color: '#333',
  },
  lerMais: {
    color: '#FF0000',
    marginTop: 10,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  observacaoCompleta: {
    fontSize: 14,
    color: '#333',
  },
  fecharModal: {
    color: '#FF0000',
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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
