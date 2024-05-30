import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function InputPassword({ placeholder, showPasswordIcon }) {
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View className="flex-row items-center justify-start border rounded-md p-2 mb-3 mt-3 ">
      <TextInput
        className="w-10/12"
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
      />
      {showPasswordIcon ? (
        <TouchableOpacity
          className="w-2/12 h-4/4 items-center"
          onPress={toggleShowPassword}
        >
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
