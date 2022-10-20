import { StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tab from '../components/Tab'
import Header from '../components/Home/Header'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import { getRestaurantsAction } from '../redux/actions/ResturantAction'
import RestaurantItem from '../components/Home/RestaurantItem'
import { clearErrors } from '../redux/actions/ResturantAction'
import AlertMessage from '../components/AlertMessage'
import Divider from '../components/Divider'

const Home = ({navigate, route}) => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('San Francisco')
  const [activeTab, setActiveTab] = useState('Delivery')
  //connect to the store
  const restaurantData = useSelector((state)=> state.restaurantData)

  const {loading, success, error, restaurants} = restaurantData


  // console.log(loading)
  useEffect(()=> {
      dispatch(getRestaurantsAction(city, activeTab))
  }, [dispatch, activeTab])

  useEffect(()=> {
    if(error){
      setTimeout(()=> {
          dispatch(clearErrors())
      }, 5000)
  }
  },[error])
 
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
          <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
          <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        {error && (<AlertMessage msg={error} color='danger'/>)}
        {loading ? (
        <ActivityIndicator animating={loading} size={40} color='green'/>
        ) : restaurants ? (<RestaurantItem restaurants={restaurants}/>) : null}
      </ScrollView> 
      
      <Divider />
      <Tab />
    </View>
  )
}


export default Home

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  headerSection:{
      padding:20,
      backgroundColor:'white'
  }
})