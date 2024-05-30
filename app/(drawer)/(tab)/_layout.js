import React from "react";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { primary } from "../../../components/ui/colors";

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
        name="news/news"
        options={{
          title: "Noticias",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={27} color={color} name="megaphone" />;
            }

            return (
              <Ionicons size={24} color={color} name="megaphone-outline" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="calendar/calendar"
        options={{
          headerTitle: "Calendario de Atividades",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <Ionicons size={28} color={color} name="calendar-number" />
              );
            }

            return (
              <Ionicons
                size={25}
                color={color}
                name="calendar-number-outline"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Inicio",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size + 3} color={color} name="home" />;
            }

            return <Ionicons size={size} color={color} name="home-outline" />;
          },
        }}
      />
      <Tabs.Screen
        name="doacoes/doacoes"
        options={{
          headerTitle: "Informações Bancarias",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons size={33} color={color} name="qrcode" />
              );
            }

            return (
              <MaterialCommunityIcons
                size={24}
                color={color}
                name="qrcode-scan"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile/profile"
        options={{
          headerTitle: "Meu Perfil",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <FontAwesome5 size={26} color={color} name="user-alt" />;
            }

            return <FontAwesome5 size={24} color={color} name="user" />;
          },
        }}
      />
    </Tabs>
  );
}
