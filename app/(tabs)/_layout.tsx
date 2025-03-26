import { Tabs } from "expo-router";
import { useEffect } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { View } from "react-native";
import { MessageCircleMore, BookUser, Bot, User } from "lucide-react-native";
import Header from "@/components/Header";

const TabIcon = ({ IconComponent, color, size, focused }: any) => {
  const scale = useSharedValue(focused ? 1.1 : 1);

  useEffect(() => {
    scale.value = withTiming(focused ? 1.1 : 1, { duration: 200 });
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale: scale }] }}>
      <IconComponent color={color} size={size} strokeWidth={2} />
    </Animated.View>
  );
};

const _layout = () => {
  return (
    <View className="flex-1">
      <Header />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
            height: 65,
          },
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarActiveTintColor: "#0573ff",
          tabBarInactiveTintColor: "#A1A1AA",
          tabBarLabelStyle: {
            marginTop: 5,
            fontSize: 11,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Tin nhắn",
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                IconComponent={MessageCircleMore}
                color={color}
                size={size}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="phonebook"
          options={{
            title: "Danh bạ",
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                IconComponent={BookUser}
                color={color}
                size={size}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chatbot"
          options={{
            title: "Chatbot",
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                IconComponent={Bot}
                color={color}
                size={size}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Cá nhân",
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                IconComponent={User}
                color={color}
                size={size}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default _layout;
