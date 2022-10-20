import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const Icon = ({name, text}) => {
    const navigation = useNavigation();
  return (
    <Pressable 
        style={styles.container}
        onPress={()=> navigation.navigate(text.toLowerCase())}
        >
      <Ionicons name={name} size={24}/>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default Icon

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    }
}) 