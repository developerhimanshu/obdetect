import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './src/main';
import Result from './src/result';
import {RootStackParamsList} from './src/types';

const Stack = createNativeStackNavigator<RootStackParamsList>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7D53CC',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Main" component={Main} options={{title: 'Home'}} />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            title: 'Output',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  containerHead: {},
});

export default App;
