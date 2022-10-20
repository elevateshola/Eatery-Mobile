import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartItem = ({item}) => {
    const {price, title} = item
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15, 
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    title:{
        fontWeight:'bold',
        fontSize:14
    },
    price:{
        opacity:0.7,
        fontSize:14
    }
})