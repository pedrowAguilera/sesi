import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Necessário para envolver o App
import { createStackNavigator } from '@react-navigation/stack';
import App from './App'; // Seu componente principal com a interface do usuário
import ObservacaoDosProfessores from './pages/ObservacaoDosProfessores'; // Página 1
import MapeamentoDaSala from './pages/MapeamentoDaSala'; // Página 2
import Configuracoes from './pages/Configuracoes'; // Página 3
import AulasAnteriores from './pages/AulasAnteriores'; // Página 4
import ExpectativasDeAprendizagem from './pages/ExpectativasDeAprendizagem'; // Página 5

// Criar o Stack Navigator
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Rota para o componente principal */}
        <Stack.Screen name="Home" component={App} />

        {/* Outras páginas */}
        <Stack.Screen name="ObservacaoDosProfessores" component={ObservacaoDosProfessores} />
        <Stack.Screen name="MapeamentoDaSala" component={MapeamentoDaSala} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
        <Stack.Screen name="AulasAnteriores" component={AulasAnteriores} />
        <Stack.Screen name="ExpectativasDeAprendizagem" component={ExpectativasDeAprendizagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
