import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import {Provider } from 'react-redux'
import storeConfiguration from './redux/store'

export default function App() {
  const store = storeConfiguration();
console.log(store)
  return (
    <View style={styles.container}>
        <StatusBar light />
        <Provider store={store}> 
          <Navigation />
        </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
