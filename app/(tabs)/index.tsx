import React from "react";
import { View, FlatList, Text } from "react-native";
import MessageItem from "../../components/MessageItem";
import ActiveUserItem from "../../components/ActiveStatusUserItem";
import users from "../../data/Users";

const Index = () => {
  return (
    <View className="flex-1 bg-primary">
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem item={item} />}
        ListHeaderComponent={() => (
          <FlatList
            data={users.filter((user) => user.isOnline)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ActiveUserItem user={item} />}
            className="mb-4"
          />
        )}
      />
    </View>
  );
};

export default Index;
