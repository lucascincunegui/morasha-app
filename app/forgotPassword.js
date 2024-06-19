import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";
import Input from "../components/templates/input";

export default function ForgotPassword() {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <View className="bg-gray w-full h-full  justify-center items-center pt-6 pb-16">
        <View className="w-3/4 h-3/4 items-center justify-center">
          <View className="m-4">
            <Feather name="lock" size={60} color="black" />
          </View>
          <Text className="text-lg font-medium m-3 mb-6">
            Problemas para entrar?
          </Text>
          <Text className="text-base">
            Insira o seu email e enviaremos um link para você voltar a acessar a
            sua conta.
          </Text>
          <View className="mt-10">
            <Input label="Email" placeholder={"Digite seu email"} />
          </View>
        </View>

        {/* ----------------- Button ----------------- */}

        <TouchableOpacity
          onPress={() => navigation.navigate("(drawer)")}
          className="items-center m-3 bg-primary rounded-md p-3 w-3/4"
        >
          <Text className="font-semibold">Enviar link para login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
