import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";

export default function TelaDetalhes() {
  const params = useLocalSearchParams<{
    id: string;
    titulo: string;
    imagem: string;
    genero: string;
    ano: string;
    sinopse: string;
  }>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: params.imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{params.titulo}</Text>
      <Text style={styles.detalhes}>
        {params.genero} • {params.ano}
      </Text>

      <View style={styles.sinopseContainer}>
        <Text style={styles.sinopseTitulo}>Sinopse</Text>
        <Text style={styles.sinopseTexto}>{params.sinopse}</Text>
      </View>

      <Botao titulo="Voltar ao Catálogo" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#121212",
  },
  imagem: {
    width: 180,
    height: 260,
    borderRadius: 8,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
  },
  detalhes: {
    fontSize: 16,
    color: "#AAAAAA",
    marginBottom: 20,
  },
  sinopseContainer: {
    width: "100%",
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  sinopseTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  sinopseTexto: {
    fontSize: 14,
    color: "#DDDDDD",
    lineHeight: 20,
  },
});
