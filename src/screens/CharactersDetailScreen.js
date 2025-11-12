import { View } from 'react-native';
import Informacoes from '../components/Informacoes';

export default function CharactersDetailScreen({ route }) {
  const { character } = route.params;

  return (
    <View>
      <Informacoes character={character} />
    </View>
  );
}