import React, { Component } from 'react';
import { Image,StyleSheet, View, Text , TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { white } from 'ansi-colors';
const logo = require('../../assets/Satisfy_logo_transparent.jpg');
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};//{username: '',password: ''};
    
      }
    
  render() {
    return (
      <View style = {styles.container}>
            

             <View style = {styles.content}>
             <Image 
            style = {styles.logo}
            source={logo}/>
            
                <View style={styles.inputContainer}>

                         <TextInput style = {styles.input} 
                                    onChangeText = {(username)=>this.setState({username})}
                                    value = {this.state.username}
                                    placeholder = 'username'/>
                                    
                         <TextInput secureTextEntry={true} style = {styles.input}
                        onChangeText = {(password)=>this.setState({password})}
                        value = {this.state.password}
                        placeholder = 'password'/>
                         
                          <TouchableOpacity onPress={this.login} style = {styles.buttonContainer}>
                                <Text style={styles.buttonText}> Login </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.login} style = {styles.otherButtons}>
                                <Text style={styles.signupText}> Sign Up </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.login} style = {styles.otherButtons}>
                                <Text style={styles.fpText}> Forgot Password? </Text>
                        </TouchableOpacity>


                </View>
                
                
             
            </View> 
      </View>
    );
  }
  
  
}



const styles ={
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',

    },
    logo:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        // paddingBottom :100,
        paddingTop: 300,
        //marginBottom: 80,
        aspectRatio: .5,
        //  height : 100,
        //  width: 50,
         // fontSize: 18,
        // fontWeight: 'bold',
        // textAlign: 'center',
         margin: 13,
        
     },
     inputContainer:{
        flex: 1,
        // height: 60,
    //    paddingTop: 150,
     },
    input: {
        borderBottomWidth: .2,
        width: 200,
        height: 40,
        // padding: 40,
        //borderRadius: 100,
        //color: 'white',
    },
    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c33c54',
        width: 200,
        height: 40,
        borderRadius: 20,
        zIndex: 100,
        marginTop:40,
        marginBottom:20,
    },
    buttonText:{
        //fontWeight: 'bold',
        paddingRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:5,
    },
    signupText:{
        //fontWeight: 'bold',
        fontSize: 9,
        paddingRight: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    fpText:{
        //fontWeight: 'bold',
        fontSize: 9,
        paddingRight: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    otherButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 30,
        borderRadius: 20,
        zIndex: 100,
    }





}