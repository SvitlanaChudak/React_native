import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CreatePostsScreen } from './CreatePostsScreen';
import { PostsScreen } from './PostsScreen';


function Posts() {
  return (
    <View style={styles.container}>
      <PostsScreen/>
      </View>
  );
}

function CreatePosts() {
  return (
    <View style={styles.container}>
      <CreatePostsScreen/>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}></View>
  );
}

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Posts") {
                        iconName = "grid-outline"
                    }
                    if (route.name === "CreatePosts") {
                        iconName = "add-outline"
                    }
                    if (route.name === "ProfileScreen") {
                        iconName = "person-outline"
                    }
                    return <Ionicons name={iconName} size={24} color={iconName = focused ? "white" : "#212121"}/>;
                },  
                  "tabBarActiveBackgroundColor": "#FF6C00",
  "tabBarShowLabel": false,
  "tabBarItemStyle": {
    "width": 70,
    "height": 40,
    "borderRadius": 20,
    "marginTop": 9,
    "marginRight": 31,
    "marginLeft": 31,
    "marginBottom": 34
  },
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
            })}
    >
      <Tabs.Screen name="Posts" component={Posts} options={{
          title: "Публікації", headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Ionicons name="exit-outline" size={24} color="#BDBDBD" style={styles.exit} />
            </Pressable>
          ),
        }}/>
        <Tabs.Screen name="CreatePosts" component={CreatePosts} options={{
          title: "Створити публікацію"
        }} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Ionicons name="exit-outline" size={24} color="#BDBDBD" style={styles.exit} />
            </Pressable>
          ),
        }}/>
    </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },
    exit: {
        marginRight: 16,
    },
});