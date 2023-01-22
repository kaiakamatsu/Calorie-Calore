import React, {useEffect, useState} from 'react';
import { Modal, TouchableOpacity, Pressable, StyleSheet, Text, TextInput, View, Alert} from "react-native";
import {colors} from '../components/colors';
import { ButtonOptions } from "../components/ButtonOptions";
import { LogoSando } from '../components/LogoSando';
import { Logo } from '../components/Logo';


export default function CalcScreen({navigation, route}) {

    const [height, setHeight] = useState('height');

    const [weight, setWeight] = useState('weight');

    const [age, setAge] = useState('age');

    const [gender, setGender] = useState('gender');

    const [activity, setActivity] = useState('activity');

    const [modalVisible, setModalVisible] = useState(false);

    const [calories, setcal] = useState(0);

    let BMR = 0;
    let AMR = 0;
    

    const calculateCal = (age, height, weight, gender, activity) => {
      if ((age == 'age') || (height == 'height') || (weight == 'weight') || (gender == 'gender') || (activity == 'activity')){
        Alert.alert('ERROR', 'please input valid values for all parameters', [
          {
            text: 'OK', onPress: () => console.log('ok')
          },
        ]);
      }else{
        console.log("calculating calories");
        if (gender == 'female'){
          BMR = 655.1 + (9.563 * weight) + (1.85 * height) -(4.676 * age)
        }else{
          BMR = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)
        }
        if(activity == 'minimal'){
          AMR = BMR * 1.2
        }
        if(activity == 'little'){
          AMR = BMR * 1.375
        }
        if(activity == 'moderate'){
          AMR = BMR * 1.55
        }
        if(activity == 'active'){
          AMR = BMR * 1.725
        }
        if(activity == 'extreme'){
          AMR = BMR * 1.9
        }
        console.log(AMR);
        AMR = Math.round(AMR)
        setcal(AMR)
        setModalVisible(!modalVisible);
        return AMR;
      }
    }

    return(
        
        <View style = {styles.background}>
            <Text style={styles.title}>how many calories should you eat to maintain your current body?</Text>
            <TextInput style={styles.age}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "AGE"
              textAlign = "center"
              value={age}
              onChangeText={(text) => setAge(text)}
            />
            <TextInput style={styles.height}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "HEIGHT(cm)"
              textAlign = "center"
              value={height}
              onChangeText={(text) => setHeight(text)}   
            />
            <TextInput style={styles.weight}
              autoCorrect = {false}
              clearTextOnFocus = {true}
              keyboardAppearance = {"dark"}
              placeholder = "WEIGHT(kg)"
              textAlign = "center"
              value={weight}
              onChangeText={(text) => setWeight(text)}
            />
            <Text style={styles.gender}>{gender}</Text>
            <TouchableOpacity
              onPress = {()=> setGender('male')}
              style={styles.malewrap}
            >
              <Text style={styles.maletext}>MALE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {()=> setGender('female')}
              style={styles.femalewrap}
            >
              <Text style={styles.femaletext}>FEMALE</Text>
            </TouchableOpacity>
            <Text style={styles.activity}>{activity}</Text>
            <TouchableOpacity
              onPress = {()=> setActivity('minimal')}
              style={styles.minimalwrap}
            >
              <Text style={styles.activitytext}>MINIMAL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {()=> setActivity('little')}
              style={styles.littlewrap}
            >
              <Text style={styles.activitytext}>LITTLE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {()=> setActivity('moderate')}
              style={styles.moderatewrap}
            >
              <Text style={styles.activitytext}>MODERATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {()=> setActivity('active')}
              style={styles.activewrap}
            >
              <Text style={styles.activitytext}>ACTIVE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {()=> setActivity('extreme')}
              style={styles.extremewrap}
            >
              <Text style={styles.activitytext}>EXTREME</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress = {()=> calculateCal(age, height, weight, gender, activity)}
              style={styles.calculatewrap}
            >
              <Text style={styles.calculatetext}>CALCULATE!</Text>
            </TouchableOpacity>
            <Modal 
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.modalView}>
                <LogoSando style={styles.sando}/>
                <Text style = {styles.info}>to maintain your current body: </Text>
                <Text style = {styles.calories}>{calories} calories</Text>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.hide}>HIDE</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <ButtonOptions buttoncontainer = {styles.bcontainer} ID = {route.params.id}/>
        </View>
    );
};


const styles = StyleSheet.create({
  info:{
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    top: 150,
  },
  sando:{
    top: 100,
    height: 200,
    width: 200,
  },
  calories:{
    color: '#A569BD',
    fontSize: 30,
    fontWeight: 'bold',
    top: 200,
  },
  buttonClose: {
    position: "absolute",
    bottom: 10,
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
    borderColor: colors['color-red'],
  },
  hide: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors['color-red'],
  },
  modalView: {
    height: 685,
    top: 100,
    margin: 20,
    backgroundColor: colors['color-tan'],
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  gender:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    left: 175,
    top: 0,
  },
  maletext:{
    color: 'black',
    fontSize: 18,
  },
  malewrap: {
    top: -30,
    borderRadius: 8,
    borderColor: colors['color-text'],
    padding: 6,
    width: 65,
    borderWidth: 2,
    left: 50,
  },
  femaletext:{
    color: 'black',
    fontSize: 18,
  },
  femalewrap: {
    top: -67,
    borderRadius: 8,
    borderColor: colors['color-text'],
    padding: 6,
    width: 85,
    borderWidth: 2,
    left: 300,
  },
  title: {
    fontWeight: "bold",
    bottom: 0,
    left: 35,
    fontSize: 20,
    fontStyle: "italic",
    color: 'black',
  },
  bcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 80,
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
      top: -10,
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
      top: -30,
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
      top: 10,
      left: 90, 
      fontSize: 20,
      borderColor: colors['color-text'],
      color: colors['color-text'],
  },
  activity:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    left: 175,
    top: -30,
  },
  activitytext:{
    color: 'black',
    fontSize: 12,
  },
  minimalwrap: {
    borderRadius: 8,
    borderColor: colors['color-text'],
    padding: 6,
    width: 68,
    borderWidth: 2,
    left: 10,
  },
  littlewrap: {
    top: -30,
    borderRadius: 8,
    borderColor: colors['color-text'],
    padding: 6,
    width: 56,
    borderWidth: 2,
    left: 90,
  },
  moderatewrap: {
    top: -60,
    borderRadius: 8,
    borderColor: colors['color-text'],
    padding: 6,
    width: 83,
    borderWidth: 2,
    left: 159,
  },
  activewrap: {
    top: -91,
    borderRadius: 8,
    borderColor: colors['color-text'],
    padding: 6,
    width: 62,
    borderWidth: 2,
    left: 252,
  },
  extremewrap: {
    top: -121,
    borderRadius: 8,
    borderColor: colors['color-text'],
    padding: 6,
    width: 72,
    borderWidth: 2,
    left: 323,
  },
  calculatewrap: {
    position: 'absolute',
    top: 670,
    borderRadius: 8,
    borderColor: 'black',
    padding: 9,
    width: 178,
    borderWidth: 4,
    left: 120,
  },
  calculatetext:{
    color: colors['color-red'],
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});