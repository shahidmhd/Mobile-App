import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const [loaded, error] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGetStarted = () => {
    setIsLoggedIn(true); 
  };
  return (
    
      <View style={styles.container}>
        <NavigationContainer>
        {isLoggedIn ? (
          <TabNavigation setIsLoggedIn={setIsLoggedIn}/>
        ) : (
          <Login onGetStarted={handleGetStarted} /> 
        )}
        </NavigationContainer>
        {/* <Login /> */}
        <StatusBar style="auto" />
      </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});
