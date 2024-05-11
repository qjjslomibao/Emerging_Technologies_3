import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Alert, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const UploadImage = () => {
    const [imageUri, setImageUri] = useState(null);
    const apiUrl = 'http://172.30.13.195:5000'; // Adjust API URL as needed
    const navigation = useNavigation();

    const pickImageAndUpload = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission required', 'We need camera roll permissions to make this work!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled && result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri;
            setImageUri(uri);
            uploadAndClassifyImage(uri);
        } else {
            Alert.alert('No image selected', 'Please select an image to upload.');
        }
    };

    const uploadAndClassifyImage = async (uri) => {
        const formData = new FormData();
        formData.append('image', { uri, type: 'image/jpeg', name: 'upload.jpg' });

        const response = await fetch(`${apiUrl}/predict`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            Alert.alert('Upload Failed', 'Failed to upload and classify the image.');
            return;
        }

        const result = await response.json();
        handleClassificationResult(result.class_name);
    };

    const handleClassificationResult = (classification) => {
        const screenName = classification.charAt(0).toUpperCase() + classification.slice(1);
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/upload-image-bg2.png')} resizeMode="cover" style={styles.background}>
                <Text style={styles.text}>Find your{"\n"}Similar Fish</Text>
                <TouchableOpacity style={styles.button} onPress={pickImageAndUpload}>
                    <Text style={styles.buttonText}>Upload your Image</Text>
                </TouchableOpacity>
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 36,
        textAlign: 'center',
        color: 'white',
        paddingBottom: 100,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'rgba(217,217, 217, 0.6)',
        padding: 10,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        marginTop: 20,
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default UploadImage;
