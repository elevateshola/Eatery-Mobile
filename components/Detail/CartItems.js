import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import CartItem from './CartItem'
import { ScrollView } from 'react-native-gesture-handler'
import {getFirestore, collection, addDoc, serverTimestamp} from "firebase/firestore";
import firebaseApp from '../../firebase'
import { useNavigation } from '@react-navigation/native'
import Spinner from '../Spinner'
import { CLEAR_CART } from '../../redux/contants/resturantConstant'

const CartItems = ({restaurantName}) => {
  const navigation = useNavigation()
  const [modalVisible,setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const {items, } = useSelector((state)=> state.cartItems.selectedItems)
 
  const total = items
    .filter((item)=> item.restaurantName === restaurantName)
    .map((item)=> Number(item.price.replace('$', '')))
    .reduce((acc, curr)=>acc + curr,0) 

const totalUSD = `$${total.toFixed(2)}`

const addOrderToFireBase = async()=>{
  try {
    //set loading to
    setLoading(true);

    //connect to the datbase created using the getFirestore function and the app
    const db = getFirestore(firebaseApp);
     
    //created collection
    const orderCollection = collection(db, "orders");

    //add document into collection
    const orderRef = await addDoc(orderCollection, {
        items:items,
        restaurantName:restaurantName,
        createdAt:serverTimestamp()
    })
    console.log('orderRef', orderRef)

    setModalVisible(false)
    navigation.navigate('ordercomplete', {
      items:items,
      cartTotal:totalUSD, 
      restaurantName:restaurantName
    })

      dispatch({
        type:CLEAR_CART
      })

  } catch (error) {
      console.log(error)
      setLoading(false)
  }
   }

const ModalContent = () => {
    return (
      <View style={styles.modalContainer}>
          <View  style={styles.modalContentContainer}>
              <Text style={{textAlign:'center', marginTop:15,fontSize:20, fontWeight:'bold'}}>{restaurantName}</Text>
              <ScrollView showsHorizontalScrollIndicator={false}>
                 {items.map((item,i)=> <CartItem key={i} item={item}/>)} 
              </ScrollView>

              <View style={styles.subTotal}>
                <Text style={{fontWeight:'bold'}}>SubTotal</Text>
                <Text>{totalUSD}</Text>
              </View>

              <View  style={styles.checkout}>
                <TouchableOpacity  style={styles.checkoutAction} onPress={()=> addOrderToFireBase()}>
                  <Text  style={styles.checkoutText}>Checkout</Text>
                  <Text  style={styles.checkoutTotal}>{totalUSD}</Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>
    )
}

  return (
    <>
      {loading ? <Spinner /> : <><Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose = {()=> setModalVisible(false)}>
          {ModalContent()}
      </Modal>
 
      {total ?
        (<View style={styles.container}>
            <View  style={styles.innerContainer}>
              <TouchableOpacity  style={styles.cartContent} onPress={()=>setModalVisible(true)}>
                <Text  style={styles.cartText}>View Cart</Text>
                <Text  style={styles.cartTotal}>{totalUSD}</Text>
              </TouchableOpacity>
            </View>
        </View>) : (<></>)
    }</>}
    </>
  )
}

export default CartItems

const styles = StyleSheet.create({
   container:{
      flex:1,
      position:'relative',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      padding:10
   },
   innerContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
   },
   cartContent:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:300,
      position:'absolute',
      bottom:20,
      backgroundColor:'black',
      borderRadius:30,
      paddingHorizontal:30,
      paddingVertical: 15 },
   cartTotal:{
     color:'white',
    fontWeight:'bold'
   },
   cartText:{
    color:'white',
    fontWeight:'bold'
   },

   modalContainer:{
      flex:1,
      justifyContent:'flex-end',
      backgroundColor:'rgba(0,0,0,0.7)',
    
   },
   modalContentContainer:{
    minheight:500,
    maxHeight:900,
    backgroundColor:'white'
   },
  subTotal:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginTop:10,
     paddingHorizontal:20,
     paddingVertical:10
  },
  checkout:{
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     paddingHorizontal:5,
     paddingVertical:20
  },
  checkoutAction:{
    width:300,
    backgroundColor:'black',
    padding:15,
    borderRadius:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  checkoutText:{
    color:'white'
  },
  checkoutTotal:{
    color:'white'
  }

})