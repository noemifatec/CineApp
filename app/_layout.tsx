import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#121212" },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" },
        contentStyle: { backgroundColor: "#121212" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Início", headerShown: false }}
      />
      <Stack.Screen name="catalogo" options={{ title: "Catálogo de Filmes" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes do Filme" }} />
      <Stack.Screen name="sobre" options={{ title: "Sobre o App" }} />
    </Stack>
  );
}
