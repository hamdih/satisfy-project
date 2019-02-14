//es6 syntax for javascript code, not yet supported by all web pages
//react does understand it

import React from 'react'; //file wont understand its react code
import { StyleSheet,View , Text} from 'react-native'; //deconstructing the object, taking the elements we want to use
import Header from './src/components/header';
import PhotoSection from  './src/components/photo-section';
//import Dummy from './src/components/dummy'; 
const App = () => {
  const text = "Hello"; 
  return(
     <View >
     <Header text = "My New App"/>
     <PhotoSection/>
     </View>
   );
  // return(
  //   <Dummy />
  // )
 }




const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 export default App;
 