import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, SafeAreaView, Image, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../components/colors';
import {BackButton} from '../components/BackButton';
import {auth} from '../backend/firebase';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth';

export default function SignUpScreen() {

    const [email, setEmail] = useState('');

    const [pass, setPass] = useState('');

    const handleSignUp = () => {

        createUserWithEmailAndPassword(auth, email, pass)
            .then(UserCredential => {
                const user = UserCredential.user;
                console.log(user.email);
                signOut(auth);
                alert("Account has been created!");
            })
            .catch(error => alert(error.message))
    }

    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accessible = {false}>
          <SafeAreaView style = {styles.background}>
            <KeyboardAvoidingView style = {{flex: 1}} behavior = "position">
              
              <TextInput style={styles.email}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "EMAIL"
              textAlign = "center"
              onChangeText={(text) => setEmail(text)}
              value={email}
              />
              <TextInput style={styles.password}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "PASS"
              textAlign = "center"
              secureTextEntry
              onChangeText={(text) => setPass(text)}
              value={pass}
              />
              <BackButton
              backstyle = {styles.backbutton}
              backtextstyle = {styles.backtext}
              />
              <TouchableOpacity 
              style={styles.signupbutton}
              onPress={handleSignUp}>
                <Text style = {styles.signuptext}>
                    SIGN UP
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
      color: "black",
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
      color: "black",
    },
  logo: {
      width: 200, 
      height: 220,
      left: 15,
      position: 'absolute',
      top: 200,
    },
  backbutton:{
    padding: 20,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    width: 85,
    top: 500,
    right: 80,
  },
  backtext:{
      fontStyle: "italic",

  },
  signuptext:{
      fontStyle: "italic",

  },
  signupbutton:{
    padding: 20,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    width: 100,
    top: 438,
    left: 210,
  },
});