import "../global.css";
import { Link } from "expo-router";
import { Text, View, Image, Pressable, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import logo from "../assets/Splash_Logo.png";

export default function Main() {
  const insets = useSafeAreaInsets();
  const objects = [
    {
      name: "Casa",
      icon: "home",
    },
    {
      name: "Carro",
      icon: "car",
    },
    {
      name: "Salud",
      icon: "heart",
    },
    {
      name: "Educación",
      icon: "graduation-cap",
    },
    {
      name: "Entretenimiento",
      icon: "gamepad",
    },
    {
      name: "Viajes",
      icon: "plane",
    },
    {
      name: "Viajes2",
      icon: "plane",
    },
    {
      name: "Viajes3",
      icon: "plane",
    },
    {
      name: "Viajes4",
      icon: "plane",
    },
    {
      name: "Viajes5",
      icon: "plane",
    },
    {
      name: "Viajes6",
      icon: "plane",
    },
    {
      name: "Viajes7",
      icon: "plane",
    },
    {
      name: "Viajes8",
      icon: "plane",
    },
  ];

  function renderItem({ item }) {
    return (
      <View className="flex-row h-32 items-center my-2 border-white border-2">
        <View
          className={`w-20 h-10 border-green-700 border-2 items-center justify-center rounded-full`}
        >
          <Text className="text-white text-md">{item.icon}</Text>
        </View>
        <Text className="text-xl text-white ml-2">{item.name}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
      className="px-3 flex-1"
    >
      <View className="items-center">
        <Text className="font-bold text-2xl text-white py-5">
          BIENVENIDO A TU APP DE AHORRO
        </Text>
        <Image
          source={logo}
          style={{ width: 100, height: 100 }}
          className="m-3"
        />
        <Pressable
          className="bg-green-700 active:bg-green-900 border-white border-4 w-48 h-48 my-2 rounded-full justify-center items-center"
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "green" : "green",
            },
          ]}
        >
          <Text className="text-white text-2xl">REGISTRAR</Text>
          <Text className="text-white text-2xl">AHORRO</Text>
          <Text className="text-white text-2xl">DIARIO</Text>
        </Pressable>
      </View>
      <Link href="/newSavingControl" className="bg-purple-400 text-xl">
        Crear nuevo control de ahorro
      </Link>
      <Text className="my-2 font-bold text-2xl">Tus avances:</Text>
      <Text className="text-xl">Días con ahorros registrados: 27/30</Text>
      <Text className="text-xl mb-2">
        Ya tienes un total de XX.xx Bs. ahorrados
      </Text>
      <LinearGradient
        colors={["transparent", "black"]}
        className="w-full h-full flex-1"
      >
        <FlatList
          data={objects}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />
      </LinearGradient>
    </View>
  );
}
