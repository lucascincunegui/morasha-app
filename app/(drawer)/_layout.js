import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTitle: "Morasha App!🕊🔥",
          headerStyle: {
            backgroundColor: "#111",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 15,
          },
          headerTitleAlign: "center",
        }}
      >
        <Drawer.Screen
          name="(tab)"
          options={{
            drawerLabel: "Inicio",
            title: "overview",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Configurações",
            title: "overview",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
