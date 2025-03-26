import React, { useState, useRef } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Users, UsersRound } from "lucide-react-native";
import friends from "@/data/Friends";

const Phonebook = () => {
  const [filterType, setFilterType] = useState<"friends" | "groups">("friends");
  const flatListRef = useRef<FlatList>(null);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const handlePress = (letter: string) => {
    setActiveLetter(letter);
    scrollToSection(letter);
  };

  // Nhóm bạn bè theo chữ cái đầu tiên
  const groupedFriends = friends
    .sort((a, b) => a.name.localeCompare(b.name))
    .reduce((acc, friend) => {
      const firstLetter = /^[A-Z]/i.test(friend.name[0])
        ? friend.name[0].toUpperCase()
        : "#";
      if (!acc[firstLetter]) acc[firstLetter] = [];
      acc[firstLetter].push(friend);
      return acc;
    }, {} as Record<string, typeof friends>);

  const sectionHeaders = Object.keys(groupedFriends).sort((a, b) => {
    if (a === "#") return 1;
    if (b === "#") return -1;
    return a.localeCompare(b);
  });

  // Cuộn đến nhóm chữ cái được chọn
  const scrollToSection = (letter: string) => {
    const index = sectionHeaders.indexOf(letter);
    if (index !== -1) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }
  };

  return (
    <View className="flex-1 bg-primary p-4">
      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-1 flex-row justify-evenly">
          <TouchableOpacity
            className={`flex-row items-center px-4 py-2 rounded-lg ${
              filterType === "friends" ? "bg-blue-600" : "bg-secondary"
            }`}
            onPress={() => setFilterType("friends")}
          >
            <Users size={20} color="white" />
            <Text className="text-white ml-2">Bạn bè</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-row items-center px-4 py-2 rounded-lg ${
              filterType === "groups" ? "bg-blue-600" : "bg-secondary"
            }`}
            onPress={() => setFilterType("groups")}
          >
            <UsersRound size={20} color="white" />
            <Text className="text-white ml-2">Nhóm</Text>
          </TouchableOpacity>
        </View>
      </View>

      {filterType === "friends" && (
        <View className="flex-1 flex-row">
          <FlatList
            ref={flatListRef}
            data={Object.entries(groupedFriends)}
            keyExtractor={([letter]) => letter}
            renderItem={({ item: [letter, friends] }) => (
              <View>
                <Text className="text-lg font-bold text-gray-300 my-2">
                  {letter}
                </Text>

                {friends.map((friend: any) => (
                  <View
                    key={friend.id}
                    className="flex-row items-center px-3 py-4 border-gray-200"
                  >
                    <View className="relative">
                      <Image
                        source={{ uri: friend.avatar }}
                        className="w-14 h-14 rounded-full mr-3"
                      />
                      {friend.isOnline && (
                        <View className="absolute bottom-0 right-3 w-3 h-3 bg-green-500 rounded-full border border-white" />
                      )}
                    </View>
                    <View className="flex-1">
                      <Text className="text-lg text-white font-bold line-clamp-1">
                        {friend.name}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />

          {/* Lọc chữ cái */}
          <View className="absolute right-0 top-20">
            {sectionHeaders.map((letter) => (
              <TouchableOpacity
                key={letter}
                onPress={() => handlePress(letter)}
              >
                <Text
                  className={`text-xs font-bold my-1 transition-all duration-200 ${
                    activeLetter === letter
                      ? "text-lg text-white scale-150"
                      : "text-white opacity-80"
                  }`}
                >
                  {letter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default Phonebook;
