import { View } from 'react-native';
import Consulta from "../components/Consulta.js";

export default function CharactersListScreen({ navigation }) {
    return(
        <View>
            <Consulta navigation={navigation} />
        </View>
    );
}