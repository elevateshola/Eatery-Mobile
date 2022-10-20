import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {StrictMode} from 'react'
import Home from './screens/Home'
import Categories from './screens/Categories'
import Order from './screens/Order'
import Delivery from './screens/Delivery'
import Search from './screens/Search'
import Account from './screens/Account'
import {Ionicons} from '@expo/vector-icons'
import Details from './screens/DetailsScreen';
import OrderCompleted from './screens/OrderCompleted';



//initiate 
const SideNav = () => {
   const Drawer =  createDrawerNavigator()
  return (
      <Drawer.Navigator screenOptions={{
        drawerStyle:{backgroundColor:'#d3d3d3'},
        drawerActiveTintColor:'white',
        drawerActiveBackgroundColor:'black'
      }}>
         <Drawer.Screen name='default' component={Home} options={
          {
            title:'Home',
            drawerIcon:({color,size})=> (<View><Ionicons name='home' size={size} color={color}/></View>
            )
          }}/>
         <Drawer.Screen name='account' component={Account} options={
          {
            title:'Account',
            drawerIcon:({color,size})=> (<View><Ionicons name='book' size={size} color={color}/></View>
            )
          }}/>
         <Drawer.Screen name='delivery' component={Delivery} options={
          {title:'Your Delivery',
          drawerIcon:({color,size})=> (<View><Ionicons name='basket' size={size} color={color}/></View>
          )
          }}/>
         <Drawer.Screen name='order' component={Order} options={
          {
            title:'All Orders',
            drawerIcon:({color,size})=> (<View><Ionicons name='cart' size={size} color={color}/></View>
            )
          }
          }/>
      </Drawer.Navigator>
  )
}

const Navigation = () => {
    const Stack = createNativeStackNavigator()
    const screenOptions = {
      headerTintColor:'white',
      headerStyle:{backgroundColor:'green'},
      contentStyle:{backgroundColor:'#eee'}
    }
  return (
    //provide store to app
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Stack.Screen name='home' component={SideNav} options={{
                headerShown:false
            }}/>
          <Stack.Screen name='categories' component={Categories} options={{title:'Our categories'}}/>
          <Stack.Screen name='delivery' component={Delivery} options={{
            title:'Your Deliveries',
            }}/>
          <Stack.Screen name='order' component={Order}/>
          <Stack.Screen name='ordercomplete' component={OrderCompleted} options={{headerShown:false}}/>
          <Stack.Screen name='details' component={Details}/>
          <Stack.Screen name='account' component={Account} />
          <Stack.Screen name='search' component={Search}/>
        </Stack.Navigator>
      </NavigationContainer>

  )
}

export default Navigation

const styles = StyleSheet.create({})