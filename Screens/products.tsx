import {View , Text, TouchableOpacity ,Image ,Alert} from "react-native"
import React, {  useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import styles from '../styling';
import { LogBox } from 'react-native';

const Products = () => {
  LogBox.ignoreLogs([
    `ReactImageView: Image source "[object Object]" doesn't exist`,
  ]);
const [ prefer , setprefer ] = useState({})
const openCam = ()=>{
  launchCamera({mediaType: "photo"}, (res)=>{
    console.log(res);      
    setprefer(res.assets[0].uri)
  });
}

const openGall = ()=>{
  launchImageLibrary({mediaType: "photo"}, (res)=>{
    console.log(res);      
    setprefer(res.assets[0].uri)
  });
}
  

  const Luancher = () => {
    Alert.alert('Upload Image', "Choose a source", [
      {text: 'open gallery', onPress: () => openGall()},
      {text: 'open camera', onPress: () => openCam()},
    ]);
  }

return (
  <>
  <View style={[styles.justifyContentCenter, styles.h100, styles.alignItemsCenter]}>
    <TouchableOpacity onPress={Luancher} style={[styles.btn, styles.w50,]}>
        <Text style={[styles.textLight, styles.textCenter]}>Upload</Text>
    </TouchableOpacity>
    
    <View style={{marginTop:10}}>
    <Image source={{uri:`${prefer}`}} style={{height:100, width:100}}/>
    </View>
    
  </View> 
  </>
  )
}

export default Products