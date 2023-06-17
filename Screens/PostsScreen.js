import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable, Image, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";




export const Posts = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params])
    }
  }, [route.params])

  return (
    <View style={styles.container}>
      <FlatList data={posts} keyExtractor={(item, indx) => indx.toString()} renderItem={({ item }) => {
        <View>
          <Image source={{ uri: item.image }} style={styles.image}/>
          <Text>{route.name}</Text>
          <Pressable onPress={() => navigation.navigate("CommentsScreen")}>
            <Ionicons name="chatbubble-outline" size={24} color="#BDBDBD" style={styles.exit} />
          </Pressable>
          <View>
            <Pressable onPress={() => navigation.navigate("MapScreen")}>
               <Ionicons name="location-outline" size={24} color="#BDBDBD"/>
            </Pressable>
            <Text>{route.location}</Text>
          </View>
        </View>
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 343,
    height: 240,
  },
})