import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import About from '../components/Detail/About';
import MenuItems from '../components/Detail/MenuItems';
import Divider from '../components/Divider';
import CartItems from '../components/Detail/CartItems';
const menu = [
  {
      title:'Fried rice with chicken',
      description:'Delicious fried rice with fried chicken ',
      price:'$20.12',
      image:require('../assets/images/fried-rice-chicken.jpg')
  },
  {
      title:' Strawberry Cake',
      description:'Well prepared and delicious cake',
      price:'$10.12',
      image:require('../assets/images/strawberry-cake.jpg')
  },
  {
      title:'Stir Fried Rice Noodles',
      description:'Delicious Stir Fried Rice Noodles',
      price:'$9.12',
      image:require('../assets/images/stir-fry.jpg')
  },
  {
      title:'Fresh Shawarma Sandwich',
      description:'Delicious and Fresh Shawarma Sandwich',
      price:'$6.99',
      image:require('../assets/images/shawarma-sandwish.jpg')
  },
]


const DetailsScreen = ({route}) => {
    const {restaurant} = route.params;

  return (
    <View style={styles.container}>
       <About restaurant={restaurant}/>
       <Divider />
       <ScrollView>
          <MenuItems restaurantName={restaurant.name} foods={menu}/>
       </ScrollView>
       <CartItems restaurantName={restaurant.name}/>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})