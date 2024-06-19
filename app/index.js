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
          className="w-60 h-60 mt-10 items-center justify-center "
          source={require("../assets/logoOriginal.jpg")}
        />
      </View>
      <View className="bg-gray w-full h-4/6 flex justify-around items-center">
        <View className="w-3/4">
          <Input label={"Nome de usuário"} placeholder={"Digite seu nome"} />
          <Input
            label={"Senha"}
            placeholder={"Digite sua senha"}
            secret={true}
          />
        </View>
        <View className=" w-3/4 mt-20">
          <TouchableOpacity
            onPress={() => navigation.navigate("(drawer)")}
            className="items-center mb-2 mt-2 bg-primary rounded-md p-3"
          >
            <Text className="font-bold">Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("register")}
            className="items-center mb-2 mt-2 border-2 border-primary bg-white rounded-md p-3"
          >
            <Text className="font-bold">Criar nova conta</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xs p-5">
          Esqueceu sua senha?{" "}
          <Link className="font-semibold" href={"./forgotPassword"}>
            Clique aqui
          </Link>
        </Text>
      </View>
    </View>
  );
}
