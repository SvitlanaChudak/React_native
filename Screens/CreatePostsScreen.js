import React, { useState, useEffect }from 'react';
import { View, StatusBar, StyleSheet, Text, TextInput, Pressable, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

const initialState = {
  name: "",
  place: "",
};


export const CreatePosts = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
   const [state, setState] = useState(initialState);

  const createPost = () => {
    const dataPost = { ...state, image, location };
    navigation.navigate("PostsScreen", dataPost);
  }
  
  const takePhoto = async () => {
    const image = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
    setImage(image.uri);
  }

  const deletePost = () => {
    setImage(null);
    onChangeName(null);
    onChangeLocation(null);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}></KeyboardAvoidingView>
  <StatusBar style="auto" />
        <View style={styles.photoBox} >

            <Camera style={styles.camera} ref={setCamera}>
            {image && (
               <Image source={{ uri: image }} style={styles.camera} />
            )}
              <TouchableOpacity onPress={takePhoto}>

                  <Ionicons name="camera-outline" size={24} color="#BDBDBD" style={styles.exit} />
                
              </TouchableOpacity>
            </Camera>
    
          

        </View>
        {!image ?
        <Text style={styles.cameraComment}>Завантажте фото</Text>
        :
          <Text style={styles.cameraComment}>Редагувати фото</Text>
        }
            <View>
            
            <TextInput placeholder="Назва..." style={styles.input} onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, name: value }))} value={state.name}/>
            <View style={styles.searchSection}>
                <Ionicons name="location-outline" size={24} color="#BDBDBD" style={styles.searchIcon} />
                <TextInput placeholder="Місцевість..." style={styles.input} onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, place: value }))} value={state.place}></TextInput>
                </View>
                </View>
            <Pressable style={styles.addPhotoButton} onPress={createPost}><Text>Опубліковати</Text></Pressable>
            <Pressable onPress={deletePost}>
                <Ionicons name="trash-outline" size={24} color="#BDBDBD" style={styles.exit} />
          </Pressable>
       
      </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
  camera: {
    flex: 1,
  
  },
  input: {
   marginTop: 30,
    width: 343,
    backgroundColor: "white",
  },
searchSection: {
    flexDirection: 'row',
  },
searchIcon: {
    paddingTop: 20,
},

})