import "./global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Main from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <LinearGradient
          colors={["#6726b5", "#808080"]}
          className="absolute top-0 left-0 w-full h-full"
        />
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
