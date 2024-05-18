import React from "react";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { primary, primaryShade } from "../../../components/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#f1f1f1",
          borderBottomColor: "#a7abaf",
          borderBottomWidth: 1,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: primary,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          backgroundColor: "#f6f6f6",
          height: 50,
        },
      }}
    >
      <Tabs.Screen
        name="news"
        options={{
          title: "Noticias",
          tabBarIcon: ({ color }) => (
            <Entypo name="megaphone" size={23} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          headerTitle: "Calendario de Atividades",
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={23} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="doacoes"
        options={{
          headerTitle: "Informações Bancarias",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={23}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Meu Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="user-circle-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
