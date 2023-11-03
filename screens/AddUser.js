import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, {useContext, useState} from 'react'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import AppContext from '../AppContext'

const AddUser = () => {
    const navigation = useNavigation();
    const context = useContext(AppContext);
    const [text, setText] = useState("");

    const handleAddedUser = () => {
        context.addPlayer(text);
        context.currentPlayer === "Player 1" ? context.setPlayer1(text) : context.setPlayer2(text);
        navigation.goBack();
    }

  return (
    <SafeAreaView>
        <TextInput
            label="Name"
            placeholder='Enter Name'
            onChangeText={setText}
            value={text}

        />
        <View>
            {/* This button will add the player to the list */}
            <Pressable onPress={() => handleAddedUser()}>
                <Text>Add Player</Text>
            </Pressable>
            <Pressable onPress={() => navigation.goBack()}>
                <Text>Go Back</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default AddUser

const styles = StyleSheet.create({
})