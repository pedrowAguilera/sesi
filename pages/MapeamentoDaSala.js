import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importe as imagens
import prof from '../img/prof.png';
import porta from '../img/porta.png';
import cadeira from '../img/cadeira.png';
import Map from '../img/Map.png';

const MapeamentoDaSala = () => {
  const navigation = useNavigation();

  const voltarParaPaginaInicial = () => {
    navigation.goBack(); // Volta para a página inicial
  };

  // Função para renderizar cadeiras com o número "N°29" em cima
  const renderCadeiras = () => {
    const rows = [];
    for (let i = 0; i < 6; i++) {
      rows.push(
        <View key={i} style={styles.row}>
          <View style={styles.cadeiraContainer}>
            <Text style={styles.cadeiraTexto}>N°29</Text>
            <Image source={cadeira} style={styles.chairImage} />
          </View>
          <View style={styles.cadeiraContainer}>
            <Text style={styles.cadeiraTexto}>N°29</Text>
            <Image source={cadeira} style={styles.chairImage} />
          </View>
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      {/* Parte superior com professor e porta */}
      <View style={styles.topRow}>
        <Image source={prof} style={styles.profImage} />
        <Image source={porta} style={styles.iconImage2} />
      </View>

      {/* Cadeiras em colunas */}
      <View style={styles.chairsOrganization}>
        <View style={styles.chairsContainer}>
          {renderCadeiras()}
        </View>

        <View style={styles.chairsContainer}>
          {renderCadeiras()}
        </View>

        <View style={styles.chairsContainer}>
          {renderCadeiras()}
        </View>
      </View>

      {/* Botão de Voltar (com ícone, nome e X) */}
      <View style={styles.voltarBox}>
        <View style={styles.voltarButton}>
          <View>
            <Image style={styles.iconImage} source={Map} />
          </View>
          <View>
            <Text style={styles.voltarText}>Mapeamento da sala</Text>
          </View>
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
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50, // Ajuste para espaçamento entre a parte superior e as cadeiras
  },
  profImage: {
    width: 70,
    height: 70,
    alignItems: 'center',
  },
  iconImage: {
    width: 45,
    height: 45,
  },
  iconImage2: {
    width: 30,
    height: 45,
  },
  chairsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  chairsOrganization: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10, // Espaçamento entre as linhas de cadeiras
  },
  chairImage: {
    width: 35,
    height: 35,
    marginHorizontal: 10, // Espaçamento entre as cadeiras
  },
  cadeiraContainer: {
    alignItems: 'center', // Alinhar o texto ao centro em relação à cadeira
  },
  cadeiraTexto: {
    fontSize: 12,
    marginBottom: -5, // Espaçamento entre o texto e a imagem da cadeira
    fontWeight: 'bold',
    color: '#000',
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
    paddingRight: 100,
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
});

export default MapeamentoDaSala;
