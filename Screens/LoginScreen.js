import React, { useState } from 'react';
import {View, Text, TextInput, Pressable, ImageBackground, StatusBar, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation} from '@react-navigation/native';

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

    const onLogin = () => {
      console.log(`${email} + ${password}`);
      navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.container}>
<ImageBackground source={require('../assets/bg_image.png')} style={styles.image}>
          <StatusBar style="auto" />
      <View style={styles.centeredView}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}></KeyboardAvoidingView>
        <Text style={styles.titleText}>Увійти</Text>
        <View>
            <TextInput placeholder="Адреса електронної пошти" value={email} onChangeText={setEmail} style={styles.input}/>
            <TextInput placeholder="Пароль" value={password} onChangeText={setPassword} style={styles.input}/>
      </View>
      <Pressable onPress={onLogin} style={styles.button}><Text style={styles.buttonText}>Увійти</Text></Pressable>
      <Pressable onPress={() => navigation.navigate("Registration")}><Text style={styles.refText}>Немає акаунту? Зареєструватися</Text></Pressable>
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
    height: 489,
    marginTop: 320,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
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
    paddingLeft: 146.5,
    paddingRight: 146.5,
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
      image: {
flex: 1,
width: null,
height: null,
  },
});
