import React, { useState } from 'react';
import {View, Text, TextInput, Pressable, Image, ImageBackground, StatusBar, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

    const onRegister = () => {
      navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
<ImageBackground source={require('../assets/bg_image.png')} style={styles.image}>
          <StatusBar style="auto" />
      <View style={styles.centeredView}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}></KeyboardAvoidingView>
      <View style={styles.avatarBox}></View>
      <Image style={styles.addAvatar} source={require('../assets/add_avatar.png')}></Image>
      <Image style={styles.addedAvatar} source={require('../assets/avatar_added.png')}></Image>
        <Text style={styles.titleText}>Реєстрація</Text>
        <View>
            <TextInput placeholder="Логін" value={login} onChangeText={setLogin} style={styles.input}/>
            <TextInput placeholder="Адреса електронної пошти" value={email} onChangeText={setEmail} style={styles.input}/>
            <TextInput placeholder="Пароль" value={password} onChangeText={setPassword} style={styles.input}/>
      </View>
      <Pressable onPress={onRegister} style={styles.button}><Text style={styles.buttonText}>Зареєстуватися</Text></Pressable>
      <Pressable onPress={() => navigation.navigate("Login")}><Text style={styles.refText}>Вже є акаунт? Увійти</Text></Pressable>
          </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
)
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 375,
    height: 549,
    marginTop: 260,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'relative',
    zIndex: 1,
  },
  input: {
    width: 343,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 16,
    margin: 16,
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
    color: '#BDBDBD',
  },
  titleText: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 16,
    marginTop: 32,
  },
  button: {
    width: 343,
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 111.5,
    paddingRight: 111.5,
    marginTop: 27,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
  },
  refText: {
    color: '#1B4371',
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 16,
  },
  avatarBox: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'absolute',
    zIndex: 2,
    top: -60,
  },
  addAvatar: {
    position: 'absolute',
    zIndex: 3,
    width: 25,
    height: 25,
    top: 20,
    right: 115,
  },
    addedAvatar: {
    position: 'absolute',
    zIndex: 3,
    width: 25,
    height: 25,
    top: 20,
    right: 115,
    display: 'none',
  },
    image: {
flex: 1,
width: null,
height: null,
  },
});

              