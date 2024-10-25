import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import Expec from '../img/Expec.png';

const ExpectativasDeAprendizagem = () => {
  const [materiaSelecionada, setMateriaSelecionada] = useState('História');
  const [expectativasVisiveis, setExpectativasVisiveis] = useState({});
  const navigation = useNavigation();

  // Dados de exemplo para as matérias e expectativas
  const expectativasPorMateria = {
    História: [
      { titulo: '1.1 Título', texto: 'Texto da expectativa de História 1.1' },
      { titulo: '2.1 Título', texto: 'Texto da expectativa de História 2.1' },
      { titulo: '3.1 Título', texto: 'Texto da expectativa de História 3.1' },
      { titulo: '4.1 Título', texto: 'Texto da expectativa de História 4.1' },
      { titulo: '5.1 Título', texto: 'Texto da expectativa de História 5.1' },
      { titulo: '4.1 Título', texto: 'Texto da expectativa de História 4.1' },
      { titulo: '5.1 Título', texto: 'Texto da expectativa de História 5.1' },{ titulo: '4.1 Título', texto: 'Texto da expectativa de História 4.1' },
      { titulo: '5.1 Título', texto: 'Texto da expectativa de História 5.1' },
    ],
    Matemática: [
      { titulo: '1.1 Título', texto: 'Texto da expectativa de Matemática 1.1' },
      { titulo: '2.1 Título', texto: 'Texto da expectativa de Matemática 2.1' },
      { titulo: '3.1 Título', texto: 'Texto da expectativa de Matemática 3.1' },
      { titulo: '4.1 Título', texto: 'Texto da expectativa de Matemática 4.1' },
      { titulo: '5.1 Título', texto: 'Texto da expectativa de Matemática 5.1' },
    ],
    // Adicione mais matérias aqui
  };

  // Função para alternar visibilidade do texto da expectativa
  const toggleExpectativa = (index) => {
    setExpectativasVisiveis((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Seletor de Matéria */}
      <View style={styles.materiaContainer}>
        <Text style={styles.materiaText}>Matéria:</Text>
        <Picker
          selectedValue={materiaSelecionada}
          style={styles.picker}
          onValueChange={(itemValue) => setMateriaSelecionada(itemValue)}
        >
          <Picker.Item label="História" value="História" />
          <Picker.Item label="Matemática" value="Matemática" />
          {/* Adicione mais opções de matérias aqui */}
        </Picker>
      </View>

      {/* Lista de Expectativas */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.expectativaInicio}>
        {expectativasPorMateria[materiaSelecionada].map((expectativa, index) => (
          <View key={index} style={styles.expectativaContainer}>
            {/* Título da Expectativa */}
            <TouchableOpacity
              style={styles.tituloContainer}
              onPress={() => toggleExpectativa(index)}
            >
              <Text style={styles.tituloText}>{expectativa.titulo}</Text>
              <Text style={styles.icon}>{expectativasVisiveis[index] ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {/* Texto da Expectativa (expandido ou recolhido) */}
            {expectativasVisiveis[index] && (
              <View style={styles.textoContainer}>
                <Text style={styles.texto}>{expectativa.texto}</Text>
              </View>
            )}
          </View>
        ))}
        </View>
      </ScrollView>

      {/* Botão de Voltar (Mapeamento da Sala) */}
      <View style={styles.voltarBox}>
        <View style={styles.voltarButton}>
          <Image style={styles.iconImage} source={Expec} />
          <Text style={styles.voltarText}>Expectativas de Aprendizagem</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
    backgroundColor: '#F5F5F5',
    paddingTop: 60, // Adicionado para evitar sobreposição no topo
  },
  scrollContainer: {
    paddingBottom: 100, // Espaço extra para evitar que conteúdo fique escondido atrás da barra de navegação
  },
  materiaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    top: 50, // Distância agradável do topo
    left: 20, // Mover para a esquerda
    right: 20,
    zIndex: 10, // Para garantir que fique na frente
  },
  materiaText: {
    fontSize: 16,
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  expectativaInicio: {
    marginTop: 50, // Ajuste de distância do seletor de matéria
  },
  expectativaContainer: {
    marginBottom: 10,
  },
  tituloContainer: {
    backgroundColor: '#E63946',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tituloText: {
    fontSize: 16,
    color: '#FFF',
  },
  icon: {
    color: '#FFF',
  },
  textoContainer: {
    backgroundColor: '#F1A7A1',
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  texto: {
    color: '#333',
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
  voltarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingRight: 40,
  },
  fecharIcon: {
    backgroundColor: '#00FFAB',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 16,
  },
  fecharIconText: {
    fontSize: 16,
    color: '#FFF',
  },
  iconImage: {
    width: 45,
    height: 45,
  },
});

export default ExpectativasDeAprendizagem;
