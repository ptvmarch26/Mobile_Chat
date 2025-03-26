import React from "react";
import { View, Text, Image } from "react-native";

interface MessageItemProps {
  item: {
    id: string;
    avatar: string;
    name: string;
    lastMessage: string;
    lastMessageTime: string;
    isOnline: boolean;
  };
}

const MessageItem = ({ item }: MessageItemProps) => {
  return (
    <View className="flex-row items-center px-3 py-4 border-gray-200 relative">
      <View className="relative">
        <Image
          source={{ uri: item.avatar }}
          className="w-14 h-14 rounded-full mr-3"
        />
        {item.isOnline && (
          <View className="absolute bottom-0 right-3 w-3 h-3 bg-green-500 rounded-full border border-white" />
        )}
      </View>
      <View className="flex-1">
        <Text className="text-xl text-white font-bold line-clamp-1">
          {item.name}
        </Text>
        <Text className="text-white line-clamp-1 font-semibold">
          {item.lastMessage}
        </Text>
      </View>
      <Text className="text-gray-400 text-sm">{item.lastMessageTime}</Text>
    </View>
  );
};

export default MessageItem;
