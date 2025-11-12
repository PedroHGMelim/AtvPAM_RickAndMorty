import { View, Image, Text } from "react-native";
import { ListaStyle } from "../styles/styles";

export default function Informacoes ({ character }) {
    if (!character) {
        return (
            <View>
                <Text>Erro: Nenhum personagem encontrado.</Text>
            </View>
        );
    }

  return(
    <View style={[ListaStyle, {width: 350, alignItems: "center", padding: 20}]}>
        <Image source={{ uri: character.image}} style={{ width: 150, height: 150 }} />
        <Text style={{ fontSize: 20, marginTop:15, marginBottom:15, color: '#ffffffff' }}>Name: {character.name}</Text>
        <Text style={{ fontSize: 20, color: '#ffffffff' }}>Status: {character.status}</Text>
        <Text style={{ fontSize: 20, color: '#ffffffff' }}>Species: {character.species}</Text>
        <Text style={{ fontSize: 20, color: '#ffffffff' }}>Gender: {character.gender}</Text>
        <Text style={{ fontSize: 20, color: '#ffffffff' }}>Origin: {character.origin.name}</Text>
        <Text style={{ fontSize: 20, color: '#ffffffff' }}>Location: {character.location.name}</Text>
    </View>
  );
}