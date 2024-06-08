import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import Input from "../components/templates/input";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <View className="bg-black w-full h-1/2 flex-1 justify-center items-center">
        <Image
          className="w-80 h-80 mt-10 items-center justify-center "
          source={require("../assets/logoOriginal.jpg")}
        />
      </View>
      <View className="bg-gray w-full h-1/2 flex-1 justify-around items-center">
        <View className="w-3/4 ">
          <Input label={"Nome de usuário"} placeholder={"Digite seu nome"} />
          <Input
            label={"Senha"}
            placeholder={"Digite sua senha"}
            secret={true}
          />
        </View>

        {/* ----------------- Button ----------------- */}

        <TouchableOpacity
          onPress={() => navigation.navigate("(drawer)")}
          className="items-center m-3 bg-primary rounded-md p-3 w-3/4"
        >
          <Text className="font-bold">Entrar</Text>
        </TouchableOpacity>
        <Text className="text-xs">
          Ainda nao possui uma conta?{" "}
          <Link className="font-semibold" href={"./register"}>
            Cadastre-se aqui
          </Link>
        </Text>
      </View>
    </View>
  );
}
