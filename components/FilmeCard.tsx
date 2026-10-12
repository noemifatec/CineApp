import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export interface Filme {
  id: string;
  titulo: string;
  imagem: string;
  genero: string;
  ano: number;
  sinopse: string;
}

interface FilmeCardProps {
  filme: Filme;
}

export default function FilmeCard({ filme }: FilmeCardProps) {
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  const irParaDetalhes = () => {
    router.push({
      pathname: "/detalhes",
      params: {
        id: filme.id,
        titulo: filme.titulo,
        imagem: filme.imagem,
        genero: filme.genero,
        ano: filme.ano.toString(),
        sinopse: filme.sinopse,
      },
    });
  };

  return (
    <View style={styles.card}>
      <Pressable
        onPress={irParaDetalhes}
        style={({ pressed }) => [
          styles.conteudo,
          pressed && styles.cardPressionado,
        ]}
      >
        <Image source={{ uri: filme.imagem }} style={styles.capa} />
        <View style={styles.info}>
          <Text style={styles.titulo}>{filme.titulo}</Text>
          <Text style={styles.detalhes}>
            {filme.genero} • {filme.ano}
          </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={toggleFavorito}
        style={({ pressed }) => [
          styles.botaoFavorito,
          pressed && styles.favPressionado,
        ]}
      >
        <Text style={styles.textoFavorito}>
          {favorito ? "★ Favorito" : "☆ Favoritar"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#333",
  },
  conteudo: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
  },
  cardPressionado: {
    opacity: 0.8,
  },
  capa: {
    width: 70,
    height: 100,
    borderRadius: 4,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  detalhes: {
    fontSize: 14,
    color: "#AAAAAA",
  },
  botaoFavorito: {
    backgroundColor: "#2A2A2A",
    paddingVertical: 8,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  favPressionado: {
    backgroundColor: "#3D3D3D",
  },
  textoFavorito: {
    color: "#FFD700",
    fontWeight: "bold",
  },
});
