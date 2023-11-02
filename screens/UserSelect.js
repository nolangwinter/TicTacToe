import { StyleSheet, Text, View, Pressable, SafeAreaView
 } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';


const UserSelect = () => {
    const navigation = useNavigation();
    const [currentPlayer, setCurrentPlayer] = useState("Player 1")
    const [players, setPlayers] = useState([]);
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [text, setText] = useState("");

    const addPlayer = (newPlayer) => {
        setPlayers([...players, { id: Date.now(), name: newPlayer, wins: 0, loses: 0, ties: 0 }]);

        console.log(players);

      };

    const nextPlayButton = () => {
        currentPlayer === "Player 1" ? setCurrentPlayer("Player 2") : navigation.navigate("Game")
    }

    useEffect(() => {
        setCurrentPlayer("Player 1")
    }, [])

  return (
    <SafeAreaView>
        <View style={{ marginTop:10, flexDirection:"row", justifyContent:"space-between", marginHorizontal:10}}>
            <Text style={styles.title}>{currentPlayer}</Text>
            <Button icon="plus" mode="contained" onPress={() => navigation.navigate("Add")}>
                Add Player
            </Button>
        </View>
        <View style={{marginTop:150}}> 
            <Pressable onPress={() => currentPlayer === "Player 1" ? setCurrentPlayer("Player 2") : navigation.navigate("Game")} style={{ backgroundColor:"green", alignItems:"center", justifyContent:"center", height:50}}>
                <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                    {currentPlayer === "Player 1" ? "Next Player" : "Play"}
                </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Home")} style={{ backgroundColor:"green", alignItems:"center", justifyContent:"center", height:50}}>
                <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                    Go Back
                </Text>
            </Pressable>
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