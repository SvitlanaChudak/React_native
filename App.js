
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { Home } from './Screens/Home';

const MainStack = createStackNavigator();

export default function App() {
const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto/Roboto.ttf'),
});
    if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home}  />
        </MainStack.Navigator>
      </NavigationContainer>
  );
}

