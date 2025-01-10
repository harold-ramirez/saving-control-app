import "../global.css";
import { Text, View, Image, Pressable, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import logo from "../assets/Splash_Logo.png";

export default function Main() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <ScrollView className="px-2">
        <View className="items-center">
          <Text className="font-bold text-2xl text-white py-5">
            BIENVENIDO A TU APP DE AHORRO
          </Text>
          <Image
            source={logo}
            style={{ width: 100, height: 100 }}
            className="m-5"
          />
          <Pressable className="bg-green-700 border-white border-4 w-48 h-48 my-2 rounded-full justify-center items-center">
            <Text className="text-white text-2xl">REGISTRAR</Text>
            <Text className="text-white text-2xl">AHORRO</Text>
            <Text className="text-white text-2xl">DIARIO</Text>
          </Pressable>
        </View>
        <Text className="my-5 font-bold text-2xl">Tus avances:</Text>
        <Text className="text-xl">Días con ahorros registrados: 27/30</Text>
        <Text className="text-xl">
          Ya tienes un total de XX.xx Bs. ahorrados
        </Text>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
        <View className="bg-gray-400 w-full h-20 my-2"></View>
      </ScrollView>
    </View>
  );
}
