import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation, useRoute} from '@react-navigation/native'
const categoryList = [
    {
        image:require('../../assets/images/shopping-bag.png'),
        title:'Pick-ups'
    },
    {
        image:require('../../assets/images/bread.png'),
        title:'pasteries'
    },
    {
        image:require('../../assets/images/coffee.png'),
        title:'coffee'
    },
    {
        image:require('../../assets/images/fast-food.png'),
        title:'fast-food'
    },
    {
        image:require('../../assets/images/soft-drink.png'),
        title:'soft-drink'
    },
    {
        image:require('../../assets/images/desserts.png'),
        title:'desserts'
    },
    {
        image:require('../../assets/images/deals.png'),
        title:'discount'
    },
    
]

const Categories = () => {
 const navigation = useNavigation();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categoryList.map((category, i)=> (
        <TouchableOpacity 
            key={i} style={styles.Item} 
            onPress={
                ()=> navigation.navigate(
                    'categories', {image:category.image,title:category.title}
                    )}>
            <Image source={category.image} style={{width:50, height:40}} />
            <Text style={styles.text}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        padding:10,
        marginLeft:20,
    },
    Item:{
        marginRight:30,
        alignItems:'center'
    },
    text:{
        fontWeight:'900',
        marginTop:5
    }
})