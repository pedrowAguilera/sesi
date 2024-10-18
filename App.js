import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'; // Removido 'navigation'

const App = ({ navigation }) => { // O navigation é passado automaticamente aqui quando o App é uma screen

  const handleProfilePicture = () => {
    Alert.alert("Opção de alterar foto de perfil");
  };

  const handleNavigate = (option) => {
    navigation.navigate(option); // Agora o navigation está sendo passado corretamente
  };

  return (
    <View style={styles.container}>
      {/* Fundo sólido com espaçamento ajustado e texto alinhado à direita */}
      <View style={styles.header}>
        <Text style={styles.headerText}>SESI CE240 - Ferraz de Vasconcelos</Text>
      </View>

      {/* Foto de perfil e informações */}
      <TouchableOpacity style={styles.profilePicture} onPress={handleProfilePicture}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileIcon} />
      </TouchableOpacity>
      <Text style={styles.profileName}>Pedro Henrique Aguilera Silva</Text>
      <Text style={styles.profileId}>449432</Text>
      <Text style={styles.profileAttendance}>% de Freq. - 92%</Text>

      {/* Box Meus Dados */}
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
          <TouchableOpacity onPress={() => Alert.alert('Alterar Senha')}>
            <Text style={styles.changeButton}>Alterar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Box Aluno */}
      <View style={styles.dataBox}>
        <Text style={styles.boxTitle}>Aluno</Text>
        {/* Primeira linha com 3 ícones */}
        <View style={styles.iconRow}>
          <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#FF3B30' }]} onPress={() => handleNavigate('ObservacaoDosProfessores')}>
            <Image style={styles.iconImage} />
            <Text style={styles.iconText}>Observações dos Professores</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#00C2FF' }]} onPress={() => handleNavigate('MapeamentoDaSala')}>
            <Image style={styles.iconImage} />
            <Text style={styles.iconText}>Mapeamento da Sala</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#8E8E93' }]} onPress={() => handleNavigate('Configuracoes')}>
            <Image style={styles.iconImage} />
            <Text style={styles.iconText}>Configurações</Text>
          </TouchableOpacity>
        </View>
        {/* Segunda linha com 2 ícones */}
        <View style={styles.iconRowNoSpace}>
          <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#007AFF' }]} onPress={() => handleNavigate('ExpectativasDeAprendizagem')}>
            <Image style={styles.iconImage} />
            <Text style={styles.iconText}>Expectativas de Aprendizagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconBox, { backgroundColor: '#FF9500' }]} onPress={() => handleNavigate('AulasAnteriores')}>
            <Image style={styles.iconImage} />
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
    paddingVertical: 70, // Triplicado o espaçamento vertical
    paddingHorizontal: 20, // Espaçamento lateral
    alignItems: 'flex-start',
    backgroundColor: '#00C2FF',
  },
  headerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    width: 160
  },
  profilePicture: {
    marginTop: -50,
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 50,
    height: 50,
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
    alignSelf: 'flex-end', // Coloca a % de Freq. no lado direito
    marginRight: 20, // Ajuste para espaçamento
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
    marginBottom: 10, // Adiciona espaçamento entre as duas caixas na segunda linha
  },
  iconBox: {
    width: '30%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 15, // Pequeno espaçamento entre os ícones na mesma linha
  },
  iconImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  iconText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
