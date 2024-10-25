import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, LogBox } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Certifique-se de importar o ImagePicker
import Aula from '../img/Aula.png';
import Config from '../img/Config.png';
import Expec from '../img/Expec.png';
import Foto from '../img/Foto.png';
import Map from '../img/Map.png';
import Obs from '../img/Obs.png';

// Ignorar possíveis avisos irrelevantes de logs
LogBox.ignoreLogs(['Warning: ...']); 

const Home = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(null); // Adicionando estado para a imagem de perfil

  const handleProfilePicture = async () => {
    // Mostrar opções de tirar foto ou escolher da galeria
    const options = [
      { text: 'Tirar Foto', onPress: handleTakePhoto },
      { text: 'Escolher da Galeria', onPress: handlePickImage },
      { text: 'Cancelar', style: 'cancel' }
    ];
    Alert.alert("Alterar Foto de Perfil", "Escolha uma opção:", options);
  };

  const handleImageSelection = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      const selectedImageUri = result.assets[0].uri; // Acessando a URI corretamente
      setImage(selectedImageUri);
      console.log("URI da imagem selecionada:", selectedImageUri);
    } else {
      console.log("Seleção de imagem cancelada.");
    }
  };  

  const handleTakePhoto = async () => {
    // Solicitar permissão para usar a câmera
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.granted) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      console.log("Resultado da câmera:", result); // Verificar o resultado da câmera
      if (!result.cancelled) {
        console.log("URI da imagem tirada:", result.uri);
        setProfileImage(result.uri); // Definir a imagem tirada como imagem de perfil
      }
    } else {
      Alert.alert("Permissão negada", "Precisamos de acesso à câmera para tirar uma foto.");
    }
  };

  const handlePickImage = async () => {
    // Solicitar permissão para acessar a galeria
    const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (galleryPermission.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      console.log("Resultado da galeria:", result); // Verificar o resultado da galeria
      if (!result.cancelled) {
        console.log("URI da imagem selecionada:", result.uri);
        setProfileImage(result.uri); // Definir a imagem escolhida como imagem de perfil
      }
    } else {
      Alert.alert("Permissão negada", "Precisamos de acesso à galeria para escolher uma foto.");
    }
  };

  const handleNavigate = (option) => {
    navigation.navigate(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SESI CE240 - Ferraz de Vasconcelos</Text>
      </View>

      <TouchableOpacity style={styles.profilePicture} onPress={handleProfilePicture}>
        {/* Exibir a imagem de perfil escolhida/tirada, ou a imagem padrão se nenhuma foi definida */}
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileIcon} />
        ) : (
          <Image source={Foto} style={styles.profileIcon} />
        )}
      </TouchableOpacity>
      <Text style={styles.profileName}>Pedro Henrique Aguilera Silva</Text>
      <Text style={styles.profileId}>449432</Text>
      <Text style={styles.profileAttendance}>% de Freq. - 92%</Text>

      <View style={styles.dataBox}>
        <Text style={styles.boxTitle}>Meus dados</Text>
        <Text style={styles.dataLabel}>E-mail</Text>
        <Text style={styles.dataInfo}>pedro.aquilera@portalsesisp.org.br</Text>
        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.dataLabel}>Senha</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.dataInfo}>*****</Text>
          
        </View>
      </View>

      <View style={styles.dataBox}>
        <Text style={styles.boxTitle}>Aluno</Text>
        <View style={styles.iconRow}>
          <TouchableOpacity style={[styles.iconBox]} onPress={() => handleNavigate('ObservacaoDosProfessores')}>
            <Image style={styles.iconImage} source={Obs}/>
            <Text style={styles.iconText}>Observações dos Professores</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBox]} onPress={() => handleNavigate('MapeamentoDaSala')}>
            <Image style={styles.iconImage} source={Map} />
            <Text style={styles.iconText}>Mapeamento da Sala</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBox]} onPress={() => handleNavigate('Configuracoes')}>
            <Image style={styles.iconImage} source={Config}/>
            <Text style={styles.iconText}>Configurações</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconRowNoSpace}>
          <TouchableOpacity style={[styles.iconBox]} onPress={() => handleNavigate('ExpectativasDeAprendizagem')}>
            <Image style={styles.iconImage} source={Expec}/>
            <Text style={styles.iconText}>Expectativas de Aprendizagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBox]} onPress={() => handleNavigate('AulasAnteriores')}>
            <Image style={styles.iconImage} source={Aula}/>
            <Text style={styles.iconText}>Aulas Anteriores</Text>
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
        alignItems: 'center',
      },
      header: {
        width: '100%',
        paddingVertical: 70,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        backgroundColor: '#00C2FF',
      },
      headerText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        width: 160,
        paddingTop: -50
      },
      profilePicture: {
        marginTop: -60,
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
      },
      profileIcon: {
        width: 150, // Deixa a imagem do tamanho da caixa
        height: 150,
        borderRadius: 100, // Arredondar a imagem também
      },
      profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
      },
      profileId: {
        fontSize: 14,
        color: '#666',
      },
      profileAttendance: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        alignSelf: 'flex-end',
        marginRight: 20,
      },
      dataBox: {
        width: '90%',
        backgroundColor: '#FFF',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
      },
      boxTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      dataLabel: {
        fontSize: 14,
        color: '#666',
      },
      dataInfo: {
        fontSize: 14,
        marginBottom: 10,
      },
      divider: {
        height: 1,
        backgroundColor: '#DDD',
        marginVertical: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      changeButton: {
        color: '#1E90FF',
      },
      iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      iconRowNoSpace: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
      },
      iconBox: {
        width: '31%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 13,
      },
      iconImage: {
        width: 50,
        height: 50,
        marginBottom: 5,
      },
      iconText: {
        fontSize: 12,
        textAlign: 'center',
      },
    });

export default Home;
