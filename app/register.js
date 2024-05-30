import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import InputPassword from "../components/templates/inputPasword";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <View className="bg-black w-full h-1/2 flex-1 justify-center items-center">
        <Image
          className="w-80 h-80 mt-10 items-center justify-center "
          source={require("../assets/splash.png")}
        />
      </View>
      <View className="bg-bg_gray w-full h-1/2 flex-1 justify-around items-center">
        <View className="w-3/4 ">
          <TextInput
            className="border rounded-md p-2 mb-3 mt-3 "
            placeholder="Nome de usuário..."
          />
          <InputPassword
            placeholder={"Digite sua senha..."}
            showPasswordIcon={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("(drawer)")}
          className="items-center m-3 bg-primary rounded-md p-3 w-3/4"
        >
          <Text className="font-bold">Pronto!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
