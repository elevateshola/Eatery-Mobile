import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const Header = ({activeTab, setActiveTab}) => {
    
  return (
    <View style={styles.container}>
       <HeaderTab 
        text='Delivery' 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
       <HeaderTab 
       text='Pickup'
       activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
    </View>
  )
}

const HeaderTab = ({text, setActiveTab, activeTab})=> {
    return (
        <TouchableOpacity style={[styles.headerTab, {backgroundColor:activeTab === text ? 'black' : 'white'}]} onPress={()=> setActiveTab(text)}>
            <Text style={[styles.text, {color:activeTab === text ? 'white' : 'black'}]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Header
 
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'white'
    },
    headerTab:{
        marginRight:15,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:40
    },
    text:{
        fontSize:16,
        fontWeight:'bold'
    }
})