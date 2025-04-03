import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/icons/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useTheme } from "@/hooks/useTheme";
import Header from "@/components/ui/header/Header";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {},
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: () => <Header car="Sandero Rs" />,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          header: () => <Header car="Sandero Rs" />,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="calendar" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: "Collections",
          header: () => <Header car="Sandero Rs" />,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="folder" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="car"
        options={{
          title: "My Car",
          header: () => <Header car="Sandero Rs" />,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="car" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
