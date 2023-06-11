import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';

export default function App() {
const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto/Roboto.ttf'),
});
    if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg_image.png')} style={styles.image}>
      <RegistrationScreen />
        <LoginScreen />
        <StatusBar style="auto" />
        </ImageBackground>
    </View>
  );
}

