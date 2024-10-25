import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import ObservacaoDosProfessores from './pages/ObservacaoDosProfessores';
import MapeamentoDaSala from './pages/MapeamentoDaSala';
import Configuracoes from './pages/Configuracoes';
import ExpectativasDeAprendizagem from './pages/ExpectativasDeAprendizagem';
import AulasAnteriores from './pages/AulasAnteriores';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} // Esconde o cabeçalho na página inicial
      />
      <Stack.Screen
        name="ObservacaoDosProfessores"
        component={ObservacaoDosProfessores}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="MapeamentoDaSala"
        component={MapeamentoDaSala}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{ headerBackTitleVisible: false, headerTitle: '', headerTransparent: true }}
      />
      <Stack.Screen
        name="ExpectativasDeAprendizagem"
        component={ExpectativasDeAprendizagem}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AulasAnteriores"
        component={AulasAnteriores}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Routes;
