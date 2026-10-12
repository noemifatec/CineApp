import { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import FilmeCard, { Filme } from "../components/FilmeCard";

const FILMES: Filme[] = [
  {
    id: "1",
    titulo: "Inception",
    genero: "Ficção Científica",
    ano: 2010,
    imagem: "https://picsum.photos/seed/inception/200/300",
    sinopse:
      "Um ladrão que rouba segredos corporativos através do uso de tecnologia de compartilhamento de sonhos é dada a tarefa inversa de plantar uma idéia na mente de um C.E.O.",
  },
  {
    id: "2",
    titulo: "Interstellar",
    genero: "Ficção Científica",
    ano: 2014,
    imagem: "https://picsum.photos/seed/interstellar/200/300",
    sinopse:
      "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
  },
  {
    id: "3",
    titulo: "The Dark Knight",
    genero: "Ação",
    ano: 2008,
    imagem: "https://picsum.photos/seed/darkknight/200/300",
    sinopse:
      "Quando a ameaça conhecida como O Coringa surge de seu passado misterioso, ele causa estragos e caos no povo de Gotham.",
  },
  {
    id: "4",
    titulo: "Pulp Fiction",
    genero: "Crime",
    ano: 1994,
    imagem: "https://picsum.photos/seed/pulpfiction/200/300",
    sinopse:
      "As vidas de dois assassinos da máfia, um boxeador, a esposa de um gângster e dois bandidos se entrelaçam em quatro histórias de violência e redenção.",
  },
  {
    id: "5",
    titulo: "The Matrix",
    genero: "Ação / Ficção",
    ano: 1999,
    imagem: "https://picsum.photos/seed/matrix/200/300",
    sinopse:
      "Um hacker aprende com rebeldes misteriosos sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.",
  },
  {
    id: "6",
    titulo: "Gladiador",
    genero: "Ação / Drama",
    ano: 2000,
    imagem: "https://picsum.photos/seed/gladiator/200/300",
    sinopse:
      "Um ex-general romano parte para se vingar do imperador corrupto que assassinou sua família e o enviou para a escravidão.",
  },
];

export default function TelaCatalogo() {
  useEffect(() => {
    console.log("Catálogo carregado");
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subtitulo}>Lista de Filmes Cadastrados</Text>
      {FILMES.map((filme) => (
        <FilmeCard key={filme.id} filme={filme} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#121212",
  },
  subtitulo: {
    fontSize: 18,
    color: "#888",
    marginBottom: 16,
  },
});
