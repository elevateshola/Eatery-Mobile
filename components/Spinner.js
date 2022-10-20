import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Spinner = () => {
  return (
    <View style={styles.container}>
        <LottieView 
            styles={styles.checkMark} 
            source={require('../assets/animations/loading-animation.json')}
            autoPlay
            speed={3}
            loop={true}
            />
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
        zIndex:5000
    },
    checkMark:{
        height:100,
        marginBottom:50,
        alignSelf:'center'
    }
})