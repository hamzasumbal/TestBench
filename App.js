import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CacheImageScreen from './src/screens/CacheImageScreen';
import DrawingBoard from './src/screens/DrawingBoard';
import NotaktoScreen from './src/screens/NotaktoScreen';
import Camera from './src/screens/Camera';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CacheImage" component={CacheImageScreen} />
        <Stack.Screen name="DrawingBoard" component={DrawingBoard} />
        <Stack.Screen name="Notakto" component={NotaktoScreen} options = {{
          headerShown : false
        }} />
        <Stack.Screen name="Camera" component={Camera} options = {{
          headerShown : false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;