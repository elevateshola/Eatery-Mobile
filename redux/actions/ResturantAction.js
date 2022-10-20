import {
    GET_RESTAURANTS_REQUEST,
    GET_RESTAURANTS_SUCCESS,
    GET_RESTAURANTS_FAIL,
    // GET_RESTAURANTDETAIL_REQUEST,
    // GET_RESTAURANTDETAIL_SUCCESS,
    // GET_RESTAURANTDETAIL_FAIL,
   ADD_MENUTO_CART,
    CLEAR_ERRORS
   } from '../contants/resturantConstant.js'

   import axios from 'axios'

   export const getRestaurantsAction = (city, activeTab) => async(dispatch, getStore)=> {
        // https://www.yelp.com/developers/v3/manage_app?app_created=True
        const API_KEY_YELP = 'XHTUgRTJbYlmnFykh4RdHV2_3wB4oPARrsUePd-kCisQdQ9pijvPgqUtXV9JaTaDh62CeDi4t3Pv4VsnNmCiugjIh0l_QlI484bTgGzEk5c6cfYwWhkBB0kw55m2YnYx'
        const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
      
         const config = {
            headers:{
                "Content-Type":"Application/json",
                Authorization:`Bearer ${API_KEY_YELP}`
            }
         }
        try{
        dispatch({
            type:GET_RESTAURANTS_REQUEST
         })

         const {data} = await axios.get(url, config);
      // console.log(data)
         dispatch({
            type:GET_RESTAURANTS_SUCCESS,
            payload: data.businesses.filter((item)=> item.transactions.includes(activeTab.toLowerCase()))
         })

      }catch(err){
      //   let message = err.response && err.response.data.message ? err.response.data.message : err.message;
         dispatch({
            type:GET_RESTAURANTS_FAIL,
            payload:err.message
         })
      }
   }

   // Clear Errors
export const clearErrors = () => async (dispatch) => {
   dispatch({
     type: CLEAR_ERRORS,
   });
 };

 //add menu to cart
 export const selectedCartItemsAction = (isCheckboxChecked, menuItem, restaurantName)=> async (dispatch) =>{
         dispatch({
            type:ADD_MENUTO_CART,
            payload:{
               ...menuItem,
               isCheckboxChecked,
               restaurantName
            }
         })
 }