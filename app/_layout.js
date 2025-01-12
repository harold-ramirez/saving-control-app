import "../global.css";
import { Slot } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <LinearGradient
          colors={["#6726b5", "#808080"]}
          className="absolute top-0 left-0 w-full h-full"
        />
        <StatusBar style="auto" />
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
