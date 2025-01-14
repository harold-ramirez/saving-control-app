import "../global.css";
import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitle: "",
            headerLeft: () => (
              <Text className="font-bold text-2xl text-white py-5">
                BIENVENIDO A TU APP DE AHORRO
              </Text>
            ),
          }}
        />
      </View>
    </SafeAreaProvider>
  );
}
