import "./global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import Main from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-blue-300">
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
