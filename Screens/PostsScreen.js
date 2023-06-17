import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';


export const PostsScreen = () => {

    return (
    <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.userDataBox}>
                <View style={styles.avatarBox}></View>
                <View>
                <Text>User name</Text>
                <Text>User email</Text>
                </View>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        width: 375,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
  avatarBox: {
    width: 60,
    height: 60,
      backgroundColor: '#F6F6F6',
      borderRadius: 16,
    },
    userDataBox: {
        marginLeft: 16,
        marginTop: 32,
        flexDirection: "row",
  },
});