import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CharactersListScreen from './src/screens/CharactersListScreen';
import CharacterDetailScreen from './src/screens/CharactersDetailScreen';

const Stack = createNativeStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharactersListScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CharactersListScreen" component={CharactersListScreen} />
        <Stack.Screen name="CharactersDetailScreen" component={CharacterDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
