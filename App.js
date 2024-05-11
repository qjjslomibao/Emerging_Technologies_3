import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UploadImage from './UploadImage';
import Settings from './Settings';
import Shubunkin from './samplefish JS/shubunkin';
import LogoScreen from './LogoScreen';
import Ryukin from './samplefish JS/ryukin';
import Oranda from './samplefish JS/oranda'; 
import Calico from './samplefish JS/calico'; 
import Pingpong from './samplefish JS/pingpong';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen name="Logo" component={LogoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UploadImage" component={UploadImage} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="Shubunkin" component={Shubunkin} options={{ headerShown: false }} />
        <Stack.Screen name="Ryukin" component={Ryukin} options={{ headerShown: false }} />
        <Stack.Screen name="Oranda" component={Oranda} options={{ headerShown: false }} />
        <Stack.Screen name="Calico" component={Calico} options={{ headerShown: false }} />
        <Stack.Screen name="Pingpong" component={Pingpong} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/homepage.png')} resizeMode="cover" style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Ionicons name="menu" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <Text style={styles.text}>Welcome!</Text>
          </View>
        </View>

        <Image style={styles.homepageImg} source={require('./assets/home-page-upper-img.jpg')}></Image>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} style={styles.searchIcon} />
          <TextInput style={styles.input} placeholderTextColor="gray" />
          <View style={styles.cameraContainer}>
            <Ionicons name="camera" size={24} style={styles.cameraIcon} onPress={() => navigation.navigate('UploadImage')} />
          </View>
        </View>

        <View style={styles.carousel}>
          <Text style={styles.text}>FISHES</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.navigate('Shubunkin')}>
              <Image source={require('./assets/local.png')} style={styles.carouselImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Oranda')}>
              <Image source={require('./assets/oranda.png')} style={styles.carouselImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Pingpong')}>
              <Image source={require('./assets/ping-pong.png')} style={styles.carouselImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Ryukin')}>
              <Image source={require('./assets/ryukin.png')} style={styles.carouselImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Calico')}>
              <Image source={require('./assets/telescope.png')} style={styles.carouselImage} />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.carousel}>
          <Text style={styles.text}>AQUARIUMS</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => { /* navigate or do something */ }}>
              <Image source={require('./assets/big-tank.png')} style={styles.carouselImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* navigate or do something */ }}>
              <Image source={require('./assets/bowl.png')} style={styles.carouselImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { /* navigate or do something */ }}>
              <Image source={require('./assets/small-tank.png')} style={styles.carouselImage} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('UploadImage')}>
          <Image source={require('./assets/plus-pic.png')} style={styles.plusIcon} />
        </TouchableOpacity>
        <View style={{ alignItems: 'flex-start', width: '100%', height: '100%', flexDirection: 'row' }}>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="home" size={25} style={styles.homeIcon} />
            <Text style={{ fontSize: 10 }}>Home</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
    left: 0,
    zIndex: 1,
    paddingTop: '10%',
    paddingLeft: '5%',
  },
  homepageImg: {
    width: '80%',
    height: '10%',
    borderRadius: 10,
    marginBottom: '5%',
  },
  headerTextContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  carousel: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '80%',
    top: 0,
    left: 0,
    zIndex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  carouselImage: {
    width: 240,
    height: 170,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
    padding: 5,
  },
  input: {
    paddingVertical: 10,
    fontSize: 16,
    color: 'black',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#082E37',
    width: '80%',
    height: '7%',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
    color: '#C4C4C4',
  },
  cameraContainer: {
    position: 'absolute',
    right: 10,
  },
  cameraIcon: {
    color: '#000',
    backgroundColor: '#2E9CFF',
    padding: 1,
    borderRadius: 5,
  },
  homeIcon: {
    zIndex: 1,
    marginRight: 10,
    marginLeft: '10%',
    color: '#000',
  },
  plusIcon: {
    marginTop: -25,
    width: 50,
    height: 50,
    zIndex: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '10%',
  },
});
