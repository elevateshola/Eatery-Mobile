import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const RestaurantItem = ({restaurants}) => {
    const navigation = useNavigation();

  return (
    <ScrollView>
        {
             restaurants.map((restaurant)=> (
                <TouchableOpacity style={styles.restaurantItem} key={restaurant.id} onPress={()=> navigation.navigate('details', {
                    restaurant:restaurant
                })}>
                    <RestaurantImage image={restaurant.image_url}/>
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
                </TouchableOpacity>
            ))
        }
    </ScrollView>
  )
}

const RestaurantImage = ({image})=> {
    return (
        <>
            <Image source={{uri:image}} resizeMode='cover' style={styles.restaurantImage}/>
           <TouchableOpacity style={styles.IconWrapper}>
                <Ionicons  name='heart' size={18} color='green'/>
           </TouchableOpacity>
        </>
    )
}

const RestaurantInfo = ({name, rating})=> {
    return (
        <View style={styles.restaurantInfo}>
            <Text style={{fontSize:15, fontWeight:'bold'}}>{name}</Text>
            <View style={styles.rating}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>{rating}</Text>
            </View>
           
        </View>
    )
}

export default RestaurantItem

const styles = StyleSheet.create({
    restaurantItem:{
        paddingHorizontal:15,
        paddingVertical:5,
        marginVertical:15
    },
    rating:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 30, 
        padding:1,
        minWidth:40, 
        height:20, 
        backgroundColor:'white'},

    // restaurantImageContainer:{flex:1, position:'relative'},
    IconWrapper:{position:'absolute', top:20,right:20},
    restaurantImage:{width:'100%', height:180},
    restaurantInfo:{flexDirection:'row', padding:5, justifyContent:'space-between', alignItems:'center'}
    
})