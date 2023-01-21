import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, SafeAreaView, Image, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../components/colors';
import {BackButton} from '../components/BackButton';
import {auth} from '../backend/firebase';
import {signOut, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import {Logo} from '../components/Logo'

export default function LogInScreen({navigation}) {

      signOut(auth);

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            navigation.navigate("Home", {id: user.email});
          }
        })

        return unsubscribe
      }, []);


      const handleLogIn = () => {

        signInWithEmailAndPassword(auth, email, pass)
            .then(UserCredential => {
                const user = UserCredential.user;
                console.log("Logged in with: ", user.email);

            })
            .catch(error => alert(error.message))
      };

      const [email, setEmail] = useState('');

      const [pass, setPass] = useState('');

      return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accessible = {false}>
          <SafeAreaView style = {styles.background}>
            <KeyboardAvoidingView style = {{flex: 1}} behavior = "position">
              <Logo style={styles.logo}/>
              <TextInput style={styles.email}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "EMAIL"
              textAlign = "center"
              value={email}
              onChangeText={(text) => setEmail(text)}   
              />
              <TextInput style={styles.password}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "PASS"
              textAlign = "center"
              secureTextEntry
              value={pass}
              onChangeText={(text) => setPass(text)}
              />

              <BackButton
              backstyle = {styles.backbutton}
              backtextstyle = {styles.backtext}
              />

              <TouchableOpacity 
              style={styles.loginbutton}
              onPress={handleLogIn}>
                <Text style = {styles.logintext}>
                  LOG IN
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    alignItems: "center",
    justifyContent: "center",
  },
  email: {
      height: 50,
      width: 165,
      margin: 30,
      borderWidth: 2,
      borderRadius: 50,
      padding: 25,
      paddingVertical: 0,
      top: 400, 
      fontSize: 20,
      borderColor: colors['color-text'],
      color: colors['color-text'],
    },
  password: {
      height: 50,
      width: 165,
      margin: 30,
      borderWidth: 2,
      borderRadius: 50,
      padding: 25,
      paddingVertical: 0,
      top: 375,
      fontSize: 20,
      borderColor: colors['color-text'],
      color: colors['color-text'],
    },
  logo: {
      width: 350, 
      height: 220,
      left: -50,
      position: 'absolute',
      top: 150,
    },
  backbutton:{
    padding: 20,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors['color-red'],
    width: 85,
    top: 500,
    right: 80,
  },
  backtext:{
      fontStyle: "italic",
      color: colors['color-text'],
  },
  logintext:{
      fontStyle: "italic",
      color: colors['color-text'],
  },
  loginbutton:{
    padding: 20,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors['color-red'],
    width: 95,
    top: 438,
    left: 210,
  },
});