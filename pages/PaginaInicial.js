import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Certifique-se de que você tem esse pacote instalado

import notebook from '../img/notebook.png'

const PaginaInicial = () => {
  const navigation = useNavigation();
  
  const handleNavigate = (option) => {
    navigation.navigate(option);
  };


  return (
    <View style={styles.container}>
      <Image source={notebook} style={styles.image} />
      <Text style={styles.description}>O App da sua instituição de ensino</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText} onPress={() => handleNavigate('Home')}>Continuar para o Login</Text>
        <Icon name="arrow-forward" size={20} color="#00B8AE" />
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00B8AE',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 26,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 60,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: '#00B8AE',
    marginRight: 10,
  },
});

export default PaginaInicial;
