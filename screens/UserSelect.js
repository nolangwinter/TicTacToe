import { StyleSheet, Text, View, Pressable, SafeAreaView
 } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import AppContext from '../AppContext';


const UserSelect = () => {
    const navigation = useNavigation();
    const context = useContext(AppContext);
    const [text, setText] = useState("");

    useEffect(() => {
        context.setCurrentPlayer("Player 1")
    }, [])

  return (
    <SafeAreaView>
        <View style={{ marginTop:10, flexDirection:"row", justifyContent:"space-between", marginHorizontal:10}}>
            <Text style={styles.title}>{context.currentPlayer}</Text>
            <Button icon="plus" mode="contained" onPress={() => navigation.navigate("Add")}>
                Add Player
            </Button>
        </View>
        <View style={{marginTop:150}}> 
            <Pressable onPress={() => context.currentPlayer === "Player 1" ? context.setCurrentPlayer("Player 2") : navigation.navigate("Game")} style={{ backgroundColor:"green", alignItems:"center", justifyContent:"center", height:50}}>
                <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                    {context.currentPlayer === "Player 1" ? "Next Player" : "Play"}
                </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Home")} style={{ backgroundColor:"green", alignItems:"center", justifyContent:"center", height:50}}>
                <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                    Go Back
                </Text>
            </Pressable>
        </View>
        <View>
            <Text>Player 1 {context.player1}</Text>
            <Text>Player 2 {context.player2}</Text>
        </View>
    </SafeAreaView>
  )
}

export default UserSelect

const styles = StyleSheet.create({
    title: {
        fontSize:25,
        fontWeight:"500",
        textAlign:"center"
    }
})