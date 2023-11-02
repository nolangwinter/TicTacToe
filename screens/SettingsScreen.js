import { SafeAreaView, StyleSheet, Text, View, Pressable, Switch } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SettingsScreen() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
    }

  return (
    <SafeAreaView>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20}}>
            <Text style={{ fontSize:20, fontWeight:"500", }}>Sound</Text>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
        <View>
            <Text>X's Color</Text>
            
        </View>
        <Pressable onPress={() => navigation.navigate("Home")} style={{ backgroundColor:"green", alignItems:"center", justifyContent:"center", height:50, marginTop:50}}>
            <Text style={{fontSize:20, fontWeight: "bold", color:"white" }}>
                Go Back
            </Text>
        </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})