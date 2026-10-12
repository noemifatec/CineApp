import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/seed/cineapp/300/300" }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>CineApp</Text>
      <Text style={styles.descricao}>
        Sua plataforma para explorar os melhores filmes do cinema clássico e
        moderno.
      </Text>

      <View style={styles.botoesContainer}>
        <Botao
          titulo="Acessar Catálogo"
          onPress={() => router.push("/catalogo")}
        />
        <Botao
          titulo="Sobre o Aplicativo"
          variant="secondary"
          onPress={() => router.push("/sobre")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#121212",
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    color: "#CCCCCC",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 22,
  },
  botoesContainer: {
    width: "100%",
  },
});
