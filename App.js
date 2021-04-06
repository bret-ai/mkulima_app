import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { Home } from './screens';
import PlantDetails from './screens/PlantDetails';
// Tabs
import Tabs from './navigation/tabs';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {

  React.useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}
      >
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        
        {/* Screens */}
        <Stack.Screen name="PlantDetail" component={PlantDetails} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <App />;
}

const styles = StyleSheet.create({})
