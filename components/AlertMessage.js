import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlertMessage = ({msg, color}) => {
  return (
    <View style={styles.containerOuter}>
        <View style={[styles.containerInner, {backgroundColor: color === 'danger' ? 'red' : 'green' }]}>
        <Text style={styles.text}>{msg}</Text>
      </View>
    </View>
    
  )
}

export default AlertMessage

const styles = StyleSheet.create({
  containerOuter:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      padding:10
  },
    containerInner:{
          width:'75%',
        padding:20,
        borderRadius:5
    },
    text:{color:'white'}
})
