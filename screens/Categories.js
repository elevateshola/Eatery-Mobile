import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from '../components/Tab'
// import { useNavigation, useRoute} from '@react-navigation/native'

const Categories = ({route}) => {
    const {image, title} = route.params
  return (
    <View>
      <ImageBackground source={image} resizeMode='cover' style={styles.bg}>
          <View style={styles.categoryBanner}>
            <Text style={styles.text}>{title}</Text>
          </View>
          <View style={styles.backdrop}></View>
      </ImageBackground>

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    bg:{
       position:'relative'
    },
    backdrop:{
        height:100,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0.0.0,0.7)',
        zIndex:2
    },
    categoryBanner:{
       width:'100%',
       height:100,
       alignItems:'center',
       justifyContent:'center'
    },
    text:{
       fontSize:30,
       fontWeight:'900',
       color:'white',
       zIndex:4
    }
})