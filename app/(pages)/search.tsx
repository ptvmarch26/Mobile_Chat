import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Keyboard,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { XCircle, ArrowLeft } from "lucide-react-native";
import ActiveUserItem from "../../components/ActiveStatusUserItem";
import users from "@/data/Users";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    {
      id: "1",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Nguyễn Văn A",
      isOnline: true,
    },
    {
      id: "2",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Trần Thị B",
      isOnline: false,
    },
    {
      id: "3",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Lê Văn C",
      isOnline: true,
    },
    {
      id: "4",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Phạm Văn D",
      isOnline: false,
    },
  ]);
  const router = useRouter();

  const handleSearch = (query: any) => {
    if (query.trim() !== "") {
      setRecentSearches((prev) => {
        const updatedList = [
          {
            id: Date.now().toString(),
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            name: query,
            isOnline: false,
          },
          ...prev.filter((item) => item.name !== query),
        ];
        return updatedList.slice(0, 8); // Chỉ giữ tối đa 8 kết quả gần nhất
      });
    }
    setSearchQuery(query);
    Keyboard.dismiss();
  };

  return (
    <View className="bg-primary py-4 px-2 h-full">
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={22} color="#e4e6eb" />
        </TouchableOpacity>

        <View className="relative flex-row flex-1 items-center px-3">
          <TextInput
            className="flex-1 text-third bg-secondary rounded-lg px-3 min-h-10"
            placeholder="Tìm kiếm"
            placeholderTextColor="#e4e6eb"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={() => handleSearch(searchQuery)}
            autoFocus
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchQuery("")}
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              <XCircle size={22} color="#e4e6eb" strokeWidth={2} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Text className="text-md text-[#ccc] font-semibold mt-6">
          Tìm kiếm gần đây
        </Text>

        <FlatList
          data={recentSearches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="w-1/4">
              <ActiveUserItem user={item} />
            </View>
          )}
          numColumns={4}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          scrollEnabled={false}
        />

        <Text className="text-md text-[#ccc] font-semibold mt-6">Gợi ý</Text>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex-row items-center px-3 py-4 border-gray-200">
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
                <Text className="text-lg text-white font-bold line-clamp-1">
                  {item.name}
                </Text>
              </View>
            </View>
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
