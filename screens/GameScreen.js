import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AppContext from '../AppContext';
import GameBox from '../components/GameBox';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const GameScreen = () => {
    const navigation = useNavigation();
    const context = useContext(AppContext);

    useEffect(() => {
      context.setCurrentPlayer("Player 1");
      context.setBoard([0,1,2,3,4,5,6,7,8])
    }, [])

    const currentPlayerName = () => {
      return context.currentPlayer === "Player 1" ? context.player1 : context.player2
    }

    console.log(context.board)

  return (
    <SafeAreaView>
      <View style={{ padding:10, flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={styles.playerTurn}>{currentPlayerName()}'s turn</Text>
        <Button icon="undo" mode="contained" >
          Undo
        </Button>
      </View>

      <View>
        <View style={{flexDirection: "row", justifyContent:"space-between", marginHorizontal:10, borderWidth:2}}>
          <GameBox item={context.currentPlayer} id={0}/>
          <GameBox item={context.currentPlayer} id={1}/>
          <GameBox item={context.currentPlayer} id={2}/>
        </View>

        <View style={{flexDirection: "row", justifyContent:"space-between", marginHorizontal:10}}>
          <GameBox item={context.currentPlayer} id={3}/>
          <GameBox item={context.currentPlayer} id={4}/>
          <GameBox item={context.currentPlayer} id={5}/>
        </View>

        <View style={{flexDirection: "row", justifyContent:"space-between", marginHorizontal:10}}>
          <GameBox item={context.currentPlayer} id={6}/>
          <GameBox item={context.currentPlayer} id={7}/>
          <GameBox item={context.currentPlayer} id={8}/>
        </View>
      </View>

      <View style={{ marginTop:100, }} >
        <Button icon="undo" mode="contained" onPress={() => navigation.goBack()} >
          Go Back
        </Button>

        <Button icon="emoticon-frown-outline" mode="contained" onPress={() => navigation.goBack()} >
          Resign
        </Button>

        <Button icon="autorenew" mode="contained" onPress={() => navigation.goBack()} >
          New Game
        </Button>
      </View>


    </SafeAreaView>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  playerTurn: {
    fontSize: 25,
    fontWeight:"500",
  }
})