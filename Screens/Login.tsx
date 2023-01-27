import React, { useState } from "react"
import {View , Text , StyleSheet , Image, ImageBackground, TextInput, Button, TouchableOpacity} from "react-native"
// import { create } from "react-test-renderer"
import icon from "../Asstes/Logo.png"
import back from "../Asstes/background.jpg"
import grad from "../Asstes/gradba.jpg"
import icon2 from "../Asstes/logo2.png"
import back4 from "../Asstes/background2.jpg"
import back3 from "../Asstes/back3.jpg"
import { SocialIcon } from "@rneui/themed"
import faceb from "../Asstes/fb.png"
import git from "../Asstes/git.png"
import acc from "../Asstes/Acc.png"
 
// import {SocialIcon} from '@rneui/themed';

function Login3({navigation}){
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const loginn = ()=>{
    const obj = {
      email,
      password
    }
    console.log(obj);
    navigation.navigate("Home")

  }

  return<>
  <ImageBackground style={{ height: "100%",width:"100%"}} source={grad}>
  <View style={{width:"100%", padding:10, marginTop:50}}>
    <View style={{alignItems: "center"}}>
    <Image source={acc} style={{width:100, height:100}}/>
    </View>
    {/* <Text style={styles.mainheading}>Member Login</Text> */}
    
  <View style={{alignItems:'center', padding:8, marginTop: 20  }}>
    <TextInput placeholder="Email Address" keyboardType="email-address" onChangeText={(e)=>setemail(e)} style={styles.inp} />
  </View>
  <View style={{alignItems:'center', padding:8}}>
    <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(e)=>setpassword(e)} style={styles.inp} />
  </View>

  <View style={{alignItems:'center', padding:8}}>
    {/* <Button title="Login" style={styles.butn}/> */}
    <TouchableOpacity style={styles.butn} onPress={loginn}>
      <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Login</Text>
    </TouchableOpacity>
  </View>
  <Text style={{color:"white", textAlign:"center", fontWeight:"900", marginTop:15}}>Or Connect with</Text>

<View style={{ width:"100%", padding:5, marginTop:18}}>
  <TouchableOpacity style={{justifyContent:"center", alignItems:'center'}}>
    <Image source={faceb} style={{width:30, height:30}}/>
    <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Facebook</Text>
    <Text style={{color:"white", textAlign:"center", fontWeight:"900", marginTop:15}}>Or</Text>
    <Image source={git} style={{width:30, height:30, marginTop:18}}/>
    <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Github</Text>

    </TouchableOpacity>

    
    </View>
  <View style={{position:"absolute", top:565, left:110}}>
  <Text style={{color:"#faf0e6"}}>Powered by Taha Khan</Text>
  </View>
  </View>


  </ImageBackground>
  </>
}
export default Login3



const styles = StyleSheet.create({
    mainheading : {
      fontSize: 30,
      color: "#23395d",
      textAlign: "center",
    },
    mainContainer : {
      justifyContent: "center",
      alignItems: "center",
    },
    inp:{
      width: "90%",
      backgroundColor: "#faf0e6",
      padding: 5,
      fontSize:18,
      color:"#002648",
      borderRadius:100,
      textAlign:"center",
    //   borderBottomWidth: 1,
    //   borderBottomColor:"white"
    },
    butn:{
      backgroundColor:"#002648",
      borderRadius: 10,
      padding:8,
      width:"30%",
      marginTop:8
    },
   shadow:{  
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  }
})