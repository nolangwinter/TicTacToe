import { StyleSheet, Text, SafeAreaView, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    
  return (
    <SafeAreaView>
      <View style={{alignItems:"center", marginTop:20}}>
        <Text style={styles.title}>Tic Tac Toe</Text>
      </View>
      <View style={{marginTop: 70}}>
        <Pressable onPress={() => navigation.navigate("About")} style={styles.buttons}>
            <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                About
            </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Leader")} style={styles.buttons}>
            <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                LeaderBoard
            </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Settings")} style={styles.buttons}>
            <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                Settings
            </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("User")} style={styles.buttons}>
            <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                Play Game
            </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    buttons: {
      backgroundColor:"green",
      alignItems:"center",
      justifyContent:"center",
      height:50,
      marginVertical: 40
    }
})
