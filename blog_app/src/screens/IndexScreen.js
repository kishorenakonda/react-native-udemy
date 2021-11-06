import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const blogposts = useContext(BlogContext);
  return (
    <View>
      <Text> Index Screen</Text>
      {/* <Text> {value} </Text> */}
      <FlatList
        data={blogposts}
        keyExtractor={(blogposts) => blogposts.title}
        renderItem={({ item }) => {
          return <Text> {item.title} </Text>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
