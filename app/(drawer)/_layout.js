import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { primary } from "../../components/ui/colors";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomDrawerContent from "../../components/templates/customDrawerContent";

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
            drawerIcon: ({ focused, size, color }) => {
              if (focused) {
                return <Ionicons size={size} color={color} name="home" />;
              }

              return <Ionicons size={size} color={color} name="home-outline" />;
            },
          }}
        />
        <Drawer.Screen
          name="settings/settings"
          options={{
            drawerLabel: "Configurações",
            headerTitle: "Configurações",
            drawerIcon: ({ focused, size, color }) => {
              if (focused) {
                return <Ionicons size={size} color={color} name="settings" />;
              }

              return (
                <Ionicons size={size} color={color} name="settings-outline" />
              );
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
