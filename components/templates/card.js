import { Image, Text, View } from "react-native";
import Divider from "./divider";

export default function Card({ path, userName, content }) {
  return (
    <>
      <Divider />
      <View className=" border-gray-300 p-5">
        <View className="flex-row mt-1 mb-4 items-center">
          <Image
            source={path ? path : require("../../assets/user.png")}
            className="w-10 h-10 mr-4 rounded-full"
          />
          <Text>{userName}</Text>
        </View>
        <View>
          <Text>{content}</Text>
        </View>
      </View>
    </>
  );
}
