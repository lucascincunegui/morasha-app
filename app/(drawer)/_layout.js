import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { AntDesign } from "@expo/vector-icons";
import { primary } from "../../components/colors";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Divider from "../../components/divider";

function CustomDrawerContent(props) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-bg_gray ">
      <DrawerContentScrollView
        contentContainerStyle={{ paddingTop: top }}
        {...props}
      >
        <Image
          style={{
            width: 300,
            height: 250,
            alignSelf: "center",
            backgroundColor: "black",
          }}
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

export default function Layout() {
  const { top } = useSafeAreaInsets();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          //Drawer
          drawerActiveTintColor: primary,
          drawerActiveBackgroundColor: "transparent",
          //Header
          headerShadowVisible: false,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#111",
          },
          headerTitle: () => {
            return (
              <Image
                style={{
                  width: 30,
                  height: 40,
                  alignSelf: "center",
                }}
                source={require("../../assets/logoMorasha.png")}
              />
            );
          },
          headerBackgroundContainerStyle: { paddingTop: top },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen
          name="(tab)"
          options={{
            drawerLabel: "Inicio",
            drawerIcon: ({ size, color }) => (
              <AntDesign size={size} color={color} name="home" />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Configurações",
            headerTitle: "Configurações",
            drawerIcon: ({ size, color }) => (
              <AntDesign size={size} color={color} name="setting" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
