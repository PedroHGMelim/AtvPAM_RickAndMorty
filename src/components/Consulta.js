import { FlatList, Text, View, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { ListaStyle } from '../styles/styles';

const windowWidth = Dimensions.get('window').width;

export default function Consulta({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => { 
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(json => {setData(json.results); setLoading(false);})
    .catch(erro => {console.error("Erro: ", erro); setLoading(false);});
  }, ["https://rickandmortyapi.com/api/character"]);

  if (isLoading) return (
    <View>
      <ActivityIndicator size="large" color="#1b00b3ff" />
    </View>
  );

  return (
    <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={ListaStyle} onPress={() => navigation.navigate("CharactersDetailScreen", { character: item })}>
              <Image source={{ uri: item.image}} style={{ width: 150, height: 150 }} />
              <Text style={{ fontSize: 20, color: '#ffffffff' }}>Name: {item.name}</Text>
              <Text style={{ fontSize: 20, color: '#ffffffff' }}>Status: {item.status}</Text>
              <Text style={{ fontSize: 20, color: '#ffffffff' }}>Species: {item.species}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  );
}