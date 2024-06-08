import { Image, Text, View } from "react-native";
import Divider from "./divider";
import { Link } from "expo-router";

export default function Card({ path, userName, content, link }) {
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
          {/* se tiver link */}
          {link ? (
            <View className="mt-4 p-2 rounded bg-darkGray ">
              <Link className="text-gray" href={link}>
                {link}
              </Link>
            </View>
          ) : null}
        </View>
      </View>
    </>
  );
}
