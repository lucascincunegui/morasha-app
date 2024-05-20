import { Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Divider from "../../../components/templates/divider";

export default function Settings() {
  const button = "p-5 flex-row items-center";
  return (
    <View className="flex-1 flex-col">
      <TouchableOpacity className={button}>
        <Feather
          name="edit-3"
          style={{ marginRight: 20 }}
          size={20}
          color="black"
        />
        <Text className="text-base">Editar Perfil</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity className={button}>
        <Ionicons
          name="notifications-outline"
          size={20}
          style={{ marginRight: 20 }}
          color="black"
        />
        <Text className="text-base">Notificações</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity className={button}>
        <Feather
          name="lock"
          style={{ marginRight: 20 }}
          size={20}
          color="black"
        />
        <Text className="text-base">Privacidade e segurança</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity className={button}>
        <MaterialIcons
          name="favorite-border"
          size={20}
          style={{ marginRight: 20 }}
          color="black"
        />
        <Text className="text-base">Favoritos</Text>
      </TouchableOpacity>
      <Divider />
    </View>
  );
}
