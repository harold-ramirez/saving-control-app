import { View, Text } from "react-native";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";

export default function NewSavingControl() {
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ff8f00" },
          headerTintColor: "white",
          headerLeft: () => {},
          headerTitle: "New Saving Control",
          headerRight: () => {},
        }}
      />
      <View className="flex-1 items-center justify-center">
        <Text>New Saving Control</Text>
      </View>
    </Screen>
  );
}
