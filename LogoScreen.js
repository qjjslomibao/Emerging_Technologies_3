import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const LogoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logoscreen.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>
        An unknown Gold Fish?{'\n'}Take a photo, upload it,{'\n'}and get details!
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: 600, // Set the width of your logo
    height: 600, // Set the height of your logo
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 60,
    color: '#fff', // Set the color of the text
  },
  button: {
    backgroundColor: '#2E9CFF', // Set your desired button color
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff', // Set your desired button text color
    fontSize: 16,
  },
});

export default LogoScreen;