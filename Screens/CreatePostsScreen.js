import React, { useState, useEffect, useRef }from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";


export const CreatePostsScreen = () => {
    const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return (
    <View style={styles.container}>
            <StatusBar style="auto" />
                  <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
      ></Camera>
            <View style={styles.photoBox} >
                <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
                            <Pressable style={styles.photoButton} onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
              }
            }}>
                <Ionicons name="camera-outline" size={24} color="#BDBDBD" style={styles.exit} />
                    </Pressable>
                    </TouchableOpacity>
            </View>
            <View>
            <Text>Завантажте фото</Text>
            <TextInput placeholder="Назва..." />
            <View>
                <Pressable >
                <Ionicons name="location-outline" size={24} color="#BDBDBD" style={styles.exit} />
            </Pressable>
                <TextInput placeholder="Місцевість..." />
                </View>
                </View>
            <Pressable style={styles.addPhotoButton} onPress={() => navigation.navigate("PostsScreen")}><Text>Опубліковати</Text></Pressable>
            <Pressable>
                <Ionicons name="trash-outline" size={24} color="#BDBDBD" style={styles.exit} />
                </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    photoBox: {
        width: 343,
        height: 240,
        borderRadius: 8,
        backgroundColor: "#E8E8E8",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
marginBottom: 8,
    },
    addPhotoButton: {
        width: 343,
        height: 51,
        borderRadius: 100,
        backgroundColor: "#F6F6F6",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 120,
        paddingRight: 120,
    },
    photoButton: {
        paddingTop: 108,
        paddingBottom: 108,
        paddingLeft: 160,
        paddingRight: 160,
    },
})