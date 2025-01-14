import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function Screen({ children }) {
  return (
    <LinearGradient
      colors={["#6726b5", "#808080"]}
      className="absolute top-0 left-0 w-full h-full"
    >
      <View className="flex-1 px-3">{children}</View>
    </LinearGradient>
  );
}
