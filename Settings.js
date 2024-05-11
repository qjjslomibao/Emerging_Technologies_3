import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
const Settings = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>SETTINGS</Text>
        <View style={styles.settingItem}>
            <MaterialIcons name="sticky-note-2" size={24} color="black"/>
            <Text style={styles.itemText}>Terms and Conditions</Text>
            <MaterialCommunityIcons name="greater-than" size={24} color="black" style={styles.rightIcon}/>
        </View>
        <View style={styles.settingItem}>
            <Ionicons name="person" size={24} color="black"/>
            <Text style={styles.itemText}>About</Text>
            <MaterialCommunityIcons name="greater-than" size={24} color="black" style={styles.rightIcon}/>
        </View>

        <View style={styles.footer}>
            <View style={styles.footerContent}>
                <Ionicons name="home" size={25} style={styles.homeIcon} />
                <Text style={{fontSize: 10,}}>Home</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C4C4C4',
    },
    settingItem: {
        flexDirection: 'row',
        paddingLeft: 40,
        alignItems: 'center',
        marginBottom: 10,
    },
    itemText: {
        marginLeft: 10,
    },
    rightIcon: {
        marginLeft: 'auto', 
        marginRight: 20
    },
    title: {
        padding: 20,
        paddingTop: 50,
        fontWeight: '600',
    },
    text: {
      fontSize: 32,
      textAlign: 'center',
      color: 'black',
      paddingBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '10%',
    },
    footerContent: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    homeIcon: {
        marginRight: 10,
    },
  });

export default Settings;