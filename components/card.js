import { Image, Text, View } from "react-native";

export default function Card({ path, userName, content }) {
  return (
    <View className="border border-gray-300 m-3 p-3">
      <View className="flex-row mt-1 mb-4 items-center">
        <Image
          source={path ? path : require("../assets/user.png")}
          className="w-14 h-14 mr-4 rounded-full"
        />
        <Text>{userName}</Text>
      </View>
      <View>
        <Text>{content}</Text>
      </View>
    </View>
  );
}
