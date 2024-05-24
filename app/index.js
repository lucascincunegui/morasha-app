import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";

export default function Login() {
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center">
      <Image
        className="w-56 h-56 mb-16 items-center justify-center bg-black rounded-full"
        source={require("../assets/splash.png")}
      />
      <TextInput
        className="border rounded-md m-3 p-2 w-3/4 "
        placeholder="Nome de usuário..."
      />
      <View
        className="flex-row items-center justify-center border
        rounded-md m-3 w-3/4 p-2 bg-#f3f3f3 "
      >
        <TextInput
          className="w-10/12"
          placeholder="Senha..."
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className=" w-2/12 h-4/4 items-center "
          onPress={toggleShowPassword}
        >
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("(drawer)")}
        className="items-center m-3 bg-primary rounded-md p-3 w-3/4"
      >
        <Text className="font-bold">Entrar</Text>
      </TouchableOpacity>
      <Text className="text-xs">
        Ainda nao possui uma conta? Cadastre-se aqui
      </Text>
    </View>
  );
}
