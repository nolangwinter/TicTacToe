import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AboutScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <View>
            <Text style={{ fontSize:23, fontWeight:"bold", marginTop:30 }}>Beautifully Crafted By: Nolan Winter</Text>
        </View>
        <View style={{marginTop: 100}}/>
        <Pressable onPress={() => navigation.navigate("Home")} style={{ backgroundColor:"green", alignItems:"center", justifyContent:"center", height:50}}>
            <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                Go Back
            </Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default AboutScreen

const styles = StyleSheet.create({})