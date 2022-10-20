import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
// import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import MenuItems from '../components/Detail/MenuItems'
// import firebaseApp from '../firebase'
import { useNavigation } from '@react-navigation/native'
// import {getFirestore, collection, getDocs} from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler'

const OrderCompleted = ({route}) => {
    const navigation = useNavigation()
    const {items, cartTotal,restaurantName} = route.params
   

  return (
    <SafeAreaView style={styles.container}>
        <LottieView 
            styles={styles.checkMark} 
            source={require('../assets/animations/check-mark-success-animation.json')}
            autoPlay
            speed={0.5}
            loop={true}
            />
       
        
        

      <Text style={styles.text}>Your order at {restaurantName} has been placed for {cartTotal}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} style={{maxHeight:600}}>
      {items && <MenuItems  foods={items} cartTotal={cartTotal} hideCheckBox={true}/>}
      </ScrollView>
    
     <LottieView 
            styles={styles.checkMark} 
            source={require('../assets/animations/prepare-food.json')}
            autoPlay
            speed={0.5}
            loop={true}
            />
     

     <TouchableOpacity style={styles.done} onPress={() => navigation.navigate('home')}>
        <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>Continue shopping ...</Text>
     </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default OrderCompleted

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    checkMark:{
        // height:100,
        marginBottom:30,
        alignSelf:'center'
    },
    done:{
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        backgroundColor:'green',
        marginBottom:30
    },
    text:{fontWeight:'bold', fontSize:20, textAlign:'center', marginVertical:30}
})