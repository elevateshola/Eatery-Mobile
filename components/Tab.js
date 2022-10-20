import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'

const Tab = () => {
  return (
    <View style={styles.container}>
      <Icon name='home' text='Default'/>
      <Icon name='search' text='Search'/>
      <Icon name='cart' text='Delivery'/>
      <Icon name='basket' text='Order'/>
      <Icon name='person-circle' text='Account'/>
    </View>
  )
}

export default Tab

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
}) 