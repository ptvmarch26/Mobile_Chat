import React from "react";
import { View, Text, Image } from "react-native";

interface ActiveStatusUserProps {
  user: {
    id: string;
    avatar: string;
    name: string;
    isOnline: boolean;
  };
}

const ActiveUserItem = ({ user }: ActiveStatusUserProps) => {
  return (
    <View className="items-center mt-3 mr-5">
      <View className="relative">
        <Image
          source={{ uri: user.avatar }}
          className="w-[68px] h-[68px] rounded-full"
        />
        {user.isOnline && (
          <View className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
        )}
      </View>
      <Text className="text-sm text-white font-medium text-center mt-1 w-16 h-5 leading-5 overflow-hidden">
        {user.name}
      </Text>
    </View>
  );
};

export default ActiveUserItem;
