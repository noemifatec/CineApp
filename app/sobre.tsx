import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";

export default function TelaSobre() {
  return (
    <View style={styles.container}>
      <View style={styles.cardInfo}>
        <Text style={styles.tituloApp}>CineApp</Text>
        <Text style={styles.label}>Finalidade:</Text>
        <Text style={styles.valor}>
          Apresentar um catálogo interativo de filmes para consulta de detalhes
          e marcação de favoritos.
        </Text>

        <Text style={styles.label}>Versão:</Text>
        <Text style={styles.valor}>1.0.0</Text>

        <Text style={styles.label}>Disciplina:</Text>
        <Text style={styles.valor}>Desenvolvimento Mobile</Text>
      </View>

      <Botao
        titulo="Voltar ao Catálogo"
        onPress={() => router.push("/catalogo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  cardInfo: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 8,
    marginBottom: 24,
  },
  tituloApp: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#E50914",
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888888",
    marginTop: 8,
  },
  valor: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 4,
  },
});
