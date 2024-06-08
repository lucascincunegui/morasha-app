import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Input from "../components/templates/input";

export default function Register() {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <View className="bg-black w-full h-2/6 justify-center items-center">
        <Image
          className="w-52 h-52 mt-5 items-center justify-center"
          source={require("../assets/logoOriginal.jpg")}
        />
      </View>
      <View className="bg-gray w-full h-4/6 justify-around items-center pt-6 pb-16">
        <View className="w-3/4">
          <Input
            label={"Celular ou email"}
            placeholder={"Seu número ou email"}
          />

          <Input label={"Nome de usuario"} placeholder={"Seu nome"} />

          <Input
            label={"Data de nascimento"}
            placeholder={new Date().toLocaleDateString()}
          />

          <Input label={"Senha"} placeholder={"Nova senha"} secret={true} />
        </View>

        {/* ----------------- Button ----------------- */}

        <TouchableOpacity
          onPress={() => navigation.navigate("(drawer)")}
          className="items-center m-3 bg-primary rounded-md p-3 w-3/4"
        >
          <Text className="font-semibold">Pronto!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
