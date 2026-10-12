import {
    Pressable,
    PressableProps,
    PressableStateCallbackType,
    StyleProp,
    StyleSheet,
    Text,
    ViewStyle,
} from "react-native";

interface BotaoProps extends PressableProps {
  titulo: string;
  variant?: "primary" | "secondary";
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
}

export default function Botao({
  titulo,
  variant = "primary",
  style,
  ...rest
}: BotaoProps) {
  return (
    <Pressable
      style={(state) => [
        styles.botao,
        variant === "secondary" ? styles.secundario : styles.primario,
        state.pressed && styles.pressionado,
        typeof style === "function" ? style(state) : style,
      ]}
      {...rest}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
  },
  primario: {
    backgroundColor: "#E50914",
  },
  secundario: {
    backgroundColor: "#333333",
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressionado: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
});
