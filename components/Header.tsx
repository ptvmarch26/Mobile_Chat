import React from "react";
import { View, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { Search } from "lucide-react-native";

const Header = () => {
  const router = useRouter();

  return (
    <View className="bg-primary py-[10px]">
      <StatusBar className="bg-primary" barStyle="light-content" />
      <TouchableOpacity
        className="flex-row items-center h-[40px] rounded-lg bg-secondary px-[10px] mx-[10px]"
        onPress={() => router.push("/search")}
        activeOpacity={1}
      >
        <Search size={20} color="#e4e6eb" strokeWidth={2} />
        <TextInput
          className="flex-1 text-third"
          placeholder="Tìm kiếm"
          placeholderTextColor="#e4e6eb"
          editable={false}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
