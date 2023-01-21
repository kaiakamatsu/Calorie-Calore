import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View} from "react-native";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import CheckBox from '@react-native-community/checkbox';


export default function CalcScreen({navigation, route}) {

    const [height, setHeight] = useState('');

    const [weight, setWeight] = useState('');

    const [age, setAge] = useState('');

    return(
        
        <View style = {styles.background}>
            <Text style={styles.title}>how many calories should you eat to maintain your current body?</Text>
            <TextInput style={styles.age}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "AGE"
              textAlign = "center"
              secureTextEntry
              value={age}
              onChangeText={(text) => setAge(text)}
            />
            <TextInput style={styles.height}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "HEIGHT"
              textAlign = "center"
              value={height}
              onChangeText={(text) => setHeight(text)}   
            />
            <TextInput style={styles.weight}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "WEIGHT"
              textAlign = "center"
              secureTextEntry
              value={weight}
              onChangeText={(text) => setWeight(text)}
            />
            
            <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};


const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    bottom: 90,
    left: 35,
    fontSize: 20,
    fontStyle: "italic",
    color: 'black',
  },
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 230,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  background: {
    flex: 1,
    backgroundColor: colors['color-tan'],
    justifyContent: "center",
  },
  height: {
      height: 50,
      width: 165,
      margin: 30,
      borderWidth: 2,
      borderRadius: 50,
      padding: 25,
      paddingVertical: 0,
      top: -50,
      left: 90, 
      fontSize: 20,
      borderColor: colors['color-text'],
      color: colors['color-text'],
  },
  weight: {
      height: 50,
      width: 165,
      margin: 30,
      borderWidth: 2,
      borderRadius: 50,
      padding: 25,
      paddingVertical: 0,
      top: -50,
      left: 90, 
      fontSize: 20,
      borderColor: colors['color-text'],
      color: colors['color-text'],
  },
  age: {
      height: 50,
      width: 165,
      margin: 30,
      borderWidth: 2,
      borderRadius: 50,
      padding: 25,
      paddingVertical: 0,
      top: -50,
      left: 90, 
      fontSize: 20,
      borderColor: colors['color-text'],
      color: colors['color-text'],
  },
  male: {

  },
  female:{

  },
  label1:{

  },
  label2:{

  },
});