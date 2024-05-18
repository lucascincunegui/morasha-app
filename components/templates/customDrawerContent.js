import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Divider from "./divider.tsx";

export default function CustomDrawerContent(props) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-bg_gray ">
      <DrawerContentScrollView
        contentContainerStyle={{ paddingTop: top }}
        {...props}
      >
        <Image
          className="w-72 h-40 self-center bg-black"
          source={require("../../assets/splash.png")}
        />
        <View className="pt-3">
          <DrawerItemList {...props} />
          <DrawerItem label={"Sair"} onPress={() => router.replace("/")} />
        </View>
      </DrawerContentScrollView>
      <Divider />
      <View
        style={{
          padding: 20,
          paddingBottom: bottom + 20,
        }}
      >
        <Text>asdef@.com.br</Text>
      </View>
    </View>
  );
}
