import { Text, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
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
      <TouchableOpacity className={button}>
        <Ionicons
          name="notifications-outline"
          size={20}
          style={{ marginRight: 20 }}
          color="black"
        />
        <Text className="text-base">Notificações</Text>
      </TouchableOpacity>
      <TouchableOpacity className={button}>
        <Feather
          name="lock"
          style={{ marginRight: 20 }}
          size={20}
          color="black"
        />
        <Text className="text-base">Privacidade e segurança</Text>
      </TouchableOpacity>
      <TouchableOpacity className={button}>
        <MaterialIcons
          name="favorite-border"
          size={20}
          style={{ marginRight: 20 }}
          color="black"
        />
        <Text className="text-base">Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity className={button}>
        <Text className="text-base">Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
