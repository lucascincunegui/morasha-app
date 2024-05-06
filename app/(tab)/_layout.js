import React from "react";
import {
  FontAwesome,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Button } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f8aa06",
        tabBarInactiveTintColor: "gray",
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
          tabBarShowLabel: false,
          title: "Noticias",
          tabBarIcon: ({ color }) => (
            <Entypo name="megaphone" size={23} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarShowLabel: false,
          title: "Calendario de Atividades",
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={23} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="doacoes"
        options={{
          tabBarShowLabel: false,
          title: "Informações bancarias",
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
          headerRight: ({ color }) => (
            <Ionicons
              onPress={openModal}
              name="settings-outline"
              size={24}
              color={color}
            />
          ),
          tabBarShowLabel: false,
          headerTitle: "Username",
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="user-circle-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
