import { StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'

const SearchBar = () => { 
  return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete 
        placeholder='Search'
        styles={styles.geoStyles}
        renderLeftButton={()=> (
            <View><Ionicons name='location-sharp' size={20} style={styles.locationIcon}/></View>
        )}
        renderRightButton={()=> (
          <View style={styles.AntDesignContainer}>
            <AntDesign  name='clockcircle' size={12} style={styles.AntDesignIcon}/>
            <Text>Search</Text>
          </View>
      )}
        />
    </View>
  )
}
export default SearchBar

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop:15,
  },
  geoStyles:{
    textInputContainer: {
      flexDirection: 'row',
      backgroundColor: '#eee',
      borderRadius: 20,
      padding: 10
    },
    textInput: {
      backgroundColor: '#eee',
      height: 44,
      paddingVertical: 5,
      paddingHorizontal: 15,
      fontSize: 15,
      flex: 1,
    },
  },

  locationIcon:{
    marginLeft:15,
    marginTop:10
  },
  AntDesignContainer:{
     flexDirection:'row',
     alignItems:'center',
     marginRight:10,
     backgroundColor:'white',
     borderRadius:20, 
     paddingHorizontal:10,
     paddingVertical:5,
  },
  AntDesignIcon:{
    marginRight:10
  }
})