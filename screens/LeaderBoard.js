import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LeaderBoard = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <Pressable onPress={() => navigation.navigate("Home")} style={{ backgroundColor:"green", alignItems:"center", justifyContent:"center", height:50}}>
            <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                Go Back
            </Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default LeaderBoard

const styles = StyleSheet.create({})