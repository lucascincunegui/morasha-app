import { Image, Text, View } from "react-native";
import Divider from "../../../components/divider";

export default function Profile() {
  return (
    <View className="flex-1 flex-col">
      <View className="flex-row  h-1/4 justify-around items-center">
        <View className="w-1/4 h-full flex-row  items-center justify-center">
          <Image
            source={require("../../../assets/curriculumOn.jpg")}
            className="w-20 h-20 rounded-full"
          />
        </View>
        <View className="w-9/12 h-full px-7 py-10 flex-col">
          <Text className="mb-4">Username</Text>
          <Text>Hello world!</Text>
        </View>
      </View>
      <Divider />
    </View>
  );
}
