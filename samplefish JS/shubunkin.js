import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';

const Shubunkin = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.readMoreText}>READ MORE</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>SHUBUNKIN GOLDFISH</Text>
      <Image source={require('./SHUBUKIN.png')} resizeMode="contain" style={styles.fishImage} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ImageBackground
            source={require('./bgshubunkin.png')}  // Path to your static background image
            resizeMode="cover"
            style={styles.modalView}
            imageStyle={styles.backgroundImageStyle}
            onLoadEnd={() => setImageLoaded(true)}  // Handle loading state
          >
            {imageLoaded ? (
              <>
                <Text style={styles.modalTitle}>SHUBUNKIN GOLDFISH</Text>
                <Text style={styles.modalText}>Single-tailed with calico coloration, more streamlined body allowing for active swimming.</Text>
                <Text style={styles.modalInfo}>Tank Size (for 1 fish) - 20 Gallons</Text>
                <Text style={styles.modalInfo}>Diet - Omnivore: Plant and animal-based foods</Text>
                <Text style={styles.modalInfo}>Water Temperature 65-75°F (18-24°C)</Text>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableOpacity>
              </>
            ) : (
              <ActivityIndicator size="large" color="#00ff00" /> // Show loader while the image is loading
            )}
          </ImageBackground>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 150,
    paddingHorizontal: 20,
  },
  readMoreButton: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  readMoreText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  fishImage: {
    width: 300,
    height: 600,
    marginTop: -40,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  },
  modalView: {
    margin: 20,
    width: 300, // Adjust as needed
    height: 400, // Adjust as needed
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 20,
  },
  backgroundImageStyle: {
    borderRadius: 20, 
  },
  modalTitle: {
    marginBottom: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  modalText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalInfo: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Shubunkin;
