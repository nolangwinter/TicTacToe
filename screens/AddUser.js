import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const AddUser = () => {
    const navigation = useNavigation();
    const [text, setText] = useState("");
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
            <Pressable onPress={() => navigation.goBack()}>
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

const styles = StyleSheet.create({})