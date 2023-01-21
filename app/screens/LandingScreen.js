import React from 'react';
import {StyleSheet, Text, TextInput, SafeAreaView, Alert, Image, TouchableOpacity} from 'react-native';
import {colors} from '../components/colors';
import { useNavigation } from '@react-navigation/native';
import {LogoVert} from '../components/LogoVert'
import {auth} from '../backend/firebase';
import {signOut, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';

export default function LandingScreen() {
  signOut(auth);
      return (
        <SafeAreaView style = {styles.background}>
            <LogoVert style={styles.logo}/>
            <SignUpButton/>
            <LogInButton/>
        </SafeAreaView>
      );
};

function LogInButton() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.login} 
        onPress = {()=> navigation.navigate('Login')}>
            <Text style = {styles.logintext}>
                LOG IN
            </Text>
        </TouchableOpacity>
    );
}

function SignUpButton() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.signup} 
        onPress = {()=> navigation.navigate('Signup')}>
            <Text style = {styles.signuptext}>
                SIGN UP
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
      width: 200, 
      height: 300,
      position: 'absolute',
      bottom: 430,
    },
  login:{
    padding: 20,
    width: 120,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors['color-red'],
    top: 70,
  },
  signup:{
    padding: 20,
    width: 120,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors['color-red'],
    top: 230,
  },
  logintext:{
    color: colors['color-text'],
    fontWeight: "bold",
    fontStyle: "italic",
    left: 12,
  },
  signuptext:{
    color: colors['color-text'],
    fontWeight: "bold",
    fontStyle: "italic",
    left: 10,
  },
});