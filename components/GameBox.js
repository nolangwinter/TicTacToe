import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../AppContext';

const GameBox = ({item, id}) => {
    const [isPressed, setIsPressed] = useState(false)
    const [currentState, setCurrentState] = useState("");
    const context = useContext(AppContext);
    

    const handlePress = () => {
        if (item === "Player 1") {
            setCurrentState("X");
            context.setCurrentPlayer("Player 2");
        } else {
            setCurrentState("O");
            context.setCurrentPlayer("Player 1");
        }
        setIsPressed(true);
    }

    useEffect(() => {
        console.log("current State", currentState)
        boardMove();
        console.log(context.board);
    }, [currentState])

    const boardMove = () => {
        newBoard = context.board.map((index) => {
            console.log("index",index);
            console.log("id", id)
            if (index === id) {
                console.log("test")
                return currentState
            }
            return index;
        })
        context.setBoard(newBoard);
    }

  return (
    <Pressable onPress={() => !isPressed ? handlePress() : null } style={{ borderWidth:3, flex:.5, height:150}}>
        <View >
            <Text style={{ fontSize:100, textAlign:"center"}}>{currentState}</Text>
            <Text>{id}</Text>
        </View>
    </Pressable>
  )
}

export default GameBox

const styles = StyleSheet.create({})