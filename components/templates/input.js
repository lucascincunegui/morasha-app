import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Input({ label, placeholder, value, secret }) {
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="bg-gray pt-2 pb-2 rounded">
      <View className="mt-2 mb-2 w-full">
        {label ? (
          <View className="bg-gray self-start absolute -translate-y-3 left-3 z-10 pr-1 pl-1">
            <Text className="text-sm text-primary font-normal">{label}</Text>
          </View>
        ) : null}
        <View className="flex-row border-2 rounded justify-around items-center border-primary p-2.5 ">
          <TextInput
            className="text-base w-full"
            placeholder={placeholder}
            secureTextEntry={secret ? !showPassword : null}
            value={secret ? password : value}
            onChangeText={secret ? setPassword : null}
          />
          {secret ? (
            <MaterialCommunityIcons
              style={{ position: "absolute", right: 12 }}
              onPress={toggleShowPassword}
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}
