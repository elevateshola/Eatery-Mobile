import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Divider from '../Divider'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useSelector, useDispatch } from 'react-redux'
import {selectedCartItemsAction} from '../../redux/actions/ResturantAction'


const MenuItems = ({restaurantName, foods, hideCheckBox}) => {
    const cartItems = useSelector((state)=> state.cartItems.selectedItems.items)
    const dispatch = useDispatch();
//   console.log('cartItems',cartItems)

    const isIncart = (menuItem, cartItems) =>{
            return Boolean(cartItems.find((item) => item.title === menuItem.title && item.restaurantName === restaurantName))
    }
  return ( 
    <>
    <ScrollView style={styles.container}>
        {foods.map((menuItem, i)=> (
            <View key={i}>
               <View style={styles.innerContainer}>
                    {!hideCheckBox && <BouncyCheckbox 
                        size={20} 
                        fillColor="green"
                        innerIconStyle={{ borderWidth: 4 }}
                        isChecked={isIncart(menuItem, cartItems)}
                        onPress={(isCheckboxChecked)=> dispatch(selectedCartItemsAction(isCheckboxChecked, menuItem, restaurantName))}
                        iconStyle={{
                            borderColor:'red',
                            borderRadius:0,
                           padding:0
                        }}/>}
                    <RestaurantInfo menuItem={menuItem}/>
                    <RestaurantImage menuItem={menuItem}/>
               </View>
               <Divider />
            </View>
        ))}
    </ScrollView>
    </>
  )
}
export default MenuItems

const RestaurantInfo = ({menuItem}) =>{
    return (
        <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantMenuTitle}>{menuItem.title}</Text>
            <Text style={styles.restaurantMenuDescription}>{menuItem.description}</Text>
            <Text style={styles.restaurantMenuPrice}>{menuItem.price}</Text>
        </View>
    )
}

const RestaurantImage = ({menuItem}) =>{
    return (
        <View style={styles.restaurantImage}>
            <Image source={menuItem.image} style={{width:80,height:80, resizeMode:'contain', borderRadius:10}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       
    },
    innerContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:6
    },
    restaurantInfo:{
        width:240,
        
    },
    restaurantMenuTitle:{
        fontSize:16,
        fontWeight:'bold',
    },
    restaurantMenuPrice:{
        color:'green'
    },
    restaurantImage:{
        padding:10,
    }
})